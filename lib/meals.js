import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    // Simulating loading time:
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulating an error:
    // throw new Error('Failed to fetch data');

    return db.prepare('SELECT * FROM meals').all();
};

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();

    /** 🚨 Todo: To make sure that you don't accidentally override other images
     * with the same file name, you could consider adding some random unique
     * element to each file name:
     */
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving the image failed!');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (
            title,
            summary,
            instructions,
            creator,
            creator_email,
            image,
            slug
        )
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal);
};

import Link from 'next/link';
import styles from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({meals}) {
    return (
        <ul className={styles.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    {/* <Link href={`/meals/${meal.slug}`}>
                        <h3>{meal.title}</h3>
                    </Link> */}
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};
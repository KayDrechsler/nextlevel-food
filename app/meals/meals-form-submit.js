/**
 * # Meals Form Submit Button
 */
'use client';

/**
 * ## Imports
 */
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>{pending ? ("Submitting...") : ("Share Meal")}</button>
    );
};
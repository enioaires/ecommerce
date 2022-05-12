import { loadStripe } from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51Ho6sPEekSvZEeatE9Ppy0BcUbMLkVeRHnxXS9DBLA9B5lFaCfRYMyaOUWUhMDa3GH7xuah5WVseOc5UZsxDPaqz0040S9DzrH');
    }

    return stripePromise
}

export default getStripe
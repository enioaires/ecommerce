import Stripe from 'stripe'

const stripe = new Stripe('sk_test_51Ho6sPEekSvZEeat8MV49LNX2hnZCThlgnx4Cii7YigOmS3WhDhiM5CYJDjREwuS0J6yyrKEoGD3sbeBgT2o6pd500THfc163T')

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1KyIS0EekSvZEeat4mOOUZj6' },
                ],
                line_items: req.body.map((item) => {
                    console.log(item.image[0].asset._ref)
                    const img = item.image[0].asset._ref
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vqgpgr4m/production/').replace('-png', '.png')

                    return {
                        price_data: {
                            currency: 'BRL',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
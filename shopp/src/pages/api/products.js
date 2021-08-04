

export default function handler(req, res) {
    res.status(200).json(
        [
            { Product: 'Video Game 1' },
            { Product: 'Video Game 2' },
            { Product: 'Video Game 3' },
            { Product: 'Video Game 4' },
            { Product: 'Video Game 5' }
        ]
    )
}

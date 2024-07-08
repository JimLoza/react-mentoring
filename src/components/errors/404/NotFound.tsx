import './not-found.css'

export const NotFound = () => {
    return (
        <div
            className="not-found-container"
        >
            <h1>404</h1>
            <img src="https://66d4335c-6df7-4c6f-8489-1a8bdf3a56ff-em-assets.s3.amazonaws.com/assets/common/pikachu-preview.png" alt="" />
            <h1>Pokemon Not Found</h1>
            <button
                onClick={() => window.history.back()}
            >Regresar</button>
        </div>
    )
}

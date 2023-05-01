export const Video = ({urlFI, cap}) => {
    return (
        <video controls width="50%">
            <source src="/video-example.webm" type="video/webm" />
            <source src={`${urlFI}/${cap.collectionId}/${cap.id}/${cap.capitulo}`} type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
    )
}
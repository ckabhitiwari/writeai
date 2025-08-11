import ModalVideo from "react-modal-video"; 


const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "Q5PG0rMXgvw", 
  
}:any ) => {
  return (
    <>
      <ModalVideo
        channel="youtube" 
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
 
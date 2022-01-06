import "./review.css";

export default function Reviews(props){
    return (
            <div className="review-section">
                {props.review.map(reviews =>(
                    <div className="revcard">
                        <div className="revHeader">
                            <div className="image"><img src={reviews.userImage} alt="userimage" width="50px"></img></div>
                            <div className="handle">@{reviews.userHandle}</div>
                               
                        </div>
                            <div className="revBody">
                            <div className="body"> {reviews.body}</div>
                        </div>
                     </div>
                ))}
        
            </div>
        );
}

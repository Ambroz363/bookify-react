export default function Reviews(props){
    return (
            <div>
                {props.review.map(reviews =>(
                    <div className="revcard">
                        <div className="revHeader">
                            <div className="image"><img src={reviews.userImage} alt="userimage"></img></div>
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

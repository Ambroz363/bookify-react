import { Component } from "react";
import axios from 'axios';

class DeleteButton extends Component {

    render() {

        const body = {
            userHandle : this.props.userHandle,
           
        }
        const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/reviews/' + this.props.reviewId + '/unlike';

        function unlike () {

            axios
            .delete( url, body)
            .then( (res) =>{
                console.log(res);
            })
            .catch((error)=>{
            alert(error)
            })

        }

        return (
            <div>
                <button onClick = {() => {unlike()}}  ><i class="fa fa-trash" aria-hidden="true"></i>

                </button>
            </div>
        );

  
    }
}


export default DeleteButton;
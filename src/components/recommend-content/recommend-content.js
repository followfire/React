import React,{ Component } from 'react';
import content from '../../img/recommend-bg.jpg'
import './recommend-content.css'
export default class extends Component{
    render(){
        return (<a className='recommend-content' href='https://ac.o2.qq.com/php/click.php?loc_id=119_0d8e2b9df01ce2966bb5d8dd52e865e1&sub_adtag=&info_data=b92JBeHhVQJJAfZkwW4SYZjQoCkdjQuzWj6Tl2kSj3cvY8ukIyU_EjC4s8hTco8hZylX7c-IVZcYvl6V2mjc3_F5jPIaTaz2Gk40rCtXoHtbgxVyJitzzmUo8McxaUX6nVvuhsr6rnRdVCMuZNsBdUAAZz5dPOf9_v1Te5przbxTw30Y5llrPibP02FANNyOE4Q5FNIeQl2dkwfOrGunaZU2MBGmIT-iCDob_d3LCuQJX_9b9Byp4vcwGqjwbKX8VLJ_XgTd7nrBJiFMN_6w3U6LQZF7LFFntsxd19FuZxBx8Y271NLApD9KXUBoExrPPLKnIXm1Lb3LJwyXI_cncCyz_rkrVS8KdcmJjuJm9EbAxseJRybrTVxjR3rWkt8yCGEpZAJV7LNUag6qS2OdHJMk6TE6utn-exZd-oWsdsA'>
                    <img src={content} alt=''/>
                </a>
        );
    }
}
import React, {useState} from "react";
import '../TuitList/tuits.css';
import {useDispatch}
    from "react-redux";
import {createTuit} from "../../../actions/tuits-actions"

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    return (

        <>
            <li className="list-group-item border-0 bg-black">
                <div className="row pt-1">
                    <div className="col-2 ps-1 pe-2 wd-profile-frame">
                        <img src="../../images/elon_musk.jpg" alt="host avatar" className="img-fluid wd-profile-image"/>
                    </div>
                    <div className="col-10">
                        <div className="row m0">
                            <p className="m-0 text-white-50 fs-6">What's happening?</p>
                        </div>
                        <div className="row ms-0 wd-whatshappening-textarea">
                            <textarea className="bg-black border-0 text-white"
                                      id = "whatsHappening"
                                      onChange={(event) =>
                                          setWhatsHappening({tuit: event.target.value})
                                      }>
                            </textarea>
                        </div>
                        <div className="row ms-0 mt-3 mb-3 wd-whatshappening-icon">
                            <div className="col-1 ps-0"><i className="fa-regular fa-image "></i></div>
                            <div className="col-1 ps-0"><i className="fa-solid fa-chart-column"></i></div>
                            <div className="col-1 ps-0"><i className="fa-regular fa-face-smile"></i></div>
                            <div className="col-1 ps-0"><i className="fa-regular fa-calendar"></i></div>
                            <div className="col-5"></div>
                            <div className="col-3 mt-1 pe-0">
                                <button className="btn btn-primary btn-block rounded-pill wd-tuit-button"
                                        onClick={() =>
                                            {
                                                document.getElementById('whatsHappening').value = '';
                                                // we need this line to clear the textarea after hitting the Tuit button
                                                createTuit(dispatch, whatsHappening);
                                            }
                                        }
                                >
                                    <span className="wd-small-fontsize">Tuit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}
export default WhatsHappening;
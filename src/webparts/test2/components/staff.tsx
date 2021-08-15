import * as React from 'react';
import './Test2.module.scss';
import { ITest2Props } from './ITest2Props';
import Brian from '../Pictures/lettuce.jpg';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';
//import { Row, Container, Col } from 'react-bootstrap';
//import * as ReactBootstrap from 'react-bootstrap';




export default class SpfxCustomers extends React.Component<ITest2Props, {}> {

  public render(): React.ReactElement<ITest2Props > {
    return (
        <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
                <div className="ms-Grid-col ms-sm11 ms-xl11"><h3>Faculty</h3></div>

            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
                <div className="ms-Grid-col ms-sm10 ms-xl10">
                    <hr></hr>
                </div>
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
                <div className="ms-Grid-col ms-sm3 ms-xl3">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                <b>Dr. Alice</b>

                </div>
                <div className="ms-Grid-col ms-sm8 ms-xl8">
                    <ul>
                        <li>Classical reading</li>
                        <li>Public Speaking</li>
                        <li>Narrative Writing</li>
                        <li>College Essay</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
                <div className="ms-Grid-col ms-sm10 ms-xl10">
                    <hr></hr>
                </div>
                <div className="ms-Grid-col ms-sm1 ms-xl1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Dr. Chris</h3>
                    <ul>
                        <li>Debate</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Ms. Jane</h3>
                    <ul>
                        <li>SAT/PSAT English</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Mr. Johnson</h3>
                    <ul>
                        <li>Performance Arts</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Coach John Hendrick</h3>
                    <ul>
                        <li>Chess</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Mrs. Hou</h3>
                    <ul>
                        <li>Mathematics</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Mr. Marberry</h3>
                    <ul>
                        <li>Adult English</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Mr. Niu</h3>
                    <ul>
                        <li>Number Sense</li>
                        <li>ISEE Math</li>
                        <li>Geometry</li>
                        <li>Competition Math</li>
                        <li>Physics</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Dr. Robert</h3>
                    <ul>
                        <li>Reading/Writing</li>
                        <li>ISEE English</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Dr. Tran</h3>
                    <ul>
                        <li>Biology</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Ms. Xu</h3>
                    <ul>
                        <li>Chemistry</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Dr. Zhao</h3>
                    <ul>
                        <li>Chemistry</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm1"></div>
                <div className="ms-Grid-col ms-sm2">
                    <img className="contact-picture"
                        src={Brian}
                        alt="avatar"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="ms-Grid-col ms-sm8">
                    <h3>Dr. Zheng</h3>
                    <ul>
                        <li>Physics</li>
                    </ul>
                </div>
                <div className="ms-Grid-col ms-sm1"></div>
            </div>
        </div>
    );
  }
}
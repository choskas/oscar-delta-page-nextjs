import Link from 'next/link';

const MyCV = (props) => {

    return (
        <div className="my-cv-container">
            <h2>
                My CV
            </h2>
            <div className="education-work-container">
                <div className="education-container">
                    <h4>Education</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>

                <div className="work-container">
                    <h4>Work experience</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                
            </div>
           <div className="view-full-cv-container"> <Link href="/cv"><a><button type="button" class="btn btn-primary">View full CV</button></a></Link> </div>
           {/* <div className="logos-container">
                <div className="first-logo-container">
                    <img src="/logo/react.png"/>
                    <img src="/logo/nodejs.png" className="second-img-logo"/>
                    <img src="/logo/next-js.png" />
                </div>
                <div className="second-logo-container">
                    <img src="/logo/mongodb.png"/>
                    <img src="/logo/npm.png" />
                    <img src="/logo/github.png" />
                </div>
            </div> */}
        </div>
    )
}

export default MyCV;
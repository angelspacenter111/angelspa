import React from 'react'
import Link from 'next/link'
import { base_url } from '@/app/information'
const Breadcrumb = (props) => {
    return (
        <section className="breadcrumb-area d-flex align-items-center" style={{ background: "#cb7446", minHeight: "350px" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="breadcrumb-wrap text-left">
                            <div className="breadcrumb-title">
                                <h2 style={{ color: "black" }}>{props.pagename}</h2>
                                <div className="breadcrumb-wrap">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link style={{ color: "black" }} href="/">Home</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page" style={{ color: "black !important" }}>{props.pagename}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb
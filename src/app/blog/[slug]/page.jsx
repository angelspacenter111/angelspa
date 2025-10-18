import React from 'react'
import Header from '@/app/components/Header';
import Breadcrumb from '@/app/components/Breadcrumb'
import Footer from '@/app/components/Footer';
import Servicesidebar from '@/app/components/Servicesidebar';
import { base_url, name } from '@/app/information'
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Blogsidebar from '@/app/components/Blogsidebar';

export async function generateMetadata(props) {

    const { slug } = await props.params;
    const filePath = path.join(process.cwd(), 'dataset', slug + '.json');
    const pstdatajson = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(pstdatajson);

    console.log(data);

    return {
        title: data.pagename,
        description: data.metadescription,
        charSet: "utf-8",
        alternates: {
            canonical: base_url + "blog/" + data.pageurl,
        },
    };
}

const page = async props => {

    const { slug } = await props.params;

    const filePath = path.join(process.cwd(), 'dataset', slug + '.json');
    const pstdatajson = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(pstdatajson);


    return (
        <>
            <Header />
            <main>
                <Breadcrumb pagename={data.pagename} />

                <section className="inner-blog b-details-p pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div dangerouslySetInnerHTML={{ __html: atob(data.contentHtml) }} className='col-md-8'></div>
                            <Blogsidebar />
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    )
}

export default page
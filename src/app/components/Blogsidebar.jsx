import React from 'react'
import Link from 'next/link';

const Blogsidebar = () => {
    return (
        <div className="col-md-4">
            <aside className="sidebar-widget">
                <section id="recent-posts-4" className="widget widget_recent_entries">
                    <h2 className="widget-title">Recent Posts</h2>
                    <ul>
                        <li>
                            <Link href="/blog/couple-massage-in-mumbai">
                                User Experience Psychology And Performance Smshing
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    )
}

export default Blogsidebar
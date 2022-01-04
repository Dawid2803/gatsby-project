import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery} from 'gatsby'
import { posts, post} from './Blog.module.scss'
import Head from '../components/Head'



function Blog() {

        const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                sort: {
                fields: publishedDate,
                order: DESC,
              }
            ){
              edges{
                node{
                  title
                  slug
                  publishedDate(formatString: "MMMM Do, YYYY")
                }
              }
            }
          }
        `)
    // const data = useStaticQuery(graphql`
    //     query{
    //         allMarkdownRemark{
    //             edges{
    //                 node{
    //                     frontmatter{
    //                         title
    //                         date
    //                     }
    //                     fields{
    //                         slug
    //                     }
    //             }
    //         }
    //         }
    //     }
    // `)
    const blogItemNodes = data.allContentfulBlogPost.edges;
    
    const blogTitles = blogItemNodes.map((item) => 
    
        <li className={post} key={item.node.title}>
            <Link to={`/blog/${item.node.slug}`}>
                <h2>{item.node.title}</h2>
                <p>{item.node.publishedDate}</p>        
            </Link>
        </li>
    )

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Welcome to my blog!</h1>
            <ol className={posts}>
                {blogTitles}
            </ol>
        </Layout>
    )
}

export default Blog

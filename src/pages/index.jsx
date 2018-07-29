import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import MainHeader from "../components/Layout/Header";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.posts.edges;
    console.log(postEdges);
    
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <MainHeader
            siteTitle={config.siteTitle}
            siteDescription={config.siteDescription}
            location={this.props.location}
            logo={config.siteLogo}
          />
          {postEdges.reverse().map(({node})=>{
           // console.log(node.excerpt);
            
           // console.log(node);
            return (
              <div key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <h3>{node.frontmatter.title}</h3>
                </Link>
                  <img src={node.frontmatter.cover} alt={node.frontmatter.title} style={{width:"500px", height:"280px"}}/>
                <p className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                {node.date}
              </div>
              

            )
          })}
        </main>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
query IndexQuery {
  allMarkdown: allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover
          date
        }
      }
    }
  }
  posts: allMarkdownRemark(
    limit: 2000
    filter: { frontmatter: { type: { eq: "post" } } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover
          date
        }
      }
    }
  }
}
`

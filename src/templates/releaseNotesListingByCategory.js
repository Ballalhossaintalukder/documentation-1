import React, { useState } from "react"
import { graphql } from "gatsby"
import debounce from "lodash.debounce"
import Mark from "mark.js"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import ReleaseNoteTeaser from "../components/ReleaseNoteTeaser"
import { releaseNoteCategoryLoader } from "../data/releaseNoteCategories.js"
import ReleaseNoteCategorySelector from "../components/releaseNoteCategorySelector.js"

import {
  Container,
  FlexContainer,
  Icon,
} from "@pantheon-systems/pds-toolkit-react"

// Set container width for search and main content.
const containerWidth = "standard"

const ReleaseNotesListingByCategoryTemplate = ({ data, pageContext }) => {
  const allReleasenotes = data.allMdx.edges
  const categorySlug = pageContext.category
  const categoryData = releaseNoteCategoryLoader(categorySlug)

  const emptyQuery = ""

  // Set up state.
  const [filteredData, setFilteredData] = useState([])
  const [query, setQuery] = useState(emptyQuery)

  // Handle search input.
  const handleInputChange = (event) => {
    const query = event.target.value

    // Get all releasenotes.
    const releasenotes = data.allMdx.edges || []

    // Filter releasenotes based on query.
    const filteredData = releasenotes.filter((releasenote) => {
      const title = releasenote.node.frontmatter.title
      const rawBody = releasenote.node.rawBody
      const publishedDate = releasenote.node.frontmatter.published_date
      const dateOptions = { year: "numeric", month: "long", day: "numeric" }
      const formattedDate = new Date(publishedDate).toLocaleDateString(
        undefined,
        dateOptions
      )
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        rawBody.toLowerCase().includes(query.toLowerCase()) ||
        formattedDate.toLowerCase().includes(query.toLowerCase())
      )
    })

    // Update state based on query.
    setFilteredData(filteredData)
    setQuery(query)

    // Mark releasenotes based on query.
    var context = document.querySelector(".docs-release-note-results")
    var markInstance = new Mark(context)

    setTimeout(function () {
      markInstance.unmark({
        done: function () {
          markInstance.mark(query)
        },
      })
    }, 100)
  }

  // Debounce search input.
  const debouncedHandleInputChange = debounce(handleInputChange, 300)

  // If query is empty, show all releasenotes.
  const hasSearchResults = filteredData && query !== emptyQuery
  const releasenotes = hasSearchResults ? filteredData : allReleasenotes

  // Preprocess release notes teasers.
  const renderedTeasers = releasenotes.map((releasenote, index) => (
    <ReleaseNoteTeaser
      key={index}
      ReleaseNoteData={releasenote.node}
      className="pds-spacing-mar-block-end-5xl"
    />
  ))

  // Render release notes or no results message.
  const noResultsMessage = (
    <p className="pds-spacing-mar-block-end-2xl">
      No results found. Try refining your search terms or explore other
      categories.
    </p>
  )
  const renderedReleaseNotes =
    releasenotes.length !== 0 ? renderedTeasers : noResultsMessage

  return (
    <Layout containerWidth={containerWidth} excludeSearch footerBorder>
      <SEO
        title={`Pantheon release notes about ${categoryData["displayName"]}`}
        description={`A filtering of changes to the Pantheon Platform by the category of ${categoryData["displayName"]}`}
        image={"assets/images/default-thumb-doc.png"}
      />
      <main id="docs-main" tabIndex="-1">
        <Container
          width={containerWidth}
          className="pds-spacing-mar-block-start-3xl"
        >
          <h1>
            Pantheon release notes: <em>{categoryData["displayName"]}</em>
          </h1>
          <FlexContainer
            style={{
              borderBottom: "1px solid var(--pds-color-border-default)",
              paddingBlockEnd: "var(--pds-spacing-3xl)",
              paddingBlockStart: "var(--pds-spacing-m)",
            }}
          >
            <div
              className="pds-input-field__input-wrapper"
              style={{
                flexGrow: "2",
              }}
            >
              <div className="pds-input-field__decorators">
                <Icon iconName="magnifyingGlass" />
              </div>
              <input
                type="search"
                aria-label={`Search ${categoryData["displayName"]} release notes`}
                placeholder={`Search ${categoryData["displayName"]} release notes`}
                id="release-note-filter-by-category"
                className="pds-input-field__input"
                onChange={debouncedHandleInputChange}
              />
            </div>
            <ReleaseNoteCategorySelector />
          </FlexContainer>
          <div
            id="doc"
            className="docs-release-note-results pds-spacing-mar-block-start-2xl"
          >
            {renderedReleaseNotes}
          </div>
        </Container>
      </main>
    </Layout>
  )
}

export default ReleaseNotesListingByCategoryTemplate

export const pageQuery = graphql`
  query releasenotes($category: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/releasenotes/" }
        frontmatter: { categories: { eq: $category } }
      }
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          rawBody
          ...theReleaseNoteFields
        }
      }
    }
  }
`

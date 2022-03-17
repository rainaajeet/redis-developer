/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';
import {useTitleFormatter} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocPaginator from '@theme/DocPaginator';
import DocVersionSuggestions from '@theme/DocVersionSuggestions';
import type {Props} from '@theme/DocItem';
import IconEdit from '@theme/IconEdit';

import clsx from 'clsx';
import styles from './styles.module.css';
import {
  useActivePlugin,
  useVersions,
  useActiveVersion,
} from '@theme/hooks/useDocs';

function DocItem(props: Props): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {url: siteUrl} = siteConfig;
  const {content: DocContent} = props;
  const {
    metadata,
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
      authors,
    },
  } = DocContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
  } = metadata;

  const authorLookup = siteConfig.customFields.authors;

  const {pluginId} = useActivePlugin({failfast: true});
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId);

  // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362
  const showVersionBadge = versions.length > 1;

  const metaTitle = useTitleFormatter(title);
  const metaImageUrl = useBaseUrl(metaImage, {absolute: true});
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}>
          <DocVersionSuggestions />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">
                    Version: {version.label}
                  </span>
                </div>
              )}
              {!hideTitle && (
                <header>
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              {DocContent.frontMatter.authors && (
                <div className="docAuthors">
                  <hr/>
                    {DocContent.frontMatter.authors.map(author => {
                      return <div className={styles.authorByline}><img className={styles.authorProfileImage} src={'/img/' + (authorLookup[author].image ? authorLookup[author].image : 'default_author_profile_pic.png')} alt={'Profile picture for ' + authorLookup[author].name}/> <div><div className={styles.authorLabel}>Author:</div><div><a href={authorLookup[author].link} target="_blank">{authorLookup[author].name}</a>, {authorLookup[author].title}</div></div></div>
                    })}
                  <hr/>
                </div>
              )}
              <div className="markdown">
                <DocContent />
              </div>
            </article>
            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--xl">
                <div className="row">
                  {(! DocContent.frontMatter.hasOwnProperty('isEditable') || DocContent.frontMatter.isEditable === true) && (
                    <div className="col">
                      {editUrl && (
                        <a
                          href={editUrl}
                          target="_blank"
                          rel="noreferrer noopener">
                          <IconEdit />
                          Edit this page
                        </a>
                      )}
                    </div>
                  )}                  
                  {(lastUpdatedAt || lastUpdatedBy) && (
                    <div className="col text--right">
                      <em>
                        <small>
                          Last updated{' '}
                          {lastUpdatedAt && (
                            <>
                              on{' '}
                              <time
                                dateTime={new Date(
                                  lastUpdatedAt * 1000,
                                ).toISOString()}
                                className={styles.docLastUpdatedAt}>
                                {new Date(
                                  lastUpdatedAt * 1000,
                                ).toLocaleDateString()}
                              </time>
                              {lastUpdatedBy && ' '}
                            </>
                          )}
                          {lastUpdatedBy && (
                            <>
                              by <strong>{lastUpdatedBy}</strong>
                            </>
                          )}
                          {process.env.NODE_ENV === 'development' && (
                            <div>
                              <small>
                                {' '}
                                (Simulated during dev for better perf)
                              </small>
                            </div>
                          )}
                        </small>
                      </em>
                    </div>
                  )}
                </div>
              </div>
            )}
            {(! DocContent.frontMatter.hasOwnProperty('useNextPrev') || DocContent.frontMatter.useNextPrev === true) && (
              <div className="margin-vert--lg">
                <DocPaginator metadata={metadata} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DocItem;

import React from "react";

import Section from "./section";
import HeroBanner from "./hero-banner";
import BlogBanner from "./blog-banner";
import CardSection from "./card-section";
import TeamSection from "./team-section";
import BlogSection from "./blog-section";
import SectionBucket from "./section-bucket";
import AboutSectionBucket from "./about-section-bucket";
import SectionWithHtmlCode from "./section-with-html-code";
import { ComponentsProps } from "../typescript/pages";
import "./composable.css";
import { ComposableComponent } from "@contentstack/composable-studio-react";
import { FancyButton } from "./FancyButton";

type RenderComponentsProps = {
  pageComponents: ComponentsProps[];
  blogsPage?: boolean;
  contentTypeUid: string;
  entryUid: string;
  locale: string;
};

export default function RenderComponents({
  pageComponents,
  blogsPage,
  contentTypeUid,
  entryUid,
  locale,
}: RenderComponentsProps) {
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return blogsPage ? (
            <BlogBanner
              blog_banner={component.hero_banner}
              key={`component-${key}`}
            />
          ) : (
            <>
              <HeroBanner
                hero_banner={component.hero_banner}
                key={`component-${key}`}
              />
              {/* <FancyButton /> */}
              {/* <ComposableComponent compositionUid="section" /> */}
            </>
          );
        }
        if (component.section) {
          return (
            <Section section={component.section} key={`component-${key}`} />
          );
        }
        if (component.section_with_buckets) {
          return component.section_with_buckets.bucket_tabular ? (
            <AboutSectionBucket
              sectionWithBuckets={component.section_with_buckets}
              key={`component-${key}`}
            />
          ) : (
            <SectionBucket
              section={component.section_with_buckets}
              key={`component-${key}`}
            />
          );
        }
        if (component.from_blog) {
          return (
            <BlogSection blogs={component.from_blog} key={`component-${key}`} />
          );
        }
        if (component.section_with_cards) {
          return (
            <CardSection
              cards={component.section_with_cards.cards}
              key={`component-${key}`}
            />
          );
        }
        if (component.section_with_html_code) {
          return (
            <SectionWithHtmlCode
              embedObject={component.section_with_html_code}
              key={`component-${key}`}
            />
          );
        }
        if (component.our_team) {
          return (
            <TeamSection
              ourTeam={component.our_team}
              key={`component-${key}`}
            />
          );
        }
      })}
    </div>
  );
}

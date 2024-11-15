import React from "react";
import HeaderText from "../../components/FullBlogPostComponents/HeaderText";
import HeaderParagraph from "../../components/FullBlogPostComponents/HeaderParagraph";
import Info from "../../components/FullBlogPostComponents/Info";
import SocialProps from "../../components/FullBlogPostComponents/SocialProps";
import HeroImage from "../../components/FullBlogPostComponents/HeroImage";
import BlogText from "../../components/FullBlogPostComponents/BlogText";

const FullBlogPost = () => {
  return (
    <div className="bg-white dark:bg-black space-y-10 py-12">
      <div className="space-y-8">
        <HeaderText />
        <HeaderParagraph />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <SocialProps/>
      </div>
      <div>
        <HeroImage/>
      </div>
      <div>
        <BlogText/>
      </div>
    </div>
  );
};

export default FullBlogPost;

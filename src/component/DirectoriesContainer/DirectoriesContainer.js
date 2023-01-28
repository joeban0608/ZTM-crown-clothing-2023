import React from "react";
import DirectoryContainer from "./DirectoryContainer";
import categoriesInfoList from './directories.json'
import "./directoriesContainer.scss";

const DirectoriesContainer = () => {
  const directoryContainerJsx = categoriesInfoList.map((categoryInfo) => (
    <DirectoryContainer key={categoryInfo.title} categoryInfo={categoryInfo} />
  ));

  return <ul className="directories-container">{directoryContainerJsx}</ul>;
};

export default DirectoriesContainer;

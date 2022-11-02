import aws from "../assets/aws.png";
import google from "../assets/google-cloud.png";
import angular from "../assets/angular.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import ruby from "../assets/ruby.png";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import postgress from "../assets/postgress.png";
import mssql from "../assets/mssql.png";

const skills = [
  { title: "aws", logo: aws },
  { title: "google", logo: google },
  { title: "angular", logo: angular },
  { title: "css", logo: css },
  { title: "html", logo: html },
  { title: "node", logo: node },
  { title: "php", logo: php },
  { title: "python", logo: python },
  { title: "react", logo: react },
  { title: "ruby", logo: ruby },
  { title: "mongo", logo: mongo },
  { title: "mysql", logo: mysql },
  { title: "postgress", logo: postgress },
  { title: "mssql", logo: mssql },
];

export default function SkillList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-36 gap-y-20">
      {skills.map(({ logo, title }, idx) => (
        <img key={idx} src={logo} alt={`${title} logo`} />
      ))}
    </div>
  );
}

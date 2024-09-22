import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import 'font-awesome/css/font-awesome.min.css';

export default function InvestigationCard(text, image) {
  return (
    <a href="/research">
    <Card className="w-10/12 mx-auto h-42 lg:m-10">
      <CardHeader className="flex gap-3">
      <div>
        <i className="fa fa-paperclip w-12"></i>
      </div>
        <div className="flex flex-col">
          <p className="text-md">Research Lines</p>
        </div>
      </CardHeader>
      <Divider/>
        <CardBody>
          <p className="text-2xl font-extralight text-center">{text.text}</p>
        </CardBody>
      <Divider/>
      {/*
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
      */}
    </Card>
    </a>
  );
}

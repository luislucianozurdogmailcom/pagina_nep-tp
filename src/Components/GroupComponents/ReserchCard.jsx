import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import 'font-awesome/css/font-awesome.min.css';

export default function ReserchCard(person) {

  return (
    <Card className="py-4 border-none bg-background/60 dark:bg-default-100/50" isBlurred>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-extralight text-3xl">{person.person.name}</h4>
        <Accordion>
          <AccordionItem className="font-light mt-4 text-justify" key="1" aria-label="Accordion" title="BIO">
            {person.person.ocupation}
          </AccordionItem>
          <AccordionItem className="font-light mt-4 text-justify" key="2" aria-label="Accordion" title="Contact">
            {person.person.contact}
            <br></br>
            {person.person.email}
          </AccordionItem>
        </Accordion>
      </CardHeader>
    <CardBody className="overflow-visible py-2 items-center">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={person.person.image}
        width={250}
      />
    </CardBody>
  </Card>
  );
}

import React from "react";
import MonthSelector from "../../src/app/ui/card/components/monthSelector";
import "../../src/app/tailwind-generated.css";

describe("<MonthSelector />", () => {
    it("renders", () => {
        cy.clock();

        const onChangeSpy = cy.spy().as("onChangeSpy");

        cy.mount(<MonthSelector onChangeMonth={onChangeSpy} />);
        cy.get("h3").should("have.text", "February");
        cy.get("small").should("have.text", "1970");
        cy.get("button").eq(0).click();

        cy.get("h3").should("have.text", "February");
        cy.get("small").should("have.text", "1970");
        cy.get("button").eq(1).click();
        cy.get("button").eq(1).click();

        cy.get("h3").should("have.text", "April");
        cy.get("small").should("have.text", "1970");
        cy.get("button").eq(0).click();
        cy.get("button").eq(0).click();
        cy.get("button").eq(0).click();
        cy.get("button").eq(0).click();

        cy.get("h3").should("have.text", "February");
        cy.get("small").should("have.text", "1970");
    });
});

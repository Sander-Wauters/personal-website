import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const InvoicingSoftwareDelaware = () => {
  return (
    <>
      <h3>Invoicing software (Delaware)</h3>
      <p>
        This was a group school project in my second year of college. For this
        class a company was invited to campus to give the assignment. In this
        year the company was Delaware. They tasked us to create a web and
        desktop application for cataloging products and creating invoices. Not
        to be used in production mind you, just as a college assignment.
      </p>
      <p>
        The web application part of this project did not turn out that well in
        my opinion. On the other hand the desktop application was textbook
        programming.
      </p>
      <p>
        <strong>Source code</strong>:{" "}
      </p>
      <ul>
        <li>
          web application:{" "}
          <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-sdp2-frontend-a02">
            https://github.com/Sander-Wauters/hogent-2324-sdp2-frontend-a02
          </ExternalLink>
        </li>
        <li>
          desktop application:{" "}
          <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-sdp2-java-a02">
            https://github.com/Sander-Wauters/hogent-2324-sdp2-java-a02
          </ExternalLink>
        </li>
        <li>
          back-end:{" "}
          <ExternalLink href="https://github.com/Sander-Wauters/hogent-2324-sdp2-backend-a02">
            https://github.com/Sander-Wauters/hogent-2324-sdp2-backend-a02
          </ExternalLink>
        </li>
      </ul>
      <TechStack
        technologies={[
          "JavaScript",
          "React",
          "Node.js",
          "Prisma",
          "MySQL",
          "Java",
          "JavaFX",
          "Spring Boot",
        ]}
      />
    </>
  );
};

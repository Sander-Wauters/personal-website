import { ExternalLink } from "../../../../components/externalLink";
import { TechStack } from "../techStack";

export const InvoicingSoftwareDozer = () => {
  return (
    <>
      <h3>Invoicing software (Dozer)</h3>
      <p>
        This was a group school project in my third year of college. The
        assignment was to make a web & mobile application for the fictional
        company "Dozer". The mobile application had to be mobile first and
        function offline. For authentication we had to implement OAuth 2.0 using
        auth0.
      </p>
      <p>
        The entire application did not turn out that good in my opinion,
        especially the mobile part. We got everything working but had to drop
        some features.
      </p>
      <p>
        <strong>Source code</strong>:{" "}
        <ul>
          <li>
            web application & back-end:{" "}
            <ExternalLink href="https://github.com/Sander-Wauters/hogent-2425-rise-dotnet-aalst3">
              https://github.com/Sander-Wauters/hogent-2425-rise-dotnet-aalst3
            </ExternalLink>
          </li>
          <li>
            mobile application:{" "}
            <ExternalLink href="https://github.com/Sander-Wauters/hogent-2425-rise-android-aalst3">
              https://github.com/Sander-Wauters/hogent-2425-rise-android-aalst3
            </ExternalLink>
          </li>
        </ul>
      </p>
      <TechStack
        technologies={[
          "C#",
          ".NET",
          "Kotlin",
          "Jetpack Compose",
          "MSSQL",
          "SQLite",
        ]}
      />
    </>
  );
};

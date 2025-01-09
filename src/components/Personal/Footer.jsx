import { Container, Form } from "react-bootstrap";

import mumoftwo from "../../assets/images/mumoftwo.png";

function AllData() {
  return (
    <Container className="widthcontainer pt-5 pb-2 px-5">
      <div>
        <p className="mb-0 py-3">Give us your feedback</p>
        <p className="mb-0 py-2">
          Your email address will not be published. Required fields are marked
          with a *.
        </p>
      </div>
      {/* Contact part */}
      <div className="pb-4">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              className="textarea"
              rows={8}
              placeholder="Comment..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="name" className="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" className="name" />
          </Form.Group>
        </Form>
      </div>
      {/* centerpart satretd */}
      <hr className="horizentalyy" />
      <div className="py-4">
        <div className="text-center">
          <img src={mumoftwo} alt="No Display" />
        </div>
        <div className="text-center pt-4">
          Mum of 2, 2023. All rights Reserved
        </div>
        <div className="text-center text-primary pt-3">
          <span className="mb-0">Privacy Policy </span>
          <span className="mb-0 px-3">|</span>
          <span className="mb-0">Terms and Conditions </span>
        </div>
      </div>
      <hr className="horizentalyy" />

      {/* footer part */}
      <div className="py-4">
        <div className="parentdiv">
          <div>
            <p className="lastsetting text-center mb-0 pb-3">
              HAFTUNGSAUSSCHLUSS:
            </p>
          </div>
          <div className="text-center pb-3">
            <span className="lastsetting text-center mb-0">
              Empfohlene Dosierung:
            </span>
            <span> 2 Fruchtgummis pro Tag.</span>
          </div>
          <p className="mb-0 text-center">
            <span className="lastsetting"> Zutaten:</span> GGlukosesirup,
            Zucker, Wasser, Vormischung (Ingwerextrakt, Apfelessigmutter),
            Pektin, Zitronensäure E-330, Natriumcitrat E-331, Anthocyanidine
            E-163C, Natriumkupferchlorophyll E-141, Kokosöl, Carnaubawachs
            E-903, Apfelaroma
          </p>
          <p>
            <span className="lastsetting">HAFTUNGSAUSSCHLUSS/ DISCLAIMER:</span>
            Das Gesundheitsportal &quot; Gesundheit zu Hause &quot; bietet
            umfassende, hochwertige und verständlich verfasste Informationen zu
            Gesundheitsthemen, Krankheiten, Ernährung und Fitness. Unsere
            Redaktion wird bei der kontinuierlichen Erstellung und
            Qualitätssicherung unserer Inhalte von Ärzten und freiberuflichen
            medizinischen Autoren unterstützt. Unsere Informationen sollten in
            keiner Weise als Ersatz für einen Arztbesuch angesehen werden.
            Vielmehr ist es unser Ziel, die Beziehung zwischen Arzt und Patient
            durch die bereitgestellten Informationen qualitativ zu verbessern
            und zu unterstützen. Daher sind unsere Inhalte nicht dafür bestimmt,
            für willkürliche Diagnosen oder Behandlungen verwendet zu werden.
            Der Eigentümer hat eine finanzielle Verbindung zu den auf der
            Website beworbenen Produkten und Dienstleistungen.
          </p>
          <div className="lastsetting pb-2"> Studien:</div>
          <p className="mb-0 py-2">
            <span className="lastsetting">[1]:</span> Insulinresistenz und
            Entzündung prognostizieren kinetische Körpergewichtsveränderungen in
            Reaktion auf diätetischen Gewichtsverlust und Erhaltung bei
            übergewichtigen und adipösen Probanden unter Verwendung eines
            Bayesianischen Netzwerkansatzes:
            https://pubmed.ncbi.nlm.nih.gov/24172304/
          </p>
          <p className="mb-0 py-2">
            <span className="lastsetting"> [2]: </span>Eine ketogene Diät
            verändert Glutamat, Gamma-Aminobuttersäure und Agmatinspiegel im
            Hippocampus von Ratten: Eine Mikrodialyse-Studie:
            https://pubmed.ncbi.nlm.nih.gov/28189745/
          </p>
          <p className="mb-0 py-2">
            <span className="lastsetting">[3]:</span> Verstehen der Faktoren,
            die die maximale Fettoxidation beeinflussen:
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5766985/
          </p>
          <p>
            Alle Erfolge beim Abnehmen wurden auch durch eine kalorienreduzierte
            Diät und ein geeignetes Übungsprogramm erzielt.
          </p>
          <div className="lastsetting pb-2"> WERBUNG:</div> Diese Website und
          die auf der Website erwähnten Produkte & Dienstleistungen sind
          Werbeanzeigen. Diese Website ist eine Werbung und keine
          Nachrichtenpublikation. Alle Personen, die in den Fotografien auf
          dieser Website erscheinen, sind Modelle. Der Besitzer dieser Website
          und der auf dieser Website erwähnten Produkte und Dienstleistungen
          bietet lediglich einen Dienst an, bei dem Verbraucher vergleichen und
          etwas beziehen können.
        </div>
      </div>
    </Container>
  );
}

export default AllData;

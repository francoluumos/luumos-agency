import { COMPANY } from './company'
import type { Lang } from '../i18n'

export type LegalSection = { h: string; p: string[] }
export type LegalDoc = {
  slug: 'impressum' | 'agb' | 'datenschutz'
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}
export type LegalSet = Record<LegalDoc['slug'], LegalDoc>

const addr = `${COMPANY.street}, ${COMPANY.zip} ${COMPANY.city}`

/* =====================================================================
   DRAFT — reviewed by Franco's legal expert before launch.
   AGB adapted from the braintec GTC (Swiss Code of Obligations basis),
   generalised to AI & automation / custom software services.
   ===================================================================== */

const de: LegalSet = {
  impressum: {
    slug: 'impressum',
    title: 'Impressum',
    updated: '10. Juni 2026',
    intro: 'Angaben gemäss Art. 3 Abs. 1 lit. s UWG.',
    sections: [
      {
        h: 'Kontaktadresse',
        p: [COMPANY.name, COMPANY.owner, COMPANY.street, `${COMPANY.zip} ${COMPANY.city}`, COMPANY.countryDe],
      },
      {
        h: 'Kontakt',
        p: [`Telefon: ${COMPANY.phone}`, `E-Mail: ${COMPANY.email}`],
      },
      {
        h: 'Unternehmens-Identifikation',
        p: [`UID: ${COMPANY.uid}`],
      },
      {
        h: 'Haftungsausschluss',
        p: [
          'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen auf dieser Website.',
          'Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.',
        ],
      },
      {
        h: 'Haftung für Links',
        p: [
          'Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Websites abgelehnt. Der Zugriff und die Nutzung solcher Websites erfolgen auf eigene Gefahr des Nutzers.',
        ],
      },
      {
        h: 'Urheberrechte',
        p: [
          'Die Urheber- und alle anderen Rechte an Inhalten, Bildern und Dateien auf dieser Website gehören ausschliesslich Luumos oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.',
        ],
      },
    ],
  },

  agb: {
    slug: 'agb',
    title: 'Allgemeine Geschäftsbedingungen (AGB)',
    updated: '10. Juni 2026',
    intro: `Diese AGB regeln das Vertragsverhältnis zwischen ${COMPANY.name} (${COMPANY.owner}, ${addr}) – nachfolgend «Luumos» – und ihren Kundinnen und Kunden.`,
    sections: [
      {
        h: '1. Geltungsbereich',
        p: [
          '1.1 Diese AGB gelten für sämtliche Leistungen von Luumos in den Bereichen KI, Automatisierung, Software-Entwicklung, Integration und Beratung.',
          '1.2 Die für das einzelne Geschäft massgebenden kommerziellen Bedingungen (Leistungen, Preise usw.) werden im jeweiligen schriftlichen Angebot geregelt.',
          '1.3 Luumos erbringt ihre Leistungen ausschliesslich auf Grundlage dieser AGB. Abweichende oder entgegenstehende Bedingungen der Kundschaft bedürfen zu ihrer Gültigkeit der ausdrücklichen schriftlichen Zustimmung von Luumos.',
        ],
      },
      {
        h: '2. Vertragsabschluss',
        p: ['2.1 Verträge zwischen Luumos und der Kundschaft kommen durch das von der Kundschaft angenommene bzw. unterzeichnete schriftliche Angebot zustande.'],
      },
      {
        h: '3. Vertragsdauer',
        p: ['3.1 Der Vertrag tritt mit der Annahme des Angebots in Kraft, sofern im Angebot nichts anderes vorgesehen ist.'],
      },
      {
        h: '4. Leistungserbringung',
        p: [
          '4.1 Luumos erbringt Dienstleistungen im Bereich der Informationstechnologie sowie KI und Automatisierung. Personendaten werden ausschliesslich gemäss den Instruktionen der Kundschaft bearbeitet.',
          '4.2 Sämtliche Leistungen von Luumos sind auftragsrechtlicher Natur (Art. 394 ff. OR). Die Kundschaft ist für die erfolgreiche Umsetzung des Projekts verantwortlich. Werkvertragliche Bestimmungen zu Gewährleistung und Erfolgshaftung sind, soweit gesetzlich zulässig, ausgeschlossen.',
          '4.3 Luumos kann die geschuldeten Leistungen selbst erbringen oder ganz bzw. teilweise durch Dritte erbringen lassen und stellt dabei ein angemessenes Schutzniveau sicher.',
        ],
      },
      {
        h: '5. Termine',
        p: ['5.1 Angegebene Termine gelten als Richtwerte und sind keine Verfall- oder Fixtermine im Sinne von Art. 102 Abs. 2 und Art. 108 OR.'],
      },
      {
        h: '6. Abrechnung nach Aufwand; Preise',
        p: [
          '6.1 Die Leistungen von Luumos werden grundsätzlich nach effektivem Aufwand (Zeit und Material) abgerechnet.',
          '6.2 Alle Preise verstehen sich exklusive Mehrwertsteuer und allfälliger weiterer Abgaben.',
          '6.3 Aufwandschätzungen sind unverbindlich und stellen weder einen Fixpreis noch eine verbindliche Kostenobergrenze dar.',
          '6.4 Wird ein Projekt vorzeitig beendet, wird die bereits erbrachte Arbeit nach Aufwand vergütet.',
        ],
      },
      {
        h: '7. Zahlungsbedingungen',
        p: ['7.1 Rechnungen von Luumos sind innert 30 Tagen zahlbar. Nach Ablauf dieser Frist befindet sich die Kundschaft ohne weitere Mahnung in Verzug.'],
      },
      {
        h: '8. Reisezeit und Reisekosten',
        p: ['8.1 Reisezeit gilt als Arbeitszeit und wird nach Aufwand abgerechnet; effektive Reisekosten werden zusätzlich verrechnet.'],
      },
      {
        h: '9. Zahlungsverzug',
        p: ['9.1 Befindet sich die Kundschaft mit einer Zahlung in Verzug, kann Luumos die Leistungserbringung einstellen und ohne Nachfrist vom Vertrag zurücktreten.'],
      },
      {
        h: '10. Mitwirkungspflichten',
        p: ['10.1 Die Kundschaft schafft in ihrem Verantwortungsbereich alle Voraussetzungen, damit Luumos die geschuldeten Leistungen erbringen kann (Zugänge, Informationen, Ansprechpersonen usw.).'],
      },
      {
        h: '11. Rechte am Arbeitsergebnis',
        p: ['11.1 Sämtliche Rechte an den von Luumos geschaffenen Arbeitsergebnissen verbleiben bei Luumos. Die Kundschaft erhält nach vollständiger Bezahlung ein nicht ausschliessliches, nicht übertragbares und zeitlich unbeschränktes Nutzungsrecht.'],
      },
      {
        h: '12. Haftung und Gewährleistung',
        p: [
          '12.1 Luumos erbringt ihre Leistungen mit der gebotenen Sorgfalt nach den anerkannten Regeln der Technik. Soweit in diesen AGB nichts anderes vorgesehen ist, wird jede Gewährleistung ausgeschlossen, ausser bei absichtlich oder grobfahrlässig verursachten Mängeln.',
          '12.2 Luumos haftet – unabhängig vom Rechtsgrund – nur für absichtlich oder grobfahrlässig verursachte sowie für Personenschäden. Die Haftung ist auf den direkten Schaden und auf maximal den Betrag der betreffenden Leistung beschränkt.',
          '12.3 Jede Haftung für indirekte Schäden und Folgeschäden (insb. entgangener Gewinn, Datenverlust, Ansprüche Dritter) ist im gesetzlich zulässigen Umfang ausgeschlossen. Die Kundschaft trägt insbesondere die Verantwortung für angemessene Datensicherungen.',
        ],
      },
      {
        h: '13. Verrechnungsausschluss',
        p: ['13.1 Die Kundschaft kann Forderungen von Luumos nur mit von Luumos schriftlich anerkannten oder rechtskräftig festgestellten Gegenforderungen verrechnen.'],
      },
      {
        h: '14. Software und Dienste von Drittanbietern',
        p: [
          '14.1 Für Software, Plattformen und Dienste von Drittanbietern (z.B. Cloud-, KI- und Hosting-Anbieter) gelten ausschliesslich deren Lizenz- und Nutzungsbedingungen. Die korrekte Lizenzierung liegt in der Verantwortung der Kundschaft.',
          '14.2 Luumos übernimmt keine Gewährleistung oder Haftung für Drittanbieter-Software und -Dienste.',
        ],
      },
      {
        h: '15. Eigenentwicklungen von Luumos',
        p: [
          '15.1 An von Luumos entwickelten Komponenten räumt Luumos der Kundschaft nach vollständiger Bezahlung ein nicht ausschliessliches, nicht übertragbares Nutzungsrecht ein. Alle übrigen Rechte verbleiben bei Luumos.',
          '15.2 Die Kundschaft anerkennt die Immaterialgüterrechte von Luumos und macht die Ergebnisse Dritten nicht ohne Zustimmung zugänglich.',
        ],
      },
      {
        h: '16. Hosting und Wartung',
        p: [
          '16.1 Hosting- und Wartungsleistungen werden für jeweils 12 Monate vereinbart und verlängern sich automatisch um ein weiteres Jahr, sofern sie nicht mit einer Frist von drei Monaten auf das Ende der laufenden Periode schriftlich gekündigt werden.',
          '16.2 Luumos gewährleistet keinen unterbruchsfreien Betrieb und keine Integrität über das Internet übermittelter Daten. Eine Haftung für Betriebsunterbrüche zwecks Wartung oder Störungsbehebung ist ausgeschlossen.',
          '16.3 Die Kundschaft trägt die Verantwortung für angemessene Sicherheitsvorkehrungen sowie für den sorgfältigen Umgang mit Zugangsdaten.',
        ],
      },
      {
        h: '17. Vertraulichkeit & Referenzen',
        p: [
          '17.1 Luumos und die Kundschaft verpflichten sich gegenseitig zur Vertraulichkeit über Geschäftsgeheimnisse. Diese Pflicht besteht über das Vertragsende hinaus.',
          '17.2 Luumos ist berechtigt, die Tatsache der Zusammenarbeit als Referenz zu nennen, sofern die Kundschaft dem nicht ausdrücklich widerspricht.',
        ],
      },
      {
        h: '18. Abwerbeverbot',
        p: ['18.1 Die Parteien werben während der Vertragsdauer und während zwei Jahren danach keine Mitarbeitenden oder Auftragnehmer der jeweils anderen Partei ab.'],
      },
      {
        h: '19. Datenschutz',
        p: [
          '19.1 Luumos bearbeitet Personendaten ausschliesslich zu den vertraglich vereinbarten Zwecken und im Einklang mit dem anwendbaren Datenschutzrecht, insbesondere dem schweizerischen DSG und der EU-DSGVO. Einzelheiten regelt die Datenschutzerklärung.',
          '19.2 Beide Parteien sind eigenständig zur Einhaltung des anwendbaren Datenschutzrechts verpflichtet.',
        ],
      },
      {
        h: '20. Vertragsübertragung',
        p: ['20.1 Luumos kann Verträge mit allen Rechten und Pflichten ohne Zustimmung der Kundschaft auf ein anderes Unternehmen übertragen.'],
      },
      {
        h: '21. Schlussbestimmungen; Rechtswahl und Gerichtsstand',
        p: [
          '21.1 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen gültig. Die unwirksame Bestimmung wird durch eine wirtschaftlich gleichwertige ersetzt.',
          '21.2 Es gilt ausschliesslich schweizerisches Recht unter Ausschluss der Kollisionsnormen und des Wiener Kaufrechts (CISG).',
          `21.3 Ausschliesslicher Gerichtsstand ist der Sitz von Luumos in ${COMPANY.jurisdiction} (Schweiz).`,
        ],
      },
    ],
  },

  datenschutz: {
    slug: 'datenschutz',
    title: 'Datenschutzerklärung',
    updated: '10. Juni 2026',
    intro: 'Diese Datenschutzerklärung informiert über die Bearbeitung von Personendaten auf dieser Website. Sie richtet sich nach dem schweizerischen Datenschutzgesetz (revDSG) und – soweit anwendbar – der EU-Datenschutz-Grundverordnung (DSGVO).',
    sections: [
      {
        h: '1. Verantwortliche Stelle',
        p: [`${COMPANY.name}, ${COMPANY.owner}`, addr, COMPANY.countryDe, `E-Mail: ${COMPANY.email}`],
      },
      {
        h: '2. Bearbeitete Daten',
        p: [
          'Server-Logfiles: Beim Besuch der Website werden automatisch Daten wie IP-Adresse, Datum/Uhrzeit, abgerufene Seite, Browser und Betriebssystem verarbeitet.',
          'Kontaktdaten: Wenn Sie uns kontaktieren oder eine Beratung buchen, verarbeiten wir die von Ihnen angegebenen Daten (z.B. Name, E-Mail, Nachricht).',
          'Nutzungsdaten: Über Analyse-Werkzeuge erfassen wir – nach Ihrer Einwilligung – Informationen zur Nutzung der Website.',
        ],
      },
      {
        h: '3. Zwecke und Rechtsgrundlagen',
        p: [
          'Wir bearbeiten Daten zur Bereitstellung und Sicherheit der Website, zur Bearbeitung von Anfragen sowie zur Verbesserung unseres Angebots.',
          'Rechtsgrundlagen sind unser berechtigtes Interesse am sicheren, effizienten Betrieb der Website, die Vertragsanbahnung sowie – für nicht notwendige Cookies und Analyse – Ihre Einwilligung.',
        ],
      },
      {
        h: '4. Cookies und Einwilligung',
        p: [
          'Notwendige Cookies ermöglichen den Grundbetrieb der Website und werden ohne Einwilligung gesetzt.',
          'Nicht notwendige Cookies sowie Analyse-Dienste (siehe unten) werden erst nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner geladen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
        ],
      },
      {
        h: '5. Webanalyse – PostHog',
        p: [
          'Wir nutzen PostHog zur Produkt- und Reichweitenanalyse, um die Nutzung der Website zu verstehen und zu verbessern. Dabei können Nutzungsereignisse, Geräte- und Browserangaben sowie eine gekürzte/pseudonymisierte IP verarbeitet werden.',
          'Wir setzen PostHog mit EU-Hosting ein. Die Verarbeitung erfolgt nur nach Ihrer Einwilligung.',
        ],
      },
      {
        h: '6. Webanalyse – Google Analytics',
        p: [
          'Wir nutzen Google Analytics (Google Ireland Ltd.) zur statistischen Auswertung der Websitenutzung. Dabei können Daten an die Google LLC in den USA übermittelt werden.',
          'Der Einsatz erfolgt nur nach Ihrer Einwilligung. Sie können die Erfassung durch Google zusätzlich über das Browser-Add-on von Google verhindern.',
        ],
      },
      {
        h: '7. Hosting',
        p: [
          'Diese Website wird bei Vercel Inc. (USA) gehostet. Dabei werden technisch notwendige Daten (insb. Server-Logs) verarbeitet. Mit dem Anbieter besteht eine Auftragsverarbeitungsvereinbarung; Übermittlungen in die USA werden auf Standardvertragsklauseln abgestützt.',
        ],
      },
      {
        h: '8. Bekanntgabe an Dritte / Auftragsbearbeiter',
        p: [
          'Eine Bekanntgabe von Personendaten an Dritte erfolgt nur, soweit dies für die genannten Zwecke erforderlich ist oder wir gesetzlich dazu verpflichtet sind. Eingesetzte Dienstleister (z.B. Hosting, Analyse) bearbeiten Daten als Auftragsbearbeiter nach unseren Weisungen.',
        ],
      },
      {
        h: '9. Datenübermittlung ins Ausland',
        p: [
          'Werden Daten in Länder ohne angemessenes Datenschutzniveau (z.B. USA) übermittelt, stützen wir dies auf geeignete Garantien wie die Standardvertragsklauseln der EU-Kommission bzw. anerkannte Mechanismen nach revDSG.',
        ],
      },
      {
        h: '10. Aufbewahrung',
        p: ['Wir bewahren Personendaten nur so lange auf, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es verlangen.'],
      },
      {
        h: '11. Ihre Rechte',
        p: [
          'Sie haben im Rahmen des anwendbaren Rechts das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch sowie auf Datenübertragbarkeit und Widerruf erteilter Einwilligungen.',
          `Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter ${COMPANY.email}.`,
          'Sie haben zudem das Recht, sich bei einer Aufsichtsbehörde zu beschweren – in der Schweiz beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB), in der EU bei der zuständigen Datenschutzbehörde.',
        ],
      },
      {
        h: '12. Änderungen',
        p: ['Wir können diese Datenschutzerklärung jederzeit anpassen. Massgebend ist die jeweils auf dieser Website veröffentlichte Fassung.'],
      },
    ],
  },
}

const en: LegalSet = {
  impressum: {
    slug: 'impressum',
    title: 'Legal Notice',
    updated: 'June 10, 2026',
    intro: 'Company information pursuant to Swiss law.',
    sections: [
      {
        h: 'Contact address',
        p: [COMPANY.name, COMPANY.owner, COMPANY.street, `${COMPANY.zip} ${COMPANY.city}`, COMPANY.country],
      },
      {
        h: 'Contact',
        p: [`Phone: ${COMPANY.phone}`, `Email: ${COMPANY.email}`],
      },
      {
        h: 'Company identification',
        p: [`Swiss business identification number (UID): ${COMPANY.uid}`],
      },
      {
        h: 'Disclaimer',
        p: [
          'The author assumes no liability for the correctness, accuracy, timeliness, reliability or completeness of the information on this website.',
          'Liability claims against the author for material or immaterial damage arising from access to, use or non-use of the published information, from misuse of the connection or from technical faults are excluded.',
        ],
      },
      {
        h: 'Liability for links',
        p: [
          'References and links to third-party websites are outside our area of responsibility. We decline any responsibility for such websites. Access to and use of such websites is at the user’s own risk.',
        ],
      },
      {
        h: 'Copyright',
        p: [
          'The copyright and all other rights to content, images and files on this website belong exclusively to Luumos or the specifically named rights holders. Written consent of the copyright holders must be obtained in advance for any reproduction.',
        ],
      },
    ],
  },

  agb: {
    slug: 'agb',
    title: 'General Terms & Conditions (GTC)',
    updated: 'June 10, 2026',
    intro: `These GTC govern the relationship between ${COMPANY.name} (${COMPANY.owner}, ${addr}) — “Luumos” — and its customers.`,
    sections: [
      {
        h: '1. Scope',
        p: [
          '1.1 These GTC apply to all services provided by Luumos in the areas of AI, automation, software development, integration and consulting.',
          '1.2 The commercial conditions applicable to an individual transaction (services, prices, etc.) are set out in the respective written offer.',
          '1.3 Luumos provides its services exclusively on the basis of these GTC. Conflicting customer terms require the express written consent of Luumos to be valid.',
        ],
      },
      { h: '2. Conclusion of contract', p: ['2.1 Contracts are concluded by the customer accepting or signing the respective written offer.'] },
      { h: '3. Contract term', p: ['3.1 The contract comes into force upon acceptance of the offer unless the offer provides otherwise.'] },
      {
        h: '4. Service provision',
        p: [
          '4.1 Luumos provides IT, AI and automation services. Personal data is processed only in accordance with the customer’s instructions.',
          '4.2 All services are of a contractual (mandate) nature (Art. 394 et seq. Swiss Code of Obligations). The customer is responsible for the successful implementation of the project. Work-contract warranty and liability-for-success provisions are excluded to the extent permitted by law.',
          '4.3 Luumos may provide the services itself or have them provided in whole or in part by third parties, ensuring an appropriate level of protection.',
        ],
      },
      { h: '5. Deadlines', p: ['5.1 Stated dates are guidelines only and are not due or fixed dates within the meaning of Art. 102(2) and 108 CO.'] },
      {
        h: '6. Billing by time and material; prices',
        p: [
          '6.1 Services are generally billed according to actual time and material.',
          '6.2 All prices are exclusive of VAT and any other taxes.',
          '6.3 Effort estimates are non-binding and constitute neither a fixed price nor a binding cost ceiling.',
          '6.4 If a project ends prematurely, work already performed is remunerated according to effort.',
        ],
      },
      { h: '7. Payment terms', p: ['7.1 Invoices are payable within 30 days. After this period the customer is in default without further notice.'] },
      { h: '8. Travel time and expenses', p: ['8.1 Travel time counts as working time and is billed by effort; actual travel expenses are charged in addition.'] },
      { h: '9. Default in payment', p: ['9.1 If the customer is in default, Luumos may suspend services and withdraw from the contract without notice.'] },
      { h: '10. Duty to cooperate', p: ['10.1 The customer creates all conditions within its area of responsibility (access, information, contacts) so that Luumos can provide the services owed.'] },
      { h: '11. Rights to the work result', p: ['11.1 All rights to the work results created by Luumos remain with Luumos. Upon full payment, the customer receives a non-exclusive, non-transferable, unlimited right of use.'] },
      {
        h: '12. Liability and warranty',
        p: [
          '12.1 Luumos provides its services with due care according to recognised technical standards. Unless otherwise stated herein, any warranty is excluded except for defects caused intentionally or through gross negligence.',
          '12.2 Luumos is liable — regardless of legal basis — only for intent, gross negligence and personal injury. Liability is limited to direct damage and to a maximum of the amount of the service concerned.',
          '12.3 Any liability for indirect or consequential damage (in particular lost profit, data loss, third-party claims) is excluded to the extent permitted by law. The customer is responsible in particular for adequate data backups.',
        ],
      },
      { h: '13. Set-off', p: ['13.1 The customer may only set off claims that Luumos has acknowledged in writing or that have been legally established.'] },
      {
        h: '14. Third-party software and services',
        p: [
          '14.1 For third-party software, platforms and services (e.g. cloud, AI and hosting providers), only their license and usage terms apply. Correct licensing is the customer’s responsibility.',
          '14.2 Luumos assumes no warranty or liability for third-party software and services.',
        ],
      },
      {
        h: '15. Luumos developments',
        p: [
          '15.1 For components developed by Luumos, Luumos grants the customer a non-exclusive, non-transferable right of use upon full payment. All other rights remain with Luumos.',
          '15.2 The customer acknowledges Luumos’s intellectual property rights and does not make the results accessible to third parties without consent.',
        ],
      },
      {
        h: '16. Hosting and maintenance',
        p: [
          '16.1 Hosting and maintenance are agreed for 12 months at a time and renew automatically for a further year unless terminated in writing with three months’ notice to the end of the current period.',
          '16.2 Luumos does not guarantee uninterrupted operation or the integrity of data transmitted over the Internet. Liability for interruptions for maintenance or fault resolution is excluded.',
          '16.3 The customer is responsible for adequate security measures and the careful handling of access credentials.',
        ],
      },
      {
        h: '17. Confidentiality & references',
        p: [
          '17.1 Luumos and the customer mutually undertake to keep business secrets confidential, beyond the end of the contract.',
          '17.2 Luumos may name the fact of the collaboration as a reference unless the customer expressly objects.',
        ],
      },
      { h: '18. Non-solicitation', p: ['18.1 The parties will not solicit each other’s employees or contractors during the contract and for two years thereafter.'] },
      {
        h: '19. Data protection',
        p: [
          '19.1 Luumos processes personal data only for the agreed purposes and in accordance with applicable data protection law, in particular the Swiss FADP and the EU GDPR. Details are set out in the Privacy Policy.',
          '19.2 Each party is independently obliged to comply with applicable data protection law.',
        ],
      },
      { h: '20. Transfer of contract', p: ['20.1 Luumos may transfer contracts with all rights and obligations to another company without the customer’s consent.'] },
      {
        h: '21. Final provisions; governing law and jurisdiction',
        p: [
          '21.1 Should individual provisions be invalid, the remainder of the contract remains valid; the invalid provision is replaced by an economically equivalent one.',
          '21.2 Swiss law applies exclusively, excluding its conflict-of-laws rules and the UN Convention on Contracts for the International Sale of Goods (CISG).',
          `21.3 The exclusive place of jurisdiction is the registered office of Luumos in ${COMPANY.jurisdiction} (Switzerland).`,
          'This is a convenience translation. In case of differences of interpretation, the German version prevails.',
        ],
      },
    ],
  },

  datenschutz: {
    slug: 'datenschutz',
    title: 'Privacy Policy',
    updated: 'June 10, 2026',
    intro: 'This Privacy Policy explains how personal data is processed on this website. It follows the Swiss Data Protection Act (revFADP) and, where applicable, the EU General Data Protection Regulation (GDPR).',
    sections: [
      { h: '1. Controller', p: [`${COMPANY.name}, ${COMPANY.owner}`, addr, COMPANY.country, `Email: ${COMPANY.email}`] },
      {
        h: '2. Data we process',
        p: [
          'Server log files: when you visit the site, data such as IP address, date/time, page requested, browser and operating system are processed automatically.',
          'Contact data: when you contact us or book a consult, we process the data you provide (e.g. name, email, message).',
          'Usage data: subject to your consent, analytics tools collect information about how the site is used.',
        ],
      },
      {
        h: '3. Purposes and legal bases',
        p: [
          'We process data to provide and secure the website, to handle enquiries and to improve our offering.',
          'Legal bases are our legitimate interest in the secure, efficient operation of the website, pre-contractual steps, and — for non-essential cookies and analytics — your consent.',
        ],
      },
      {
        h: '4. Cookies and consent',
        p: [
          'Essential cookies enable basic operation of the website and are set without consent.',
          'Non-essential cookies and analytics (see below) are only loaded after your explicit consent via the cookie banner. You can withdraw your consent at any time with future effect.',
        ],
      },
      {
        h: '5. Analytics – PostHog',
        p: [
          'We use PostHog for product and reach analytics to understand and improve site usage. This may process usage events, device/browser information and a truncated/pseudonymised IP.',
          'We use PostHog with EU hosting. Processing only takes place after your consent.',
        ],
      },
      {
        h: '6. Analytics – Google Analytics',
        p: [
          'We use Google Analytics (Google Ireland Ltd.) for statistical analysis of site usage. Data may be transferred to Google LLC in the USA.',
          'It is used only after your consent. You can additionally prevent collection by Google via Google’s browser add-on.',
        ],
      },
      {
        h: '7. Hosting',
        p: [
          'This website is hosted by Vercel Inc. (USA). Technically necessary data (in particular server logs) is processed. A data processing agreement is in place; transfers to the USA are based on Standard Contractual Clauses.',
        ],
      },
      {
        h: '8. Disclosure to third parties / processors',
        p: [
          'Personal data is disclosed to third parties only where necessary for the stated purposes or where we are legally required to do so. Service providers (e.g. hosting, analytics) process data as processors on our instructions.',
        ],
      },
      {
        h: '9. Transfers abroad',
        p: [
          'Where data is transferred to countries without an adequate level of protection (e.g. the USA), we rely on appropriate safeguards such as the EU Commission’s Standard Contractual Clauses or recognised mechanisms under the revFADP.',
        ],
      },
      { h: '10. Retention', p: ['We retain personal data only as long as necessary for the stated purposes or as required by statutory retention periods.'] },
      {
        h: '11. Your rights',
        p: [
          'Subject to applicable law, you have the right to access, rectification, erasure, restriction and objection, as well as data portability and withdrawal of consent.',
          `To exercise your rights, contact us at ${COMPANY.email}.`,
          'You also have the right to lodge a complaint with a supervisory authority — in Switzerland the Federal Data Protection and Information Commissioner (FDPIC), in the EU the competent data protection authority.',
        ],
      },
      { h: '12. Changes', p: ['We may update this Privacy Policy at any time. The version published on this website applies.'] },
    ],
  },
}

export const LEGAL: Record<Lang, LegalSet> = { de, en }

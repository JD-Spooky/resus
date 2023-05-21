import rescuscitationGuideImg from '../img/resus.png';
import allGuidelinesImg from '../img/all_guidelines.png';
import medicalImg from '../img/medical.png';
import traumaImg from '../img/trauma.png';
import picuDrugImg from '../img/picu_drug_sheet.png';
import medusaImg from '../img/medusa.png';
import emergencyContactsImg from '../img/emergency_contacts.png';
import distractionImg from '../img/distraction.png';

const Data = [
    {
        name: 'Guidelines',
        image: allGuidelinesImg,
        categories: [
            {
                name: 'Anaphylaxis',
                content: 'anaphylaxis.md'
            },
            {
                name: 'Antibiotic guidelines',
                content: 'inProgress.md'
            },
            {
                name: 'APLS',
                content: 'apls.md'
            },
            {
                name: 'Asthma',
                content: 'inProgress.md'
            },
            {
                name: 'Bradycardia',
                content: 'inProgress.md'
            },
            {
                name: 'Bronchiolitis',
                content: 'inProgress.md'
            },
            {
                name: 'Burns',
                content: 'inProgress.md'
            },
            {
                name: 'Compartment syndrome',
                content: 'inProgress.md'
            },
            {
                name: 'Croup',
                content: 'inProgress.md'
            },
            {
                name: 'Difficult airway algorithm',
                content: 'difficultAirway.md'
            },

            {
                name: 'DKA',
                content: 'inProgress.md'
            },

            {
                name: 'Emergency contact list',
                content: 'inProgress.md'
            },

            {
                name: 'Extra-corpal CPR (ECPR)',
                content: 'inProgress.md'
            },

            {
                name: 'Fallot\'s spells (Hypercyanotic)',
                content: 'inProgress.md'
            },

            {
                name: 'Fractured femoral shaft',
                content: 'inProgress.md'
            },

            {
                name: 'Head injury',
                content: 'inProgress.md'
            },

            {
                name: 'Major haemorrhage',
                content: 'inProgress.md'
            },

            {
                name: 'Newborn Life Support (NLS)',
                content: 'inProgress.md'
            },

            {
                name: 'Open fracture',
                content: 'inProgress.md'
            },

            {
                name: 'Pain management',
                content: 'inProgress.md'
            },

            {
                name: 'PICU drug sheet',
                content: 'inProgress.md'
            },

            {
                name: 'Resus calculations',
                content: 'inProgress.md'
            },

            {
                name: 'Resuscitative thoracotomy',
                content: 'resuscitativeThoracotomy.md'
            },

            {
                name: 'RSI checklist',
                content: 'rsiChecklist.md'
            },

            {
                name: 'RSI in trauma',
                content: 'inProgress.md'
            },

            {
                name: 'Septic shock',
                content: 'septicShock.md'
            },

            {
                name: 'Status epilepticus',
                content: 'inProgress.md'
            },

            {
                name: 'Tachycardia',
                content: 'inProgress.md'
            },

            {
                name: 'Toxic shock in burns',
                content: 'inProgress.md'
            },

            {
                name: 'TOXBASE',
                content: 'inProgress.md'
            },

            {
                name: 'WHO procedure checklist',
                content: 'inProgress.md'
            }


        ]
    },
    {
        name: 'Rescuscitation guidelines',
        image: rescuscitationGuideImg,
        categories: [
            {
                name: 'Advanced Paediatric Life Support',
                content: 'apls.md'
            },
            {
                name: 'Anaphylaxis',
                content: 'anaphylaxis.md'
            },
            {
                name: 'Difficult airway guidelines',
                content: 'inProgress.md'
            },
            {
                name: 'Extra-corpal CPR (ECPR)',
                content: 'inProgress.md'
            },
            {
                name: 'Neo-natal Life Support (NLS)',
                content: 'inProgress.md'
            },
            {
                name: 'PICU drug sheet',
                content: 'inProgress.md'
            },
            {
                name: 'Resus calculations',
                content: 'inProgress.md'
            },
            {
                name: 'Resuscitative thoracotomy in trauma',
                content: 'resuscitativeThoracotomy.md'
            },
            {
                name: 'RSI checklist',
                content: 'inProgress.md'
            },
            {
                name: 'WHO procedure checklist',
                content: 'inProgress.md'
            }
        ]
    },
    {
        name: 'Medical emergencies',
        image: medicalImg,
        categories: [
            {
                name: 'Anaphylaxis',
                content: 'anaphylaxis.md'
            },
            {
                name: 'Antibiotic guidelines',
                content: 'inProgress.md'
            },
            {
                name: 'Asthma',
                content: 'inProgress.md'
            }
            ,
            {
                name: 'Bradycardia',
                content: 'inProgress.md'
            },
            {
                name: 'Bronchiolitis',
                content: 'inProgress.md'
            },
            {
                name: 'Croup',
                content: 'inProgress.md'
            },
            {
                name: 'DKA',
                content: 'inProgress.md'
            },
            {
                name: 'Hypercyanotic spells (Fallot’s)',
                content: 'inProgress.md'
            },
            {
                name: 'Septic shock',
                content: 'inProgress.md'
            },
            {
                name: 'Status epilepticus',
                content: 'inProgress.md'
            },
            {
                name: 'Tachycardia',
                content: 'inProgress.md'
            },
            {
                name: 'TOXBASE',
                content: 'inProgress.md'
            }

        ]
    },
    {
        name: 'Trauma',
        image: traumaImg,
        categories: [
            {
                name: 'Burns',
                content: 'inProgress.md'
            },
            {
                name: 'Compartment syndrome',
                content: 'inProgress.md'
            },
            {
                name: 'Fractured femoral shaft',
                content: 'inProgress.md'
            },
            {
                name: 'Head injury',
                content: 'inProgress.md'
            },
            {
                name: 'Major haemorrhage protocol',
                content: 'inProgress.md'
            },
            {
                name: 'Open fracture',
                content: 'inProgress.md'
            },
            {
                name: 'Pain management',
                content: 'inProgress.md'
            },
            {
                name: 'Pelvic fractures',
                content: 'inProgress.md'
            },
            {
                name: 'Resuscitative thoracotomy in trauma',
                content: 'resuscitativeThoracotomy.md'
            },
            {
                name: 'RSI in trauma',
                content: 'inProgress.md'
            },
            {
                name: 'RSI checklist',
                content: 'inProgress.md'
            },
            {
                name: 'WHO procedure checklist',
                content: 'inProgress.md'
            }
        ]
    },
    {
        name: 'PICU drug sheet',
        image: picuDrugImg,
        categories: [
            {
                name: 'Cat1',
                content: 'inProgress.md'
            },
            {
                name: 'Cat2',
                content: 'inProgress.md'
            },
            {
                name: 'Cat3',
                content: 'inProgress.md'
            }
        ]
    },
    {
        name: 'Medusa',
        image: medusaImg,
        url: 'https://injmed.wales.nhs.uk/?ID=7cb63917dffc246335eccf68158f57ee977'
    },
    {
        name: 'Emergency contacts',
        image: emergencyContactsImg,
        categories: [
            {
                name: 'Cat1',
                content: 'inProgress.md'
            },
            {
                name: 'Cat2',
                content: 'inProgress.md'
            },
            {
                name: 'Cat3',
                content: 'inProgress.md'
            }
        ]
    },
    {
        name: 'Distraction',
        image: distractionImg,
        url: 'https://www.youtube.com/watch?v=IQLDBRbgENw&ab_channel=PeppaPig-OfficialChannel'
    },
];

export default Data;
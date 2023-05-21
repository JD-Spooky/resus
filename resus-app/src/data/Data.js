import testMD from './content/test.md';
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
                content: testMD
            },
            {
                name: 'Antiobiotic guidelines',
                content: testMD
            },
            {
                name: 'APLS',
                content: testMD
            },
            {
                name: 'Asthma',
                content: testMD
            },
            {
                name: 'Bradycardia',
                content: testMD
            },
            {
                name: 'Broncholitis',
                content: testMD
            },
            {
                name: 'Burns',
                content: testMD
            },
            {
                name: 'Compartment syndrome',
                content: testMD
            },
            {
                name: 'Croup',
                content: testMD
            },
            {
                name: 'Difficult airway algorithm',
                content: testMD
            },

            {
                name: 'DKA',
                content: testMD
            },

            {
                name: 'Emergency contact list',
                content: testMD
            },

            {
                name: 'Extra-corpal CPR (ECPR)',
                content: testMD
            },

            {
                name: 'Fallot\'s spells (Hypercyanotic)',
                content: testMD
            },

            {
                name: 'Fractured femoral shaft',
                content: testMD
            },

            {
                name: 'Head injury',
                content: testMD
            },

            {
                name: 'Major haemorrhage',
                content: testMD
            },

            {
                name: 'Newborn Life Support (NLS)',
                content: testMD
            },

            {
                name: 'Open fracture',
                content: testMD
            },

            {
                name: 'Pain management',
                content: testMD
            },

            {
                name: 'PICU drug sheet',
                content: testMD
            },

            {
                name: 'Resus calculations',
                content: testMD
            },

            {
                name: 'Resuscitative thoracotomy',
                content: testMD
            },

            {
                name: 'RSI checklist',
                content: testMD
            },

            {
                name: 'RSI in trauma',
                content: testMD
            },

            {
                name: 'Septic shock',
                content: testMD
            },

            {
                name: 'Status epilepticus',
                content: testMD
            },

            {
                name: 'Tachycardia',
                content: testMD
            },

            {
                name: 'Toxic shock in burns',
                content: testMD
            },

            {
                name: 'TOXBASE',
                content: testMD
            },

            {
                name: 'WHO procedure checklist',
                content: testMD
            }


        ]
    },
    {
        name: 'Rescuscitation guidelines',
        image: rescuscitationGuideImg,
        categories: [
            {
                name: 'Advanced Paediatric Life Support',
                content: testMD
            },
            {
                name: 'Anaphylaxis',
                content: testMD
            },
            {
                name: 'Difficult airway guidelines',
                content: testMD
            },
            {
                name: 'Extra-corpal CPR (ECPR)',
                content: testMD
            },
            {
                name: 'Neo-natal Life Support (NLS)',
                content: testMD
            },
            {
                name: 'PICU drug sheet',
                content: testMD
            },
            {
                name: 'Resus calculations',
                content: testMD
            },
            {
                name: 'Resuscitative thoracotomy in trauma',
                content: testMD
            },
            {
                name: 'RSI checklist',
                content: testMD
            },
            {
                name: 'WHO procedure checklist',
                content: testMD
            }
        ]
    },
    {
        name: 'Medical emergencies',
        image: medicalImg,
        categories: [
            {
                name: 'Anaphylaxis',
                content: testMD
            },
            {
                name: 'Antiobiotic guidelines',
                content: testMD
            },
            {
                name: 'Asthma',
                content: testMD
            }
            ,
            {
                name: 'Bradycardia',
                content: testMD
            },
            {
                name: 'Broncholitis',
                content: testMD
            },
            {
                name: 'Croup',
                content: testMD
            },
            {
                name: 'DKA',
                content: testMD
            },
            {
                name: 'Hypercyanotic spells (Fallot’s)',
                content: testMD
            },
            {
                name: 'Septic shock',
                content: testMD
            },
            {
                name: 'Status epilepticus',
                content: testMD
            },
            {
                name: 'Tachycardia',
                content: testMD
            },
            {
                name: 'TOXBASE',
                content: testMD
            }

        ]
    },
    {
        name: 'Trauma',
        image: traumaImg,
        categories: [
            {
                name: 'Burns',
                content: testMD
            },
            {
                name: 'Compartment syndrome',
                content: testMD
            },
            {
                name: 'Fractured femoral shaft',
                content: testMD
            },
            {
                name: 'Head injury',
                content: testMD
            },
            {
                name: 'Major haemorrhage protocol',
                content: testMD
            },
            {
                name: 'Open fracture',
                content: testMD
            },
            {
                name: 'Pain management',
                content: testMD
            },
            {
                name: 'Pelvic fractures',
                content: testMD
            },
            {
                name: 'Resuscitative thoracotomy in trauma',
                content: testMD
            },
            {
                name: 'RSI in trauma',
                content: testMD
            },
            {
                name: 'RSI checklist',
                content: testMD
            },
            {
                name: 'WHO procedure checklist',
                content: testMD
            }
        ]
    },
    {
        name: 'PICU drug sheet',
        image: picuDrugImg,
        categories: [
            {
                name: 'Cat1',
                content: testMD
            },
            {
                name: 'Cat2',
                content: testMD
            },
            {
                name: 'Cat3',
                content: testMD
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
                content: testMD
            },
            {
                name: 'Cat2',
                content: testMD
            },
            {
                name: 'Cat3',
                content: testMD
            }
        ]
    },
    {
        name: 'Distraction',
        image: distractionImg,
        url: 'https://www.youtube.com/watch?v=i0sBOAN8t5Y&ab_channel=TheScottishPeppapig'
    },
];

export default Data;
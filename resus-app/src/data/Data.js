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
                name: 'Antiobiotic guidelines',
                content: 'inProgress.md'
            },
            {
                name: 'APLS',
                content: 'apls.md'
            },
            {
                name: 'Asthma',
                content: 'asthma.md'
            },
            {
                name: 'Bradycardia',
                content: 'bradycardia.md'
            },
            {
                name: 'Broncholitis',
                content: 'bronchiolitis'
            },
            {
                name: 'Burns',
                content: 'burns.md'
            },
            {
                name: 'Compartment syndrome',
                content: 'compartmentSyndrome.md'
            },
            {
                name: 'Croup',
                content: 'croup.md'
            },
            {
                name: 'Difficult airway algorithm',
                content: 'inProgress.md'
            },

            {
                name: 'DKA',
                content: 'dka'
            },

            {
                name: 'Emergency contact list',
                content: 'inProgress.md'
            },

            {
                name: 'Extra-corpal CPR (ECPR)',
                content: 'ecpr_in_ed.md'
            },

            {
                name: 'Fallot\'s spells (Hypercyanotic)',
                content: 'hypercyanoticSpells.md'
            },

            {
                name: 'Fractured femoral shaft',
                content: 'femoralFracture.md'
            },

            {
                name: 'Head injury',
                content: 'headInjury.md'
            },

            {
                name: 'Major haemorrhage',
                content: 'majorHaemorrhage.md'
            },

            {
                name: 'Newborn Life Support (NLS)',
                content: 'nls.md'
            },

            {
                name: 'Open fracture',
                content: 'openLongBoneFracture.md'
            },

            {
                name: 'Pain management',
                content: 'pain.md'
            },

            {
                name: 'PICU drug sheet',
                content: 'inProgress.md'
            },

            {
                name: 'Resus calculations',
                content: 'resuscitativeThoracotomy.md'
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
                content: 'statusEpliepticus.md'
            },

            {
                name: 'Tachycardia',
                content: 'tachycardia.md'
            },

            {
                name: 'Toxic shock in burns',
                content: 'TTS_burns.md'
            },

            {
                name: 'TOXBASE',
                content: 'drugDoses.md'
            },

            {
                name: 'WHO procedure checklist',
                content: 'whoProceedureChecklist.md'
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
                content: 'ecpr_in_ed.md'
            },
            {
                name: 'Neo-natal Life Support (NLS)',
                content: 'nls.md'
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
                content: 'rsiChecklist.md'
            },
            {
                name: 'WHO procedure checklist',
                content: 'whoProceedureChecklist.md'
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
                name: 'Antiobiotic guidelines',
                content: 'inProgress.md'
            },
            {
                name: 'Asthma',
                content: 'asthma.md'
            }
            ,
            {
                name: 'Bradycardia',
                content: 'bradycardia.md'
            },
            {
                name: 'Broncholitis',
                content: 'bronchiolitis.md'
            },
            {
                name: 'Croup',
                content: 'croup.md'
            },
            {
                name: 'DKA',
                content: 'inProgress.md'
            },
            {
                name: 'Hypercyanotic spells (Fallot’s)',
                content: 'hypercyanoticSpells.md'
            },
            {
                name: 'Septic shock',
                content: 'septicShock.md'
            },
            {
                name: 'Status epilepticus',
                content: 'statusEpilepticus.md'
            },
            {
                name: 'Tachycardia',
                content: 'tachycardia.md'
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
                content: 'burns.md'
            },
            {
                name: 'Compartment syndrome',
                content: 'compartmentSyndrome.md'
            },
            {
                name: 'Fractured femoral shaft',
                content: 'femoralFracture.md'
            },
            {
                name: 'Head injury',
                content: 'headInjury.md'
            },
            {
                name: 'Major haemorrhage protocol',
                content: 'majorHaemorrhage.md'
            },
            {
                name: 'Open fracture',
                content: 'openLongBoneFracture.md'
            },
            {
                name: 'Pain management',
                content: 'pain.md'
            },
            {
                name: 'Pelvic fractures',
                content: 'pelvicFracture.md'
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
                content: 'rsiChecklist.md'
            },
            {
                name: 'WHO procedure checklist',
                content: 'whoProceedureChecklist.md'
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
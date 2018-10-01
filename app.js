var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function ($scope) {

    $scope.rotation = ["AC", "GP", "MH", "OG", "CAH"];

    //     AC

    //          AC Core Conditions

    $scope.acconditions = [{
            name: 'Falls',
            description: '3% of all >65yo patient IP stays are due to falls; 30% of ≥65yo and 50% of ≥80yo have had a fall in the previous year.',
            hx: 'Where / when / why, injury sustained, Hx of falls -frequency in past 12m, ?gait and balance disorders, sensory impairment, MSK issues, CVS, Rx, incontinence',
            ex: 'Relevant neuro; falls testing: TUG + Romberg\'s + functional reach + sternal push, heel-to-toe; CV',
            ix: 'X-ray if ?#, urine MCS if confused, CTB / MRI if headstrike',
            mx: 'Rehabilitation programme w/ OT input, remediation of RFs'
		},
        {
            name: 'Cardiac failure',
            description: 'The decline of the heart, precipitated and exacerbated by injury.',
            hx: 'SOBOE, angina, swelling',
            ex: 'Vitals, cardiac examination - JVP, lung crackles, peripheral oedema, thready pulse',
            ix: 'FBE + UEC + BNP',
            mx: 'Optimisation of fluid balance (diuretics vs. fluid restriction), cardiac Rx (ACEi + cardioselective β-blocker + CaCB)'
		},
        {
            name: 'Faecal incontinence',
            description: 'Serious psychological sequelae result.',
            hx: 'Investigate cause',
            ex: 'LL neurological exam',
            ix: 'NCS + fecal MCS',
            mx: 'Treat cause'
		},
        {
            name: 'Dementia',
            description: 'From 10% of people ≥65, to 30% of those ≥85.',
            hx: 'From pt: how has your memory been over the past year?',
            ex: 'Gait + balance + CN',
            ix: 'MSU',
            mx: 'DBMAS, carer support, residential services, SW + OT'
		},
        {
            name: 'Elder abuse',
            description: 'Don\'t forget neglect.',
            hx: 'RFs: female, >80yo, depressed; directly enquire re safety',
            ex: 'Marks of abuse',
            ix: 'N/A',
            mx: 'In 90% of cases abuser is a family member - support via friends and other family members'
		},
        {
            name: 'Constipation',
            description: 'A regular comorbidity; coloxyl & senna are ubiquitous on GEM.',
            hx: 'Ax severity - blood, pain, regularity',
            ex: 'DRE',
            ix: 'AXR',
            mx: 'Stool softener & stimulant laxative, rationalisation of Rx'
		},
        {
            name: 'Depression',
            description: 'Consider how it presents differently in older people.',
            hx: 'Somatic Sx - pain, fatigue + mood disturbance - irritability, anxiety',
            ex: 'MSE, cognitive testing',
            ix: 'FBE + Iron studies',
            mx: 'SSRIs, psychotherapy'
		},
        {
            name: 'Pneumonia',
            description: 'Interestingly, the LRT was once thought to be sterile - in fact it plays host to colonies of Prevotella, Veilonella, Strep...',
            hx: 'Cough, sputum, haemoptysis, fever / rigors, smoking Hx',
            ex: 'Vitals, resp exam',
            ix: 'FBE + CXR + BCs + sputum MCS',
            mx: 'Cef + azithro, f/u CXR, pneumococcal vaccine for over 65s'
		},
        {
            name: 'Bowel cancer',
            description: 'The 5th most common cause of death in those aged 45-74.',
            hx: 'Anaemia Sx, blood in stool, malignancy screen',
            ex: 'GI exam, DRE',
            ix: 'CT, PET',
            mx: 'CTx, RTx, surgery, palliative care'
		},
        {
            name: 'Fractured NOF',
            description: 'Some hospitals have ortho-geri units now, indicating the prevalence of such fractures.',
            hx: 'Fall / trauma, pain+++, inability to weight-bear, Hx of osteoporosis',
            ex: 'Acutely painful hip, shortened and externally rotated',
            ix: 'Xray',
            mx: 'Resuscitate and stabilise pt (ABCDE), analgesia; surgical Mx depends on classification: ?displaced, ?intracapsular, ?trochanteric'
		},
        {
            name: 'Parkinsons',
            description: 'A complex disorder that encompasses motor, neuropsychiatric, autonomic, sensory, cognitive and psychotic Sx.',
            hx: 'Carer Hx',
            ex: 'Bradykinesia, tremor, rigidity, postural instability, masked facial expression, freezing',
            ix: 'SMMSE, MRI to exclude structural lesions',
            mx: 'Levodopa - absence of observable response rules out Dx'
		},
        {
            name: 'Functional decline',
            description: 'aka failure to thrive. Which terminology do you prefer?',
            hx: '3Ds of geriatrics',
            ex: 'CGA',
            ix: 'FBE + CMP + Iron studies + UEC + DEXA... the list could go on.',
            mx: 'Neuropsych r/f'
		},
        {
            name: 'Polypharmacy',
            description: 'Various definitions exist, but at the end of the day what constitutes polypharmacy depends on the pt.',
            hx: 'Check medication chart',
            ex: 'Vitals + gait + neuro',
            ix: 'N/A',
            mx: 'Rationalise based on symptomatology.'
		},
        {
            name: 'Frailty',
            description: 'Degenerated homeostatic mechanisms renders vulnerability to minor insults.',
            hx: 'Ax severity - wound healing / pain Sx / fatigue',
            ex: 'As I.',
            ix: 'N/A',
            mx: 'Optimise function, limit decline'
		},
        {
            name: 'Vascular dementia',
            description: 'Considerable overlap with AD',
            hx: 'Executive fxn often precedes memory loss; presence of vascular RFs esp. stroke Hx leads Dx',
            ex: 'Cognitive testing',
            ix: 'MRI',
            mx: 'Neuropsych r/f'
		},
        {
            name: 'Delirium',
            description: 'The pathophys is still poorly understood, and the Dx is still often missed.',
            hx: 'Determine presence of predisposing (sensory impairment + dehydration + old age + depression + dementia (collateral Hx of cognitive decline useful)) and precipitating (Rx change / polyRx / change of environment e.g. hospital admx / constipation) factors.',
            ex: 'Vitals; CAM - acute onset & fluctuating course, disorganised speech and/or behaviour, inattention, altered conscious state; other cognitive testing (SMMSE, RUDAS, MOCA)',
            ix: 'Urine MCS, FBE + UEC + CRP + BSL',
            mx: 'Remove trigger, halo'
		},
	];


    $scope.showAcConditions = function (x) {
        $scope.info = $scope.acconditions[x].description;
        $scope.hx = $scope.acconditions[x].hx;
        $scope.ex = $scope.acconditions[x].ex;
        $scope.ix = $scope.acconditions[x].ix;
        $scope.mx = $scope.acconditions[x].mx;
        $scope.selectedAcConditions = x;
    };


    //          AC OSCEs

    $scope.acosce = [{
            name: 'Confirmation of death',
            description: 'You have been notified by a ward nurse that Mohammed, 81, has died. Please confirm his death.',
            structure: 'Check resusc status, if family present offer condolences and explain procedure; wash hands, confirm pt identity, general inspection, ?respiratory distress, verbal stimulus, pain, pupils, pulse (carotid), auscultate heart for ≥2mins, lungs ≥3mins; documentation',
            mnemonic: 'DVPPP - Distress Verbal Pain Pupils Pulse',
            questions: 'What are three reasons for which you would refer this case to the coroner?'
		},
        {
            name: 'Carer distress',
            description: 'Thi\'s father burnt his forearm on a frying pan last night, while wandering around the house. She is in significant distress following this incident.',
            structure: 'Calm, educate, Mx - supports include dementia.org.au, Dementia Australia, which has a national dementia helpline - DBMAS, local carer support groups',
            mnemonic: 'What CAUSEd the behaviour? -Communication -Activity -Unwell/unmet needs -Story -Environment -dementia',
            questions: 'What therapies could Thi\'s father benefit from?'
		},
        {
            name: 'Patient w/ lower limb neoplastic skin lesion',
            description: 'Abdi, 71, has noticed a lump on his leg. Take a Hx and provide an appropriate list of Ix to the examiner.',
            structure: 'Examine lesion, ?duration, change, pain, itch, Hx of same, environmental factors, smoking, FHx of cancer',
            mnemonic: 'ABCDE helps you Dx melanoma -Asymmetry -Border irregularity -Colour (varied) -Diameter (>6mm) -Evolution, i.e. ∆ over time',
            questions: 'Which of ABCDE is the most important to you, in accurate Dx of melanoma?'
		},
        {
            name: 'Having trouble sleeping',
            description: 'Binh, 42, has appeared at your GP clinic to discuss issues with her sleep. Take a Hx and recommend appropriate Ix.',
            structure: 'BPS Hx, sleep cycle Hx, Ax for cause, Sx of mood / anxiety disorder',
            mnemonic: 'Zs for ZZZs - zolpidem & zopiclone',
            questions: 'What are the indications for benzodiazepine treatment of insomnia?'
		},
        {
            name: 'Palliative care',
            description: 'Devena, 94, is approaching the end of her life. Her daughter, Iris, has asked to speak with you, the resident on the palliative care ward.',
            structure: 'Optimisation of pain / N+V / constipation / dyspnoea / delirium; evaluation of ACD; discuss w/ family Sx of dying that are to be expected',
            mnemonic: 'TripleM G -morphine -midazolam -metoclopramide -glycopyrrhylate',
            questions: 'Describe aspects of a comprehensive palliative assessment.'
		},
        {
            name: 'Rushing to the toilet',
            description: 'Htin, 63, has presented to your GP clinic to discuss problems with his urination. Take a Hx and recommend appropriate Mx.',
            structure: 'Characterise severity (frequency, nocturia, dysuria, haematuria), smoking, FHx of prostate Ca',
            mnemonic: 'Causes of haematuria are BUMSHIT -BPH -Uropathy (obstructive) -Menses -Stone -Haematological -Infection -Trauma / Tumour / TB',
            questions: 'Should prostate cancer be regularly screened for in the community?'
		},
        {
            name: 'Patient nearing death',
            description: 'Kelechi, 91, has terminal pancreatic cancer. He is hoping to discuss issues related to death.',
            structure: 'ePOA - who can do it, what does it mean, who needs a copy, what decisions can be made',
            mnemonic: '>18 and decision-making capacity = can make an ePOA; ePOA ømake medical decisions, that requires MTDM',
            questions: 'What can a person award ePOA decision-making power over? Before whom must the ePOA be signed?'
		},
        {
            name: 'Post stroke rehabilitation',
            description: 'Jerry, 83, has had a right MCA stroke last week. Take a short Hx and deliver an appropriate Mx plan',
            structure: 'Neuro Ax, ADLs, mobility, candidate for ASAP rehab, then AH and Rx',
            mnemonic: 'OPQRS - OT + PT, Psych + QOL + Return to ___ + ST, SW',
            questions: 'What are three potential sequelae of cerebrovascular events such as Jerry\'s?'
		},
        {
            name: 'Legal aspects of ageing',
            description: 'Safia, 93, is concerned that her youngest son is trying to coerce her into changing her will. Counsel her on the legalities of this process going forward.',
            structure: 'ePOA can be awarded when judged to have decision-making capacity. If you have not awarded ePOA while you have capacity, VCAT will decide on your behalf who to award this to, or whether to vest it in a third-party administrator + guardian.',
            mnemonic: 'Emergency - Capacity - Directive - Decision-maker - Significance: If = no, move to next category, and if Significance = yes, contact Public Advocate (see OPA flowchart for more info)',
            questions: 'Under what circumstances could Safia\'s right to award ePOA be lost?'
		},
        {
            name: 'Worried about falling',
            description: 'Helen, 92, had a fall last week. She sustained no serious injuries but now refuses to leave her house, for fear of falling again. Take a Hx and counsel her on Mx options.',
            structure: '1. Hx of fall & PHx of falls 2. Establish presence of RFs 3. Educate regarding fear and risk of falling 4. Mx includes PT',
            mnemonic: 'OPQR',
            questions: 'What is the most likely cause of Helen\'s fall?; What are two intrinsic and extrinsic RFs for falls in general?'
		},
        {
            name: 'Multiple sclerosis',
            description: 'Myrtle, 52, has had MS for the last 14 years. Take a Hx of her illness and discuss Mx options.',
            structure: 'Neuro Sx -weakness (gait) -paraesthesia -vision (INO, RAPD) -bowel & bladder; Mx -Methyldpred for acute relapse -Mabs for for prevention -Pregab / TSAs / ISC for Sx relief',
            mnemonic: 'Vision gait doses for multiple sclerosis',
            questions: 'What is the most likely anatomical location of the demyelinating plaque that would cause these symptoms?; What does the presence of oligoclonal bands indicate?; What other conditions can result in generalized white matter disease evident on the MRI? '
		},
        {
            name: 'Differentiating delirium from BPSD',
            description: 'Jenny is a nurse on your ward. She is concerned about the behaviour of one of her patients. Counsel her.',
            structure: 'Onset, style of behaviours, conscious state',
            mnemonic: 'CAM: -Acute onset & fluctuating course -Inattention -Disorganised thought / behaviour -Altered level of consciousness',
            questions: 'How many points are required on the CAM for a Dx of delirium? What are three Ix you would order to confirm this Dx?'
		},
        {
            name: 'Falls examination',
            description: 'Grace, 83, has a few friends that have had bad falls recently. Counsel her on her falls risk.',
            structure: 'TUG + funcional reach + sternal push + heel \'n\' toe + stand on one leg',
            mnemonic: 'Falls are from feet and fear',
            questions: 'What factors lead to a decrease in independence in older people?'
		},
        {
            name: 'Rehab medicine',
            description: 'Returning a person to optimal function, in every domain of life.',
            structure: 'Ax for suitability: -cognition -motivation -capacity; assign appropriate AH + work as MDT; Mx Sx appropriately, avoid iatrogenic injury',
            mnemonic: 'OPQRS - OT, PT / psych, QOL, Return to ___, SP / SW',
            questions: 'What is one major C.I. for an older person to be involved in an exercise programme?'
		},
        {
            name: 'In tremendous pain',
            description: 'Saul, 62, has recently been diagnosed with osteoarthritis. Counsel him on his options for pain relief.',
            structure: 'Characterise pain, time course, MHx, FHx, Rx, allergies, SNAP, then run through Mx options - supportive therapy, simple analgesia, PT, joint replacement',
            mnemonic: 'Opioids only in short course',
            questions: 'What would you expect you expect to find in a synovial fluid aspirate from an osteoarthritic joint?'
		},
        {
            name: '3D Differentiation',
            description: 'I found this the most persistently challenging aspect of my aged care rotation.',
            structure: 'Chronological - Sx (now), causes (preceding), RF (in the past)',
            mnemonic: 'Of Course Many Alternate (meaning there is plenty of overlap!) -Onset -Course -Memory / Mood -Attention / Alertness',
            questions: 'What could make you think the most appropriate diagnosis is dementia / depresion / delirium?'
		},

	];


    $scope.showAcOsces = function (x) {
        $scope.osceinfo = $scope.acosce[x].description;
        $scope.structure = $scope.acosce[x].structure;
        $scope.mnemonic = $scope.acosce[x].mnemonic;
        $scope.questions = $scope.acosce[x].questions;
        $scope.selectedAcOsces = x;
    };



    //     GP

    //          GP Core Conditions

    $scope.gpconditions = [{
            name: 'COPD',
            description: 'Irreversible small airway destruction -> obstruction of airflow',
            hx: 'Assess severity (Rx, admx, QOL), smoking Hx',
            ex: 'Vitals: likely chronic hypercapnoea; Barrel chest + flap + tobacco stains + mixed cyanosis & plethora (\'blue\')',
            ix: 'Spirometry, ABGs',
            mx: 'Short - ↑SABA intake + oral Abx + CS; Long - SABA, ICS + LABA (seretide - fluticasone & formeterol), OCS'
		}, {
            name: 'T2DM',
            description: 'Decreased insulin sensitivity leads to poor BGL control',
            hx: 'AUSDRISK, hyperglycaemic episodes, FHx',
            ex: 'Heart + carotids + sensation + proprioception',
            ix: 'FBE + HbA1c + FBG',
            mx: 'Lifestyle +/- metformin +/- SUs +/- exenatide for weight loss +/- insulin (basal or bolus)'
		}, {
            name: 'Rhinosinusitis (Acute)',
            description: 'Only 1% is bacterial',
            hx: 'Re-sickening / ++severity at onset / >10d duration',
            ex: 'Fever, purulent nasal d/c',
            ix: 'None',
            mx: 'Supportive therapy, + Abx if Hx as above'
		}, {
            name: 'Tonsillitis (Tonsillopharyngitis)',
            description: '~30% CARviruses, ~10% GAS (higher in children)',
            hx: 'Oral intake + N/V + ?viral Sx (absence supports Dx) + exposure',
            ex: 'Exudative, enlarged, erythematous tonsils',
            ix: 'Rapid antigen detection test (strep throat swab)',
            mx: 'Mainstay is Abx (if viral ruled out)',
		}, {
            name: 'Hypertension',
            description: 'A myriad of factors cause BP to be higher than normal, which has a myriad of deleterious effects.',
            hx: 'aSxatic; enquire about causative factors e.g. SNAP',
            ex: 'BP 5 mins apart x3',
            ix: 'Gold standard ABMP',
            mx: 'Aim 140/90 or 130/85 if DM: Lifestyle +/- ACEi +/- ARB +/- β-blocker'
		}, {
            name: 'Skin Cancer',
            description: 'Many different kinds, most benign.',
            hx: 'Ax severity w/ Δ over time, bleeding',
            ex: 'Full skin check',
            ix: 'Excisional Bx for melanoma, shave or punch for other',
            mx: 'Usu wide local excision; topical e.g. imiquimod for superficial SCC'
		}, {
            name: 'Trichomoniasis',
            description: 'Trichomonas vaginalis is a protozoa, with a little flagella, and causes more infection than any other protozoa in developed countries.',
            hx: 'Frothy, musty-smelling discharge, pain; Women are symptomatic, men are asymptomatic.',
            ex: 'Genital examination',
            ix: 'Women: NAAT HVS or FPU; Men: NAAT FPU',
            mx: 'Met 2g + tinid 2g PO stat'
		}, {
            name: 'Atrial Fibrillation',
            description: 'Cooked circuitry leads to rapid atrial contraction and subsequent ventricular arrhythmia',
            hx: 'Palpitations + SOB + fatigue + angina + fainting + dizziness',
            ex: 'HR irregularly irregular',
            ix: 'ECG',
            mx: 'Rate control for older pts w/ persistent, rhythm control for younger w/ sporadic. Thrombi forms in poorly clearing atria so NOAC if ≥2pts on CHADSVASc'
		}, {
            name: 'Eczema',
            description: 'aka atopic dermatitis.',
            hx: '+++itch, PMHx or FHx of atopy, triggered by exposure, ?Sx onset',
            ex: 'Flexor rash w/ excoriation / lichenification',
            ix: 'Clinical Dx',
            mx: 'Topical CS + emollients +/- tacrolimus, avoid irritants'
		}, {
            name: 'Dyslipidaemia',
            description: 'Too many fats in the blood.',
            hx: 'SNAP',
            ex: 'BMI',
            ix: 'Lipid profile, HbA1c',
            mx: 'Statins +/- ezetimibe +/- cholestyramine'
		}, {
            name: 'Rheumatoid Arthritis',
            description: 'The immune system attacks the joints, relentlessly and progressively.',
            hx: 'Joint pain + stiffness worst in the morning',
            ex: 'Z-deformity, swan-neck, lateral deviation of wrist',
            ix: 'Serum ANCA, ANA, anti-dsDNA + ESR + CRP + FBE',
            mx: 'Simple analgesia, pred, mabs'
		}, {
            name: 'Osteoarthritis',
            description: 'Subchondral cysts + sclerosis, osteophytes, loss of joint space, microfractures → joint pain!',
            hx: 'Pain worse in evenings + stiffness, PHx ↓exercise, smoking, alcohol, manual labour',
            ex: 'Joints examination',
            ix: 'Xray',
            mx: 'Supportive w/ encouragement of gentle exercise, until surgery (joint replacement), with careful deliberation.'
		}, {
            name: 'Mycoplasma genitalium',
            description: 'Mgen lives on ciliated epithelial cells in the urogenital tract. It was only discovered in 1981, and has the smallest genome of any self-replicating organism that we know of.',
            hx: 'Resembles chlamydia; most often asymptomatic',
            ex: 'Genital examination +/- spec',
            ix: 'Women: NAAT endocervical / self-collected vaginal swab if more comfortable; Men: NAAT FPU',
            mx: 'Most are macrolide-resistant these days, so doxy 100 BD 7d then moxi 400 OD 7d.'
		}, {
            name: 'Asthma',
            description: 'Reversible airway obstruction with long-term remodelling',
            hx: 'Assess severity (Rx, admx, QOL) + triggers + current Mx',
            ex: 'Expiratory wheeze',
            ix: 'Spirometry pre- and post-bronchodilator',
            mx: 'SABA -> LAMA -> ICS -> oral CS'
		}, {
            name: 'CKD',
            description: 'Lose 1/2 kidney function before change is seen on eGFR',
            hx: 'HTN + DM + ATSI',
            ex: 'Diabetic exam',
            ix: 'FBE + UEC + CMP +/- CTKUB if structural cause suspected',
            mx: 'ACEi + diuretic + fluid restriction + control causes'
		}, {
            name: 'Acne',
            description: 'Infection of facial sebaceous glands, usually w/ Proprionibacterium.',
            hx: 'Severity (QOL), duration',
            ex: 'Skin check',
            ix: 'Clinical Dx',
            mx: 'Mild -BPO / salicylic acid; Moderate -Topical retinoids +/- topical/oral Abx +/- hormonal Rx in females; Severe -Isotretinoin'
		}, {
            name: 'Chest Pain',
            description: 'Is it a heart attack?',
            hx: 'Characterise pain, AFs: N/V, diaphoresis, pallor, SOB, fever; Hx of GORD, CVRFs',
            ex: 'Vitals, palpate abdo, check for pulsatile mass',
            ix: 'ECG, FBE + CRP + lipase',
            mx: 'Depends on cause'
		}, {
            name: 'Gonorrhoea',
            description: 'Neisseria gonorrhoeae is a gram-negative diplococcus that lives mainly in neutrophils.',
            hx: 'Discharge, pain with urination or intercourse; 80% of women but only 15% of men are asymptomatic',
            ex: 'Genital examination, joints for reactive arthritis',
            ix: 'Women: NAAT endocervical / self-collected vaginal swab if more comfortable; Men: NAAT FPU',
            mx: 'Azithro 1g PO + Cef 500 IM stat'
		}, {
            name: 'Back Pain',
            description: 'Imagine the pain across the spectrum of age. How would your thoughts change?',
            hx: 'Characterise pain, precipitant, presence of red flags: fever, LL weakness / ↓sensation / tingling, B&B, underlying medical condition, Rx',
            ex: 'Palpate site of pain',
            ix: 'Imaging only I. if red flags present, or if pain has persisted for >6wks w/o response to conservative treatment.',
            mx: 'Simple analgesia (paracetamol, ibuprofen, topical NSAIDs), C. brief opioid therapy, physio, exercise as tolerated - hurt is not harm.'
		}, {
            name: 'Stroke',
            description: 'What is the ongoing impact? How can QOL be maximally achieved?',
            hx: 'CVRFs, Sx of depression, seizures',
            ex: 'Vitals, neuro exam, CV',
            ix: 'CT brain, lipids, HbA1c',
            mx: 'A/c ongoing (usu NOAC)'
		}, {
            name: 'T1DM',
            description: 'Autoimmune destruction of pancreatic β-cells.',
            hx: 'Hypos, hospital admx',
            ex: 'Ongoing CV',
            ix: 'HbA1c',
            mx: 'Individualise insulin regime'
		}, {
            name: 'Chlamydia',
            description: 'Chlamydia trachomatis is an obligate intracellular Gram-negative bacteria, which is also responsible for the disease known as trachoma.',
            hx: 'Itch, discharge, pain; most often asymptomatic',
            ex: 'Genital examination, joints for reactive arthritis',
            ix: 'Women: NAAT endocervical / vaginal swab; Men: NAAT FPU',
            mx: 'Azithro 1g stat -or- doxy 100 BD 7d'
		}, {
            name: 'Non-specific Headache',
            description: 'What are the red flags?',
            hx: 'Attempt to identify cause: ↑stress / dehydration; red flags: fever, neck stiffness, visual distrubance, facial weakness, gait disturbance',
            ex: 'Neuro, CN',
            ix: 'Depends on severity',
            mx: 'Simple analgesia'
		}, {
            name: 'Hypothyroidism',
            description: '95% primary.',
            hx: 'Cold, dry, overweight, fluid-filled, constipated, thick hair; menstrual Hx',
            ex: 'Vitals',
            ix: 'FBE + TFTs',
            mx: 'Levothyroxine, aim TSH & T4 in reference range'
		}, {
            name: 'IBS',
            description: 'Said to effect around 10% of people. Only 30% present, with similar Sx to the 70% but +anxiety & ↓QOL.',
            hx: 'Cramping pain often r/t defecation, diarrhoea / constipation / mixed, weight loss, fever, night sweats, PR bleed',
            ex: 'GIT exam',
            ix: 'FBE + CRP + coeliac screen +/- stool sampling',
            mx: 'Fucking hard. Pt r/ship is critical. Try FODMAPs +/- psyllium to begin with, then C. antispasmodics, antidarrhoeals / polyethylene glycol.'
		}, {
            name: 'Meningitis',
            description: 'Inflammation across the meninges. If bacterial, usu strep pneumonia or neisseria meningitidis; if viral, enterovirus',
            hx: 'Classical triad: ∆in conscious state, fever + neck stiffness',
            ex: 'CN',
            ix: 'FBE + CRP + BCs x 2 + LP',
            mx: 'Empiric Abx therapy while awaiting cultures'
		}, {
            name: 'Coeliac',
            description: 'T-cell mediated gluten intolerance in small bowel.',
            hx: 'Triggers, N/V/D/C, PV bleed',
            ex: 'GI exam',
            ix: 'Anti-TTG, anti-gliadin',
            mx: 'Avoid gluten.'
		}, {
            name: 'GORD',
            description: 'Failure of the LOS → gastric acid in area of oesophagus w/ somatic sensation',
            hx: 'Burning epigastric pain worse after meals, on lying down + burping; Ax for other Sx e.g. haemetemesis, EtOH abuse',
            ex: 'GI exam',
            ix: 'Clinical Dx',
            mx: 'Avoid fatty foods,'
		}, {
            name: 'Migraine',
            description: 'These days, migraine is thought to be a neurogenic process, w/ 2º changes in cerebral blood flow.',
            hx: 'Sx + aura + triggers ',
            ex: 'Neuro + CVS',
            ix: 'Clinical Dx, however: -if considering GCA, ESR + CRP',
            mx: 'Acute: NSAIDs, paracetamol, sumatriptan; Preventive: β-blockers, anticonvulsants TCAs'
		}, {
            name: 'Fatty Liver',
            description: 'NAFLD & NASH; in the latter there is inflammation.',
            hx: 'Fatigue, malaise, RUQ discomfort; EtOH',
            ex: 'GI exam',
            ix: 'FBE + LFTs + lipase + US + Hep serology + lipids + HbA1c',
            mx: 'If ↑lipids Rx statin, weight loss, EtOH cessation'
		}, {
            name: 'Hyperthyroidism',
            description: 'Most commonly Grave\'s disease.',
            hx: 'Sweating, feeling hot / anxious, oligomenorrhoea, diarrhoea, palpitations, tremor, insomnia',
            ex: 'Thyroid exam (heart, tremor, eyes, pretibial)',
            ix: 'TFTs + FBE',
            mx: 'Antithyroid agents (carbimazole / PTU), radioactive iodine, surgery (hemi- / total thyroidectomy), +/- endo referral'
		}, {
            name: 'Tension Headache',
            description: 'Like a band around the head.',
            hx: 'Ax severity; RFs: stress, mood, caffeine, smoking; Rule out other causes: aura, vision, stiff neck, fever, N/V',
            ex: 'CN exam',
            ix: 'Only if focal neurological signs present',
            mx: 'Simple analgesia, lifestyle'
		}, {
            name: 'Polymyalgia Rheumatica',
            description: 'Associated w/ GCA and almost exclusively a disease of ≥50yo.',
            hx: 'Proximal muscle pain (shoulder + hip + neck + torso), morning stiffness',
            ex: 'Relevant joint exams -classical finding is restricted ROM esp abduction of shoulder',
            ix: 'ESR + CRP + RA screen',
            mx: 'Rx low-dose CS (15mg/d), advise that PMR worsens w/ inactivity'
		}, {
            name: 'Osteoporosis',
            description: 'Weak bones fracture easy.',
            hx: 'RFs FHx + SHATTERED: Steroids, hyperpara/thyroidism, alcohol + smoking, thin, testosterone↓, early menopause, renal disease / liver failure, erosive / inflmtry disease such as RA, dietary Ca↓ / T1DM',
            ex: 'Gait & balance testing to Ax falls risk',
            ix: 'DEXA, biannual in ↑risk pop.n',
            mx: '↑dietary Ca + Vit D, bisphosphonates (alendronate → fosamax), RANK-Lis (denosumab), SERMs (tamoxifen)'
		}, {
            name: 'Red Eye',
            description: 'Conjunctivitis / dry eyes / foreign body... the list is long, and is usually limited to PC treatment.',
            hx: 'Ax severity',
            ex: 'Eye inspection -?distorted pupil -?corneal involvement -?copious d/c; vision testing',
            ix: 'Conjunctival scraping & culture if severe bacterial conjunctivitis suspected',
            mx: 'Hard to differentiate b/w viral and bacterial:: most cases treated w/ Abx; R/f when severe pain not relieved w/ topical anaesthetics'
		}, {
            name: 'Prostate Cancer',
            description: 'Include a thorough understanding of screening recommendations',
            hx: 'Storage & voiding Sx, haematuria, fatigue, weight loss, night sweats; RFs include age, FHx (of PCa or BCa), obesity',
            ex: 'DRE (though inaccurate)',
            ix: 'PSA + FBE + ferritin, +/- Bx',
            mx: 'Watchful waiting / active surveillance / surgery / TURP / external or internal (aka brachy) RTx / hormone therapy (GnRH agonist - zoladex, antiandrogen / testosterone receptor blockers - bicalutamide)'
		}, {
            name: 'Fever in a Returned Traveller',
            description: 'Malaria until proven otherwise.',
            hx: 'Other Sx - N/V, diarrhoea, fatigue, change in skin colour',
            ex: 'Vitals and CV',
            ix: 'FBE + malaria ICT + thick&thin films +/- LFTs if jaundiced +/- stool sample if diarrhoea',
            mx: 'OP Mx suitable for some uncomplicated cases; mainstay of Rx is chloroquine'
		}, {
            name: 'Benign Prostatic Hyperplasia',
            description: '80% of men >80.',
            hx: 'Storage and voiding Sx, haematuria, C. International Prostate Symptom Score Ax',
            ex: 'DRE',
            ix: 'Urine MCS if acute; microscopic haematuria is common',
            mx: 'Rx monotherapy tamsulosin / duodart (dutasteride + tamsulosin) +/- oxybutynin, urology r/f for severe Sx, advice re: controlling Sx -avoid fluid intake before bed / outing -↓caffeine / alcohol -double voiding'
		}, {
            name: 'Wrist Injury, ?Fracture',
            description: 'Colles, Smith or Barton\'s? To which prick of an orthopod should this fracture be named after?',
            hx: 'Mechanism of injury (most likely FOOSH)',
            ex: 'Ax neurovascular compromise',
            ix: 'Xray',
            mx: 'Resuscitate + stabilise pt; analgesia + closed reduction + below-elbow backslab, or surgical intervention: ORIF / K-wire / external fixation; PT'
		}, {
            name: 'Chalazion',
            description: 'Blocked meibomian gland makes a little uninflamed lump.',
            hx: 'Begins w/ redness & swelling, progresses to firm, non-tender ~pea-size mass',
            ex: 'Inspect',
            ix: 'N/A',
            mx: 'øsqueeze or popping; warm compresses + reassurance'
		}, {
            name: 'Psoriasis',
            description: 'An autoimmune disease of skin and, in 30%, joints.',
            hx: 'Itch',
            ex: 'Symmetrical erythematous plaques w/ silver scaling',
            ix: 'Clinical Dx',
            mx: 'Topical emollients & CS +/- MTX, cyclosporine, adalimumab, phototherapy'
		}, {
            name: 'Erectile Dysfunction',
            description: 'Increases in prevalence with age.',
            hx: 'C. 3 main forms: erectile dysfunction, ↓libido, premature ejaculation; Ax w/ questions of -rapidity of onset, erectile reserve, and RFs: obesity, smoking, alcohol, CVD',
            ex: 'Ax secondary sexual characteristics, femoral + peripheral pulses',
            ix: 'HbA1c + FBE + TFTs + serum total testosterone',
            mx: 'Rationalise Rx, lifestyle, sexual therapy counselling, PDE-5i (sildenafil → viagra)'
		}, {
            name: 'Anaphylaxis',
            description: 'Massive histamine release from IgE-triggered mast cells.',
            hx: 'Medical emergency based OEx',
            ex: 'Recognise early. Angiooedema, bronchoconstriction, diffuse erythema +/- urticaria, hypotension, N/V',
            ix: 'For further Ix by allergist',
            mx: 'IM adrenaline in Epipen (*there are no absolute contraindications to adrenaline admx), IV fluid resusc'
		}, {
            name: 'Eye Foreign Body',
            description: 'Something\'s in me eye!',
            hx: 'Severe eye pain, photophobia, foreign body sensation',
            ex: 'Visual acuity (if normal, penetrating eye injury unlikely), eye exam',
            ix: 'Fluorescein staining to rule out penetrative injury',
            mx: 'Immediate removal, simple oral analgesia if small +/- topical NSAIDs on eye, reassure that most abrasions heal w/in 24-48hrs'
		}, {
            name: 'Fatigue',
            description: 'Stressful life events precipitate fatigue presentations in 65% of cases. Don\'t let yourself trivialise the fatigue as psychological on this account though - the experience of it is physical.',
            hx: 'Red flags: recent onset in well older pt, weight loss, night sweats, bleeding, SOB, unexplained lymphadenopathy, fever; PROMPt (particularly M); When did you last spend time doing nothing but relaxing?',
            ex: 'Systems review',
            ix: 'Recommended initial battery: urine dipstick + fingerprick BSL + FBE + TSH + ferritin +/- ESR/CRP',
            mx: 'Delaying Ix does not ↓pt satisfaction levels; Ix for Sx w/ low pre-test probability of serious illness does not reassure or ↓pt anxiety'
		}, {
            name: 'Epistaxis',
            description: '90% are anterior, 10% posterior - it is these which confer ↑Ro airway compromise / aspiration',
            hx: 'Ax cause (85% are idiopathic and spontaneous), severity (duration, pain, light-headedness, LOC)',
            ex: 'Ax site of bleed',
            ix: 'FBE + G&H if bleeding severe',
            mx: 'ABCs, topical anaesthetic spray, cauterise w/ silver nitrate, nasal packing'
		}, {
            name: 'Pancreatitis',
            description: 'Stasis is, as always, the basis. And alcohol. IGETSMASHED',
            hx: 'Epigastric pain, N/V',
            ex: 'GI exam',
            ix: 'Lipase, LFTs, FBE + UEC + CTAbdo',
            mx: 'NBM, IV fluids + Abx'
		}, {
            name: 'IBD',
            description: 'Ulcerative colitis and Crohn\'s disease. The latter is full thickness and from mouth to anus.',
            hx: 'Diarrhoea, blood in stool, dyschezia, weight loss',
            ex: 'GI exam + DRE',
            ix: 'Anti-TTG, anti-gliadin',
            mx: 'Severe refractory: Mabs'
		}, {
            name: 'Breast Ca',
            description: 'In stratifying risk, consider what raises oestrogen levels.',
            hx: 'EtOH, smoking, obesity, age of menarche / menopause, FHx, lumps',
            ex: 'RACGP: there is insufficient evidence to recommend clinical breast examination (!)',
            ix: 'Mammogram 2-yearly from age 50-74',
            mx: 'r/f for family Ca clinic / oncology if higher risk (≥1 1˚ relative), possible genetic testing, C. mastectomy / salpingo-oophorectomy if +++risk'
		}, {
            name: 'Fever in a returned traveller',
            description: 'Overdiagnosis is rampant, so be alert but øalarmed',
            hx: 'Is it systemic systemic febrile illness (malaria, dengue, typhoid)? Is it acute diarrhoea? Or is it respiratory? Incl. vaccination status, crosscheck travel destinations with online exposure map, co-travellers affected',
            ex: 'Liver, lymph nodes, spleen',
            ix: 'FBE + LFTs + thick&thin malaria films +/- stool culture, serology',
            mx: 'R/f to ED if no clear Dx made'
		}, {
            name: 'Acute Abdomen',
            description: 'Peritonitis usu = perforation',
            hx: 'Ax severity, duration, N/V, bowel movements, eating & drinking',
            ex: 'Ax immediately (w/ observation and vitals): are they critically unwell? If so, ABC; GI exam',
            ix: 'FBE + CRP + ABGs + UEC + LFTs + lipase + urine dip + erect CXR + CT',
            mx: 'ABCs, IV access, NBM, Rx analgesia, VTE prophylaxis +/- antiemetics, give fluids & monitor fluid balance,'
		}, {
            name: 'Sebaceous Cyst',
            description: 'Sebaceous gland grows way out of proportion.',
            hx: 'Painless lump',
            ex: 'Fluctuant',
            ix: 'None',
            mx: 'Elective excision'
		}, {
            name: 'Diverticular Disease',
            description: 'Imagine squeezing a small balloon with your fingers slightly apart. The bulges that come through are like diverticulae.',
            hx: 'LLQ pain, ∆bowel habits, N/V',
            ex: 'GI exam, abdo palp, DRE',
            ix: 'CT abdomen',
            mx: 'If uncomplicated presentation: free fluids, analgesia + Abx, education re: fibre + fluid intake; If burst diverticulae: immediate Hartmann\'s.'
		}, {
            name: 'Ureteric Colic',
            description: 'The majority of stones pass naturally.',
            hx: 'Fucking Hurts esp sites of transition (\'loin to groin\'), haematuria',
            ex: 'Urinalysis',
            ix: 'FBE if febrile, non-contrast CTAP +/- KUBUS',
            mx: 'Analgesia, Abx, alpha blockers, IV fluids, surgery (stent / nephrostomy / shockwave lithotripsy),'
		}, {
            name: 'Lipoma',
            description: 'Benign adipose tissue tumour.',
            hx: 'Development over time, focal neurological Sx from nerve compression.',
            ex: 'Palpate, full skin check',
            ix: 'US',
            mx: 'Elective excision if bothersome'
		}, {
            name: 'Insomnia',
            description: 'Sx of inadequate sleep in ~40% of Australian adults; significant insomnia in 20%.',
            hx: 'Ax severity (QOL), sleep timing + hygiene, other Sx e.g. restlessness, PMHx esp. psych, hyperthyroid Sx',
            ex: 'Neuro for RLS, Epworth Sleepiness Scale',
            ix: 'Clinical Dx',
            mx: 'CBT, Sxatic relief w/ benzos, Z-drugs, exercise'
		}, {
            name: 'PUD',
            description: 'Ulcers are usually in the first part of the duodenum.',
            hx: 'Anaemia Sx, Hx of GORD, epigastric pain, FHx of GI issues',
            ex: 'Epig. tenderness (usually mild)',
            ix: 'Helicobacter fecal antigen / breath test, G-scope Bx',
            mx: 'PPI (esomeprazole), H2RA (ranitidine), antacids (sodium bic/alg); Rx of H. pylori -clarithro+amoxi+metro'
		}, {
            name: 'Haemorrhoids',
            description: 'Inflamed superficial veins in the rectum and anus',
            hx: 'Bright red blood in stool & on wiping, itch / pain / discomfort, Hx of straining or constipation / proloned sitting / lifting',
            ex: 'GI exam + DRE',
            ix: 'None',
            mx: '↑fluid & fibre, banding'
		}, {
            name: 'Gallbladder Disease',
            description: 'Bile backup is bad as stasis is the basis.',
            hx: 'Pain Pee Poo Pruritus, N/V',
            ex: 'Jaundice, RUQ pain, fever',
            ix: 'LFTs + FBE + UEC + lipase + US +/- ERCP',
            mx: 'Abx + analgesia + lap chole'
		}, {
            name: 'Chicken Pox',
            description: 'VZV infection contracted by inhalation of droplets.',
            hx: 'Exposure to infection, ++itch, duration of Sx (usu 5-10d)',
            ex: 'Complete skin check for characteristic rash',
            ix: 'Culture from vesicle but simple clinical Dx',
            mx: 'School absence - infectious 4-5 days after clearing rash, calamine gel for itch, acyclovir'
		}, {
            name: 'Balanitis',
            description: 'Inflammation of foreskin and glans.',
            hx: 'STI Sx: pain, itch, redness, discharge;',
            ex: 'Genital examination, vitals',
            ix: 'None',
            mx: 'Effective cleaning principles +/- clotrimazole cream'
		},

	];



    $scope.showGpConditions = function (x) {
        $scope.info = $scope.gpconditions[x].description;
        $scope.hx = $scope.gpconditions[x].hx;
        $scope.ex = $scope.gpconditions[x].ex;
        $scope.ix = $scope.gpconditions[x].ix;
        $scope.mx = $scope.gpconditions[x].mx;
        $scope.selectedGpConditions = x;
    }


    //          GP OSCEs

    $scope.gposce = [{
            name: 'Iron Deficiency Anaemia',
            description: 'The key is to ask: what is really going on here?',
            structure: 'Assess severity + possible causes + treatment options',
            mnemonic: 'TAMM -Thalassaemia -Anaemia of chronic disease -Malabsorption 2º to ED -Menstruation',
            questions: 'What are two causes of normocytic and macrocytic anaemia?'
		},
        {
            name: 'Screening for STIs',
            description: 'Roshan, 21, has appeared to his local GP practise to discuss his urinary Sx. Take a Hx and recommend an appropriate Mx plan.',
            structure: 'Assess Sx: discharge, itch, pain, blood in urine, pain on urination, painless sore (chancre); Differentiate from UTI: fever, frequency; Screening info: MSM -syph -chlamyd -gono -HIV -Hep ABC at least annually. Pregnant women -HIV -syph -chlamyd -Hep B is standard AN screen.',
            mnemonic: 'Sexual Hx PPPPP - Partners Practises Protection from STIs Prevention of pregnancy PHx of STIs',
            questions: 'What investigations would you like to order for this young man?'
		},
        {
            name: 'Starting warfarin',
            description: 'Rarer these days, but still could be assessed.',
            structure: 'Relevant C.I.: recent bleed, tendency to bleed, liver failure, øaccess to pathology for repeat INR',
            mnemonic: 'BRAIN -Benefits -Risks -Alternatives -Incidental consequences -Nothing (what will happen if we don\'t)',
            questions: 'What are the three most common indications for warfarin therapy?'
		},
        {
            name: 'Can\'t get it up ',
            description: 'Jiddu, 42, has been having issues with his sexual function for some years now. Take a Hx and determine the cause of his Sx.',
            structure: 'Assess for cause; rapid-onset → performance anxiety; øspontaneous erections → vascular cause',
            mnemonic: '3 causes of male sexual dysfunction: PEED ↓libid',
            questions: 'What laboratory tests would you order for this man?'
		},
        {
            name: 'Fever in a returned traveller',
            description: 'Andrew, 24, has recently returned from Indonesia, and has developed a fever of 39˚. Take a Hx and determine the likely cause.',
            structure: 'Asssociated features: N/V, diarrhoea, pain, itch, jaundice, change in P&P; drug & EtOH, tattoos / transfusions',
            mnemonic: 'The big ones: MDT Hep ABC',
            questions: 'What is the most likely diagnosis?'
		},
        {
            name: 'Osteoarthritis examination',
            description: 'Kendra, 45, has been experiencing consistent pain in her knees. Perform a full examination and recommend appropriate Mx.',
            structure: 'Look feel move, expect ↓ROM and pain in joints +/- bony enlargement w/ malalignment; DIP & PIP',
            mnemonic: 'Painkillers, PT / OT, weight loss / replacement',
            questions: 'What are four signs of OA on Xray?'
		},
        {
            name: 'Quitting smoking',
            description: 'Oscar, 53, is a long-term smoker who has decided at last to quit. Counsel him on his options.',
            structure: 'Non-pharm: MI, hypnotherapy, CBT; Pharm: varenicline',
            mnemonic: 'EDRS: employ empathy, deploy discrepancy, roll with resistance, support self-efficacy',
            questions: 'What are the common ADEs of varenicline?'
		},
        {
            name: 'Getting tired during the day',
            description: 'Josiah, 41, has presented to your GP clinic to discuss his fatigue.',
            structure: 'Snoring / daytime sleepiness (ESS) / grogginess / awaken feeling unrestored / awaken in the night gasping for air',
            mnemonic: 'OSA -obesity -smoking -age',
            questions: 'What treatments are available for people with Josiah\'s condition?'
		},
        {
            name: 'Feeling exhausted',
            description: 'Naomi, 39, has been feeling severely fatigued of late. Take a Hx and recommend appropriate Ix.',
            structure: 'Recent stressors, Ca screen',
            mnemonic: 'If the Hx is vague, use PROMPt',
            questions: 'What screening tests are most likely to yield useful clinical information in evaluation of fatigue?'
		},
	];


    $scope.showGpOsces = function (x) {
        $scope.osceinfo = $scope.gposce[x].description;
        $scope.structure = $scope.gposce[x].structure;
        $scope.mnemonic = $scope.gposce[x].mnemonic;
        $scope.questions = $scope.gposce[x].questions;
        $scope.selectedGpOsces = x;
    }

    //     MH

    //          MH Core Conditions

    $scope.mhconditions = [{
            name: 'Schizophrenia',
            description: 'Affects 0.86% of the population, considered one of the most devastating diagnoses to receive.',
            hx: '2 of these for 1 month: -hallucinations -delusions -negative Sx -disordered speech -catatonia / other markedly abnormal behaviour. One of the 1st 3 must be present; continuous signs of disturbance must persist or have persisted for 6m. Often Dxd w/ \'premorbid schizotypal PD\'',
            ex: 'MSE',
            ix: 'Gene testing someday',
            mx: 'Maintentance atypicals, for at least 12m from Dx. ↓insight is common and the most powerful indicator of adherence to treatment.'
		},
        {
            name: 'Dependent personality disorder',
            description: 'Cluster C. Characterised by inability to take responsibility for life due to fear. Described in DSM as a pattern of \'submissive and clinging behaviour\'.',
            hx: '≥5 of -difficulty making everyday decisions / -expressing disagreement / -initiating projects -requires others to assume responsibility for life -desperate for nurturance -uncomfortable or helpless when alone -urgently seeks close r/ship as source of care when another ends -unrealistically preoccupied w/ fears of being alone w/ responsibility',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT +/- Rx for comorbidity'
		},
        {
            name: 'Substance dependence',
            description: 'If a person takes enough of a substance to cause clinically significant distress or impaired functioning, they qualify for this Dx.',
            hx: 'There are many quantifiers of severity in the DSM. In summary, addiction is \'compulsive, continued and w/ consequences\'. Always consider as a comorbidity to other psych conditions.',
            ex: 'MSE, urine screening (w/ C.n of time span between ingestion and detection)',
            ix: 'Drug tox screen + EtOH levels',
            mx: 'MI, group therapy, disulfiram, thiamine'
		},
        {
            name: 'Schizoid personality disorder',
            description: 'Cluster A. Characterised by detachment from social relationships & ↓emotional expression. Think cold, aloof, distrustful and solitary.',
            hx: '≥4 of: -no enjoyment of close r/ships -favours solitude -no interest in sex -no pleasure in most activities -no close friends -indifferent to praise or criticism -emotionally cold / detached / flattened affect',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Be wary of ↑Ro suicide / psych comorbidity. Treat Sx as they appear'
		},
        {
            name: 'Delusional disorder',
            description: 'Delusions are the only Sx.',
            hx: 'Age of onset ~≥35, FHx, rarely leads to schizophrenia and a/w far less impairment / deterioration',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Rx atypicals; Care re: ↑Ro psych comorbidity, possibility of other causes e.g. delirium'
		},
        {
            name: 'Factitious disorder',
            description: 'Projection of physical Sx for subconscious personal gain (as opposed to malingering, which is conscious)',
            hx: 'Extremely hard to assess',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Just as hard to treat.'
		},
        {
            name: 'Generalised anxiety disorder',
            description: 'Baseline anxiety towards all facets of life.',
            hx: 'Excessive anxiety & worry, about a variety of things, on majority of days for ≥6m + ≥3 of -restlessness -easily fatigued -difficulty concentrating / \'mind going blank\' -irritability -muscle tension -sleep disturbance',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT +/- SSRI'
		},
        {
            name: 'Brief psychotic disorder',
            description: 'Psychosis that lasts longer than one day, less than one month. Beyond one month, the Dx of schizophrenia looms.',
            hx: 'FHx, Ax triggers, Risk Ax',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Rx atypicals, ongoing psychotherapy'
		},
        {
            name: 'Borderline personality disorder',
            description: 'Cluster B',
            hx: 'DSM: -Labile mood -Unstable self image -Cycles of idealisation & devaluation -Feelings of abandonment -Chronic emptiness -Risky behaviour -DSH & suicidality -Paranoid thoughts',
            ex: 'A pattern of the ≥5 of the above traits, that is pervasive, unwavering and causes significant distress',
            ix: 'N/A',
            mx: 'Dialectical Behavioural Therapy'
		},
        {
            name: 'Conversion disorder',
            description: 'The presence of neurological symptoms which do not correlate to observable / appreciable pathology.',
            hx: '≥1Sx of ∆ motor / sensory function, incompatible w/ recognised conditions, causing sig. distress / impairment',
            ex: 'MSE, neuro exam w/ attention to dermatomes vs. e.g. sensory loss',
            ix: 'N/A',
            mx: ''
		},
        {
            name: 'Schizoaffective disorder',
            description: 'Mood changes typical of bipolar plus psychotic episodes which occur only in the context of mood disturbance.',
            hx: 'FHx, drug & EtOH',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Rx atypicals'
		},
        {
            name: 'Somatic symptom disorder',
            description: 'The individual\'s suffering is authentic, whether or not it is medically explained.',
            hx: '≥1 somatic Sx that causes sig. distress / impairment, and is a/w excessive thoughts, feelings or behaviours related to the Sx, duration ≥6m',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Acknowledge that the pt is not faking their Sx - they believe in earnest that there is something seriously wrong, & this causes them +++anxiety & impairment. The suffering they inflict on themselves and others thereby, is entirely unintentional.'
		},
        {
            name: 'Wernicke-Korsakoff syndrome',
            description: '↓↓thiamine causes haemorrhagic necrosis in midline brain structures, primarily causing impairment of cognition, oculomotor function & gait.',
            hx: 'EtOH, malabsorption, poor diet, dialysis',
            ex: 'MSE',
            ix: 'FBE + LFTs',
            mx: 'IV thiamine in acute setting, supplementation ongoing'
		},
        {
            name: 'Major depression',
            description: '1 in 8 Australians have it, but only a third of these have access to treatment.',
            hx: 'Over 2wks, ≥5 of -↓mood -∆sleep -↓interest -↑guilt&worthlessness -↓energy -↓concentration/indecision -∆appetite/weight -↑/↓psychomotor activity -suicidal thoughts (SIG E CAPS)',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Rx CBT +/- SSRI'
		},
        {
            name: 'Antisocial personality disorder',
            description: 'Characterised by wilful disregard for the rights of others. Previously known as psychopathy / sociopathy / dyssocial personality disorder.',
            hx: 'Since age 15 ≥3 of -repeatedly doing things that warrant arrest -deceitfulness -impulsivity -irritability/aggression -disregard for safety of self&others -irresponsibility -no remorse; must have premorbid (<15yo) Dx of CD',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT doesn\'t work. Does the prison system?'
		},
        {
            name: 'Post-traumatic stress disorder',
            description: 'The intense emotional response through the duration of the trauma itself has ongoing negative effects.',
            hx: '≥1m of -hyperarousal -avoidance -re-experiencing the traumatic event -mood∆ (HARM)',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Risk Ax, CBT, group therapy, screen for psych comorbidity'
		},
        {
            name: 'Bipolar disorder',
            description: 'Mania usually lasts 2-6 weeks.',
            hx: 'Episodes of major depression + episodes of mania (elevated / expansive / euphoric mood + ↑goal-directed activity +/- pressured speech). Can be Dx solely on mania ≥1wk or requiring hospitalisation',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Sodium valproate / lithium plus atypical for acute mania, group therapy + lithium / valproate for maintenance'
		},
        {
            name: 'Panic disorder',
            description: 'The presence of panic attacks plus deleterious effects of avoidance / anxiety because of these attacks.',
            hx: 'Sense of foreboding',
            ex: 'MSE; tachycardia, diaphoresis, SOB, chest pain',
            ix: 'N/A',
            mx: 'CBT +/- SSRI +/- benzo PRN'
		},
        {
            name: 'Bulimia nervosa',
            description: 'Disordered eating with an out-of-control feeling component.',
            hx: '≥3m: -recurrent episodes of binge eating -sense of lack of control during episodes -compensatory behaviour -self-evaluation ++influenced by body weight and shape',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT +/- SSRI, care for relapse'
		},
        {
            name: 'Obsessive-compulsive disorder',
            description: 'There\'s a stereotype going around that this is the \'typical med student\'. Make of that what you will!',
            hx: 'Presence of obsessions (repetitive, stereotyped, egodystonic thoughts) and/or compulsions (repetitive, stereotyped behaviours or mental acts that if not carried out inevitably cause anxiety; the actions are logical in that they are enacted to prevent some future occurrence, however likely it may be)',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT +/- SSRI'
		},
        {
            name: 'Schizotypal personality disorder',
            description: 'Cluster A. The main difference between this and schizoid is the presence of eccentric thinking.',
            hx: '≥5 of -IoR -magical thinking -unusual perceptual experiences -odd thinking & speech -↓affect -↓close relationships -chronic social anxiety related to paranoid fears r/t negative self-judgment',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Psychotherapy + Rx which targets specific Sx (atypicals)'
		},
        {
            name: 'Social anxiety disorder',
            description: 'What it says on the package.',
            hx: '≥6m of marked fear or anxiety about social situations + fear of being negatively evaluated e.g. rejection + social situations in general almost always provoke fear or anxiety',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT +/- SSRI'
		},
        {
            name: 'Body dysmorphic disorder',
            description: 'Includes muscle dysmorphia.',
            hx: '-Preoccupation w/ perceived phsyical flaws that others consider slight -Repetitive behaviours a/w perceived flaws -Clinically sig. distress -Not better explained by ED',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Educate re illness + psychiatric treatments, futility of cosmetic interventions. Focus on pt\'s suffering and impaired functioning r/t their appearance. CBT +/- SSRI'
		},
        {
            name: 'Narcissistic personality disorder',
            description: 'Common and commonly self-diagnosed',
            hx: '9 features -entitlement -elevated self-esteem -exploits people -empathy-less -obsessed w/ dreams of power, success or ideal love',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'Try for CBT'
		},
        {
            name: 'Agoraphobia',
            description: 'Fear of situations from which it is perceived there might be no way to escape.',
            hx: 'Concomitant presence of panic attacks, FHx',
            ex: 'MSE',
            ix: 'N/A',
            mx: 'CBT / SSRI for initial Mx depending on pt preference, combine as required; add on benzo or if Hx of SUD pregabalin / gabapentin'
		},
        {
            name: 'Anorexia nervosa',
            description: 'An ED with control as it\'s focus.',
            hx: 'Comorbid psych Hx, FHx, gently explore r/ship to food',
            ex: 'Vitals, inspect for parotid thickening / lanugo, BMI',
            ix: 'Fingerprick BGL + FBE + ferritin + TFTs',
            mx: 'Admx w/ parenteral nutrition + care for refeeding'
		}
	];


    $scope.showMhConditions = function (x) {
        $scope.info = $scope.mhconditions[x].description;
        $scope.hx = $scope.mhconditions[x].hx;
        $scope.ex = $scope.mhconditions[x].ex;
        $scope.ix = $scope.mhconditions[x].ix;
        $scope.mx = $scope.mhconditions[x].mx;
        $scope.selectedMhConditions = x;
    };


    //          MH OSCEs

    $scope.mhosce = [{
            name: 'Social withdrawal',
            description: 'Haley, 27, has been asked to see you by his mother, who is concerned that he is becoming increasingly isolated.',
            structure: 'Risk Ax, psychosis screening, drug & EtOH',
            mnemonic: 'HaD DNC -Hallucinations -Delusions -Disorganised thought / speech -Negative Sx -Catatonia or other markedly abnormal behaviour',
            questions: 'What are three risk factors for schizophrenia?'
		},
        {
            name: 'Disordered eating',
            description: 'You are seeing Samadhi, 23, on day three of her admission for severe malnutrition and underweight. Take a Hx and recommend an appropriate Mx plan.',
            structure: 'Risk Ax, attitudes regarding weight, current self-/body-image, techniques for weight loss (diuretics, laxatives), BPS (predisposing, precipitating, protective), other complications e.g. menstrual cycle',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Alcoholism',
            description: 'You are seeing Nour, 42, referred from her GP for alcohol addiction. Take a Hx and recommend an appropriate Mx plan.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'First manic episode',
            description: 'You are seeing Marley, 42, an inpatient in the adult psychatric ward. Take a Hx and develop a Mx plan.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'A heightened spouse',
            description: 'Mark, 33, has presented to your GP clinic at his wife\'s request. Take a Hx and develop a list of DDx.',
            structure: 'Sx of hypomania -overspending -↑goal-directed activity -elated/euphoric/expansive mood -↓sleep; effect on life, premorbid fxn, substance use',
            mnemonic: 'Mania but w/ more control & less duration',
            questions: ''
		},
        {
            name: 'Depression in an elderly man',
            description: 'Manuel, 83, has presented to your GP clinic to discuss worsening stomach pain. Take a full psychosocial Hx and discuss appropriate Ix with the examiner.',
            structure: '',
            mnemonic: '',
            questions: 'How might depression present differently in an older person?'
		},
        {
            name: 'Episodes of terror',
            description: 'Seo-yun, 23, has presented to your GP clinic in tears. Take a Hx and recommend appropriate initial Mx.',
            structure: 'ABCs, Risk Ax, BPS',
            mnemonic: 'Panic disorder when panics cause disorder',
            questions: 'Is it possible that Seo-yun was experiencing the Sx of a PE? Why / why not?'
		},
        {
            name: 'Suicidally depressed',
            description: 'Elma, 42, has presented to the ED stating that she wishes she was dead. Take a complete Hx and recommend appropriate Mx.',
            structure: 'Risk Ax, CPR, BPS formulation',
            mnemonic: 'CPR - Current plan + Past Hx of attempts + Resources for support, both internal and external',
            questions: 'What are three dynamic RFs for suicide?'
		},
        {
            name: 'Risk Assessment',
            description: 'Perform one of these for every MH OSCE.',
            structure: 'Have you had -thoughts about harming yourself? -thoughts about killing yourself? -thoughts about harming others?; Have you ever had these thoughts in the past?',
            mnemonic: 'Risk Ax for Every Ax',
            questions: 'What factors would put this person more at risk of self-harm?'
		},

	];


    $scope.showMhOsces = function (x) {
        $scope.osceinfo = $scope.mhosce[x].description;
        $scope.structure = $scope.mhosce[x].structure;
        $scope.mnemonic = $scope.mhosce[x].mnemonic;
        $scope.questions = $scope.mhosce[x].questions;
        $scope.selectedMhOsces = x;
    };


    //     OG

    //          OG Core Conditions

    $scope.ogconditions = [{
            name: 'Normal labour',
            description: '~10 hours of cervical dilation from the beginning of labour.',
            hx: 'Latent phase: 3-4cms; Active 4-10cms; 2SL 10cms-birth of baby; 3SL birth of baby-delivery of placenta.',
            ex: 'Vaginal exam every 4hrs',
            ix: 'CTG often stays on iso ?definitive I.',
            mx: 'Physiological / augmented w/ cervical ripeners + uterotonics'
		},
        {
            name: 'Cervical cancer screening',
            description: 'Now known as CST.',
            hx: 'Dyspareunia / non-cyclic PV bleed',
            ex: 'Spec',
            ix: 'HSV DNA test; if Sxatic at any time, otherwise every 5 years from 25',
            mx: 'HPV vaccine; ablation or excision via colposcope if HSIL'
		},
        {
            name: 'Recurrent miscarriage',
            description: 'No cause identified in ~50%.',
            hx: 'Chromosomal abnormalities, smoking',
            ex: 'Spec',
            ix: 'Anti-Mullerian hormone, APSL screen, mycoplasma NAAT endocervical / vaginal swab',
            mx: 'As much reassurance as possible - it\'s a hard road.'
		},
        {
            name: 'Normal physiological changes in pregnancy',
            description: 'Big changes.',
            hx: 'CO ↑55%, tidal volume ↑50%, ↓FRC towards end of pregnancy',
            ex: 'Vitals',
            ix: 'N/A',
            mx: 'Reassurance'
		},
        {
            name: 'Ectopic pregnancy',
            description: 'Conceptus develops outside of the uterus.',
            hx: 'Depends on where it is; classically RIF pain, Sx of shock',
            ex: 'Abdo, bimanual for cervical excitation',
            ix: 'βhCG + FBE + CRP + UEC + ',
            mx: 'Medical: MTX; surgical: e.g. lap salpingectomy'
		},
        {
            name: 'Stillbirth',
            description: 'Often unexplained; most are a combination of fetal, maternal and placental factors.',
            hx: 'RFs: obesity, smoking, FHx, multiple pregnancy, older maternal age, concurrent medical issues',
            ex: 'Structural defects',
            ix: 'Perinatal autopsy if I.',
            mx: 'Optimise RFs; help the parents connect with and separate from their child'
		},
        {
            name: 'Multiple pregnancy',
            description: '3% of all pregnancies.',
            hx: '1. How are you feeling about this news? Standard Obs Hx -PObHx -Menstrual Hx -PGHx -First antenatal visit questions (Sx of pregnancy + arrange scans + ?FTCS)',
            ex: 'Palp',
            ix: 'FBE + G&H + folate B12 + Ab titres (HBV / HCV / HSV / MMR) + OGTT + US',
            mx: 'Monitor for complications: ↑Ro PET, PPH, APH, anaemia, CS'
		},
        {
            name: 'Teratogenic infection',
            description: 'TORCH',
            hx: 'T: myalgia + fever + headache; R: rash + mild fever; C: fatigue; H: sores on mouth, eyes or genitals',
            ex: 'Fever, skin check',
            ix: 'Stool sampling, Ab titres',
            mx: 'Mainly supportive depending on Sx; Rx for C-ganciclovir & H-acyclovir'
		},
        {
            name: 'Breast Ca',
            description: 'Screening mammogram from 50-74 every 2 years.',
            hx: 'Lump: characterise duration, presence of Sx',
            ex: 'Breast exam',
            ix: 'Mammogram, FNA, core needle Bx',
            mx: 'CTx / RTx'
		},
        {
            name: 'GDM',
            description: 'Placental steroids increase resistance to insulin throughout pregnancy.',
            hx: 'aSxatic; FHx + PMHx',
            ex: 'CV exam',
            ix: 'OGTT at 16-18 and 26 weeks, ~6 weeks postpartum +/- SMBG',
            mx: 'Diet / lifestyle, if targets not met: insulin (safe during pregnancy); offer IOL @ 39wks to ↓rate of macrosomia, shoulder dystocia and CS; encourage breastfeeding'
		},
        {
            name: 'Anaemia',
            description: 'Confers ↑Ro PPH, SGA, IUGR, FDIU, PTL',
            hx: 'Sx of anaemia',
            ex: 'Pallor, tachycardia, ↓CRT',
            ix: 'FBE + Iron studies + thal testing',
            mx: 'Oral iron w/ vitC / iron infusion; pregnancy multivitamin for F/B12; Prevention w/ prenatal vitamins'
		},
        {
            name: 'Preeclampsia',
            description: 'Pregnancy-induced hypertension plus signs of end-organ damage.',
            hx: 'RUQ pain, visual changes, N/V, headache',
            ex: 'Vitals',
            ix: 'FBE + coags + uric acid + PCR',
            mx: 'Labetalol'
		},
        {
            name: 'Placenta praevia',
            description: 'Placenta that is growing over the internal os.',
            hx: 'Bleeding, øpain; RFs: previous CS / PP, multiple pregnancy',
            ex: 'øVE',
            ix: 'Regular US',
            mx: '90% of cases Dx <20wks resolve spontaneously; CS'
		},
        {
            name: 'Hyperemesis',
            description: 'Excess vomiting in pregnancy.',
            hx: 'Ax severity, triggers, diet',
            ex: 'Weight, orthostatic BP',
            ix: 'UEC + urinalysis for ketones',
            mx: 'Titrate use of Rx to severity of N/V and response to trigger avoidance / diet mod.n; C. admx if severe for IV ondansetron + fluid replacement; pt preferences should guide therapy re: acupuncture & other CAMs.'
		},
        {
            name: 'Placental adhesive disorders',
            description: 'Accreta attaches / increta invades / percreta penetrates.',
            hx: 'Asymptomatic unless bleeding; #1 RF: PP after previous CS; ',
            ex: 'N/A',
            ix: 'Regular US',
            mx: 'CS w/ total hysterectomy'
		},
        {
            name: 'APH',
            description: 'Abruption / Previa / Haemorrhage from the GU tract.',
            hx: 'Pain, total PV loss, fetal movements',
            ex: 'Spec, øVE',
            ix: 'Kleihauer, amnisure',
            mx: 'If significant, delivery may be I.'
		},
        {
            name: 'Alloimunisation',
            description: 'Immune response to antigens from genetically foreign RBCs stimulates production of IgG.',
            hx: 'Full PObHx',
            ex: 'N/A',
            ix: 'G&H mother and father',
            mx: 'If Rh-ve, admx Anti-D at first AN visit, 36 wks and at delivery'
		},
        {
            name: 'Chorioamnionitis',
            description: 'Refers to infection of the fluid, membranes, placenta, cord, and / or decidua.',
            hx: 'ROM',
            ex: 'Fever, discoloured liquor, purulent discharge from os on spec',
            ix: 'FBE + AF mcs',
            mx: 'IV Abx - amp+gent, delivery'
		},
        {
            name: 'Induction of labour',
            description: '~25% of women who labour are induced. Recent research suggests that it confers no ↑Ro CS.',
            hx: 'RFs: post-dates, ↓FM, fetal distress on CTG, abnormal US results, APH, PET, GDM, PPROM >34wks, w/in 24 hrs term PROM,',
            ex: 'Observe colour of liquor',
            ix: 'CEFM',
            mx: 'Cervical ripening: balloon catheter / cervidil (prostaglandin); S&S if post-term; IV synt to stimulate contractions (major risk is of uterine hyperstimulation)'
		},
        {
            name: 'Termination of pregnancy',
            description: 'An estimated 25% of pregnancies worldwide result in termination.',
            hx: 'Confirmation of pregnancy',
            ex: 'Confirm uterine size & position',
            ix: 'FBE + G&H',
            mx: 'Mifepristone + misoprostol / D&E, link pt to emotional support services'
		},
        {
            name: 'Malpresentation',
            description: 'Breech, transverse, brow, face',
            hx: 'Fetal movements',
            ex: 'Palp abdomen, determine station + lie',
            ix: 'Regular US',
            mx: 'ECV, CS'
		},
        {
            name: 'Prolonged labour',
            description: 'From ACOG: \'recent data show that contemporary labour progresses at a rate substantially slower than what was historically taught\'. So how should we define \'prolonged\'?',
            hx: 'RFs relate to four Ps: Passenger / Power / Passage / Proportion',
            ex: 'Ax lie + station',
            ix: 'Investigations have been shown to be inaccurate in determing presence of CPD, and are no longer performed',
            mx: 'Ventouse / forceps / CS'
		},
        {
            name: 'Fetal distress',
            description: 'Abnormal fetal heart rate tracing is the 2nd most common cause of CS, as it is (somewhat controversially) a/w fetal distress.',
            hx: 'Before Ax of CTG must define risk: maternal medical illness, obstetric complications',
            ex: 'Foetal movements',
            ix: 'Normal variability: 5-25bpm; accelerations (>15bpm for >15s) are a reassuring sign; early decels follow contractions and are physiological, variable decels are random and a bit worrying, late decels begin at the peak of contraction and are worrying, prolonged decels are >3mins and are super worrying: emCS; sinuisoidal = severe hypoxia: emCS, outcome usually poor.',
            mx: 'C. IOL / emCS'
		},
        {
            name: 'Shoulder dystocia',
            description: 'The bony shoulder impacted on the pubic symphysis.',
            hx: 'ObHx, duration of labour, FHx',
            ex: 'Ax level of descent',
            ix: 'N/A',
            mx: 'HELPERR -call for Help -Evaluate for epis -Legs elevated / McRoberts -Pressure suprapubically -Enter vagina and perform manoeuvres -Remove posterior arm -Roll onto all fours; PPH Mx, tear repair'
		},
        {
            name: 'Instrumental birth',
            description: 'From experience in Birthing I\'d say rate of innovation in this area is snail\'s pace. The reason as in most cases is practitioner conservatism.',
            hx: 'PObHx',
            ex: 'VE to determine dilation',
            ix: 'FBE + coags + G&H',
            mx: 'Req.ts for instrumental delivery: -cephalic presentation -lithotomy position -adequate analgesia -IDC inserted -resusc prepped -full dilation; Ventouse: less maternal morbidity; Forceps: preferred by old hands, traction force safe limit 20kg in primips'
		},
        {
            name: 'Caesarean section',
            description: 'Remember to use the term \'birth\' rather than \'delivery\'.',
            hx: 'Abstain from intercourse for at least 6wks.',
            ex: 'Vitals, prev. abdo surgery scars',
            ix: 'FBE + coags + G&H',
            mx: 'Unless on maternal request, the decision for CS is based on a spectrum of safety.'
		},
        {
            name: 'VBAC',
            description: '~70% will be successful, ~50% will try.',
            hx: 'PObHx: what type of CS, and why? Ax for risk: BMI, age, I. for previous CS',
            ex: 'Abdo for scars',
            ix: 'FBE + coags + G&H',
            mx: 'Counsel re: ↓Ro puerperal inxn, ↓blood loss, ↓hospital stay'
		},
        {
            name: 'PPH',
            description: '4% of new mums.',
            hx: 'RFs: macrosomia / prolonged 1SL / obesity / PET / chorio / anaemia / coagulopathy',
            ex: 'Vitals',
            ix: 'FBE + G&H + coags',
            mx: '10IU synt IM, +ergot / carboprost'
		},
        {
            name: 'Heavy menstrual bleeding',
            description: 'More than 7d or ≥80mL bleed per cycle',
            hx: 'PALM COEIN, characterise severity -anaemia Sx',
            ex: 'Abdo, spec',
            ix: 'FBE + coags + US',
            mx: 'Non-hormonal: tranexamic acid / mefenamic acid; hormonal: OCP / IUD / implanon'
		},
        {
            name: 'PCOS',
            description: 'Excess immature follicle development results in disordered hormone levels; 15% of women of reproductive age (!).',
            hx: 'Hirsutism, acne, weight gain, ↓libido, oligomenorrhoea, acanthosis nigricans',
            ex: 'BMI',
            ix: 'TVUS + FSH&LH + TFTs + prolactin (extended Ax of oligomenorrhoea causes)',
            mx: 'Lifestyle, then clomiphene citrate, then metformin, +/- hormonal contraception (esp. OCP)'
		},
        {
            name: 'Menopause',
            description: 'The last menstrual period is \'the\' menopause.',
            hx: 'Mood + sleep + vaginal + vasomotor',
            ex: 'Vaginal exam',
            ix: 'Anti-mullerian hormone',
            mx: 'Topical oestrogen for AV, venlafaxine / CBT for vasomotor, HRT (oestrogen-only for women w/o uterus)'
		},
        {
            name: 'Fibroids',
            description: 'Like a mole on the uterus, and just as common - 30% of women have fibroids.',
            hx: 'HMB, dull deep abdo pain, ?hoping for pregnancy',
            ex: 'Abdo + bimanual',
            ix: 'TVUS',
            mx: 'Only if Sxatic, unless attempting conception: hysteroscopic resection (submucosal), lap myomectomy (other), hysterectomy, IUD if øeager or øcandidate for surgery'
		},
        {
            name: 'PID',
            description: 'Long-term inflammation of the pelvic organs, usually 2˚ to STI though 70% of cases go w/o identified cause.',
            hx: 'Presentation varies widely, in severity & Sx; typically bilateral pain, deep dyspareunia, PV loss',
            ex: 'Spec for discharge',
            ix: 'Clinical Dx; urine pregnancy test, CRP',
            mx: 'Mainstay is Abx - cef+met+doxy'
		},
        {
            name: 'Endometriosis',
            description: 'Extra-uterine endometrial tissue follows course of menstrual cycle and provokes inflammation',
            hx: 'Pain, deep dyspareunia, dysmenorrhoea, infertility',
            ex: 'Abdo, bimanual',
            ix: 'GS diagnostic lap',
            mx: 'Simple analgesia, hormonal contraception (pill / IUD), lap excision'
		},
        {
            name: 'Infertility',
            description: '12m of unprotected sex w/o conception.',
            hx: 'Menstrual Hx, gynae Hx, weight loss / exercise, C. psychosocial, age, tubal / uterine / cervical abnormalities, smoking',
            ex: 'TVUS',
            ix: 'Sperm sampling (40%MF), hormonal testing',
            mx: 'IVF, ICSI, clomiphene'
		},
        {
            name: 'STI',
            description: 'You\'ll only need to know the important distinguishing features, such as they are.',
            hx: 'Discharge: Ch, G, M, T (frothy); dysuria: C, G; itch: T, BV, C; bleeding: Ch, M',
            ex: 'Genital exam, spec',
            ix: 'Swab + culture / PCR',
            mx: 'Abx therapy, contact tracing, notification'
		},
        {
            name: 'Stress incontinence',
            description: 'Weak urethral sphincter leads to little dribbles',
            hx: 'Cough sneeze laugh',
            ex: 'Abdo palp, vaginal inspection + bimanual for prolapse',
            ix: 'PVR',
            mx: 'Surgical options are shit'
		},
        {
            name: 'Contraception',
            description: '4 major kinds: condom, pill, IUD, implant',
            hx: 'Sexual Hx 5Ps, C.I.s including migraine, Ca, VTE, HTN; menstrual Hx',
            ex: 'N/A',
            ix: 'N/A',
            mx: 'Offer based on pt request.'
		},
        {
            name: 'Ovarian cancer',
            description: 'The sixth most common cause of death from cancer in women.',
            hx: 'Abdominal bloating, pelvic/abdo pain, PV bleeding, weight loss, fatigue. Early OvCa causes nonspecific Sx::most cases reach Dx only at late stage.',
            ex: 'Palpable mass',
            ix: 'CA-125, β-hCG, αFP, LDH, Tv/aUS, CTAP, CXR to exclude mets',
            mx: '5-year survival: 45%, R/f to gynae oncologist, mention surgical and CTx options, f/u in one week'
		},
        {
            name: 'SGA',
            description: 'Foetus at ≤10th growth centile. Broadly, either normal and genetic, or due to IUGR.',
            hx: 'Nutrition, smoking',
            ex: 'US used for Dx, only accurate to w/in 20%',
            ix: 'BGL',
            mx: 'Endo / dietitian / GE / behaviourist r/f if growth does not catch up'
		},
        {
            name: 'LGA',
            description: 'Foetus at ≥90th growth centile. Determining this is an imprecise and inaccurate science.',
            hx: 'DM, obesity, gestation',
            ex: 'N/A',
            ix: 'US AC >35cm',
            mx: '↑Ro fetal and maternal injury at birth, shoulder dystocia, hypoglycaemia & NRDS'
		},
        {
            name: 'IUGR',
            description: 'A foetus that can\'t meet its genetic growth potential. Also known as fetal growth restriction, which is probably better.',
            hx: 'Maternal, placental or fetal? RFs: smoking, DM, ',
            ex: 'N/A',
            ix: 'US is very inaccurate, but is the best test we have; umbilical artery doppler',
            mx: '↑monitoring, ↑likelihood of IOL esp. if approaching post-term'
		},
        {
            name: 'Urge incontinence',
            description: 'The urge to urinate presents without sufficient volume to warrant it.',
            hx: 'Pelvic fullness',
            ex: 'Palp abdomen',
            ix: 'MSU, ?Flow studies',
            mx: 'Oxybutynin'
		},
        {
            name: 'Placental abruption',
            description: 'Placenta separating from the uterus causes bleeding into decidua; Resultant haematoma compresses structures nearby and partially occludes blood flow to foetus.',
            hx: 'Pain, PV loss (though the majority will be occult), DFM',
            ex: 'Vitals, tender, \'woody\' uterus',
            ix: 'CTG, AFI, FFN, amnisure, Kleihauer?, FBE + Coags + G&H',
            mx: 'Deliver iso fetal or maternal deterioration'
		},
        {
            name: 'Endometrial hyperplasia',
            description: 'A ≥5mm thickened endometrium we see every cycle, but is worrisome in postmenopausal women.',
            hx: 'PMB',
            ex: 'Spec, bedside pipelle',
            ix: 'US, HD&C',
            mx: 'Tranexamic acid / HRT / endometrial ablation / hysterectomy'
		},
        {
            name: 'Prolapse',
            description: 'Prevalence rates only exist for reported Sxatic POP - still high, at ~8% of women.',
            hx: 'Feeling a bulge, something falling out of the vagina, urinary +/- faecal incontinence',
            ex: 'Speculum exam + bimanual',
            ix: 'None',
            mx: 'Pelvic floor PT, pessary, urogynae r/f'
		},

	];


    $scope.showOgConditions = function (x) {
        $scope.info = $scope.ogconditions[x].description;
        $scope.hx = $scope.ogconditions[x].hx;
        $scope.ex = $scope.ogconditions[x].ex;
        $scope.ix = $scope.ogconditions[x].ix;
        $scope.mx = $scope.ogconditions[x].mx;
        $scope.selectedOgConditions = x;
    };


    //          OG OSCEs

    $scope.ogosce = [{
            name: 'First antenatal visit',
            description: 'Luana is 8 weeks pregnant. Take a Hx and describe your recommendations for her pregnancy.',
            structure: 'PObHx, GHx, PMHx, model of care?, Ix',
            mnemonic: 'Bloods screens vax scans -G&H, Rh, Ab -FTCS, NIPS -Rubella Syphillis HBV HCV HIV status -Growth, morph, well-being thereafter',
            questions: 'What would put Luana at more risk of preterm labour?'
		},
        {
            name: 'Assessment of fetal wellbeing',
            description: 'Arethra is 1 day old. Assess her wellbeing and describe your findings to the examiner.',
            structure: 'Movement, fetal respiration, tone, CTG, Volume (AFI Index)',
            mnemonic: 'Monitor Fetus to Confirm Viability',
            questions: 'Which findings on CTG would you consider indicative of fetal distress?'
		},
        {
            name: 'Hormonal contraception',
            description: 'Nadege, 23, has presented to your GP clinic for discussion regarding contraception. Counsel her on her options.',
            structure: 'Sexual Hx, menstrual Hx, ask about preferences, discuss options - COCP, POP, implanon, mirena',
            mnemonic: 'For each method, EAT -Explain how it works and how to take it -ADEs / side effects -Talk through pros & cons',
            questions: 'What are three contraindications for progesterone implants?'
		},
        {
            name: 'Pregnant woman with headache',
            description: 'You have been called to see Nabila, a 38yo 36wk primipara who has developed a severe headache. Take a Hx and recommend an appropriate set of Ix.',
            structure: 'Vitals, Ax Sx (visual disturbance, swelling, pain elsewhere), RFs',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Postpartum fever',
            description: 'Latika is 24hrs post-CS and has developed a fever of 38˚C. Take a Hx and recommend appropriate Mx.',
            structure: 'What type of CS, and why? (classical = highest Ro rupture)',
            mnemonic: 'Loci of infection: WWWWWW -Wind -Water -Wound -Womb -Walking -Weaning',
            questions: 'What is the most common cause of puerperal fever?'
		},
        {
            name: 'Treatment of FTP',
            description: 'Sienna, 23, is a primip in her 10th hour of labour. Her cervix has dilated to 3cm. Take a Hx and recommend appropriate Mx.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'The pill',
            description: 'Karli, 29, presents to your GP clinic requesting the pill. Take a Hx and describe your Mx plan to the examiner.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Fundus less than dates',
            description: 'You are seeing Bopha, a 30yo G3P1 who is 29 weeks pregnant. Take a short Hx and perform an obstetric abdominal examination.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Emergency contraception',
            description: 'Fatima, 21, presents to your GP clinic asking for the morning after pill. Counsel her on her options.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Pelvic pain that just never goes away',
            description: 'Akong, 29, wishes to discuss her long-standing pain issues. Take a Hx and recommend appropriate Ix.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Post-term pregnancy',
            description: 'Take a Hx, provide Mx and counsel this pregnant woman at 42 weeks gestation.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Twins',
            description: 'Jane, 32, has just discovered she is 8 weeks pregnant with twins. What advice would you like to give her?',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'PPH',
            description: 'You have been called by a midwife to see Oksana, 23, who has just given birth to twins. Mx the situation appropriately.',
            structure: '10IU synt IM +/- ergot / carboprost, ABC, vitals, fundal rub, IV access, FBE + G&H + coags, to theatre for B-Lynch suture / hysterectomy',
            mnemonic: 'Standard ObsRFs plus ChAMPP: -chorio -anaemia -macrosomia -PET -prolonged 1SL',
            questions: 'What are five major risk factors for PPH?'
		},
        {
            name: 'So much bleeding',
            description: 'Saanvi, 28, has noticed her periods are longer and produce more blood. Take a Hx and recommend appropriate Mx.',
            structure: '',
            mnemonic: 'PALM COEIN',
            questions: ''
		},
        {
            name: 'Postnatal depression',
            description: 'Ilona is a 31yo lady who two weeks prior gave birth to her second child. She presents now hoping to discuss her sleep patterns. Take a Hx and recommend an appropriate Mx plan.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Blood sugar',
            description: 'You are seeing Diana, 31, in Maternal Fetal Medicine clinic in order to discuss the medical complications to her pregnancy. Discuss her results and recommend appropriate Mx.',
            structure: '',
            mnemonic: 'Pre-pregnancy DM confers ↑Ro PET, polyhydramnios, infection (UTI / chorio)',
            questions: ''
		},
        {
            name: 'Early bleeding in pregnancy',
            description: 'Mariana, 26, is 20 weeks pregnant with her first child. She presents to the ED having found blood in her underwear. Take a Hx and recommend appropriate Mx.',
            structure: '',
            mnemonic: '',
            questions: ''
		},

	];


    $scope.showOgOsces = function (x) {
        $scope.osceinfo = $scope.ogosce[x].description;
        $scope.structure = $scope.ogosce[x].structure;
        $scope.mnemonic = $scope.ogosce[x].mnemonic;
        $scope.questions = $scope.ogosce[x].questions;
        $scope.selectedOgOsces = x;
    };


    //     CAH

    //          CAH Core Conditions

    $scope.cahconditions = [{
            name: 'Normal growth and feeding',
            description: 'Normal growth is pulsatile and seasonal.',
            hx: 'Breastfeeding (gain weight rapidly during first 4m, slower thereafter); rate of growth (30g/d until 3m, 20g/d until 6m; one-half of adult height by 24-30m)',
            ex: 'Correlation btw length & adult height 0.25 at birth, 0.8 at 2yo; proportionality useful in Dx of obesity',
            ix: 'WHO growth chart',
            mx: 'Avoid unnecessary intervention with accurate growth charting.'
		},
        {
            name: 'Normal development including puberty',
            description: 'Between 2 years and puberty, normal is +2kg per year.',
            hx: 'Birth measurements, obstetric Hx, dietary Hx, PMHx',
            ex: 'Height + weight + head circumference, yearly BP',
            ix: 'BRIGANZ testing',
            mx: 'MCHN, r/f as required: ST, SW, PT'
		},
        {
            name: 'Immunisation',
            description: 'Birth: Hep B; 6wk, 4m + 6m: Hep B, dTPa, Hib, IPV, rota, 13vPCV; 12mo: MMR, Hib, Men-C; ~13yo: HPV, dTP; Hep A for indigenous kids.',
            hx: 'Are IUTD?',
            ex: 'N/A',
            ix: 'Serology',
            mx: 'Recommend UTD'
		},
        {
            name: 'Continence',
            description: 'Urinary incontinence persists in ~15% of 5yo children, most of which is isolated nocturnal enuresis.',
            hx: 'Characterise severity, fluid intake, daytime or nocturnal',
            ex: 'Inspect genitalia, Vincent\'s curtsy',
            ix: 'MSU',
            mx: 'Discuss toilet training at every opportunity >12mo (readiness based on milestones r/t age, however)'
		},
        {
            name: 'Newborn check',
            description: 'APGAR → growth status → top to toe examination incl. fontanelles, brachial pulses, auscultation of chest, scrotal palp if applicable → check back → primitive reflexes → document',
            hx: 'Review ObHx',
            ex: 'Average length at birth for term infant: 50cm; head circumference: 35cm; chest ~2cm less than this; remember leg click checks',
            ix: 'If abnormalities are present',
            mx: 'As above'
		},
        {
            name: 'Developmental dysplasia of the hip',
            description: 'A spectrum of conditions resulting from hip joint malformation.',
            hx: 'RFs: breech at ≥34wks, FHx of same',
            ex: 'Hip exam at every visit: abduction + elevation for reducibility, gentle adduction for dislocatability',
            ix: 'US during first 4m',
            mx: 'r/f to orthopedic surgeon'
		},
        {
            name: 'Sleep',
            description: 'One example of how it is different in kids: rhythmic movement of the head / neck / trunk during sleep is common and physiological.',
            hx: 'Sleep Hx -cycle elucidation - difficulty initiating or maintaining -daytime problems -snoring -abnormal movements during sleep',
            ex: 'Epworth Sleepiness Scale',
            ix: 'Polysomnography to confirm OSA / narcolepsy, not for general Ix',
            mx: 'Often behavioural ∴ psych r/f'
		},
        {
            name: 'Sepsis',
            description: 'Just Ask: \'Could It Be Sepsis\'?',
            hx: 'Infective Sx',
            ex: 'Vitals (C. prone to confounding), BP (hypotension in late stage), CRT, skin check',
            ix: 'BCs + VBG + BGL + FBE + CRP; Clinician judgment the best tool for Dx',
            mx: 'O2, early Abx, careful fluid resusc +/- interval vasopressors / inotropes'
		},
        {
            name: 'Anaphylaxis',
            description: 'Can occur in absence of skin Sx',
            hx: 'Allergies, atopy, recent Hx bites or stings',
            ex: 'Vitals, CRT',
            ix: 'R/f allergist',
            mx: 'Adrenaline / Epipen; do not allow pt to stand or walk; ABCs; attempt to identify RFs for fatal anaphylaxis'
		},
        {
            name: 'Diabetic ketoacidosis',
            description: 'Hypoglycaemia, ketonaemia and metabolic acidosis.',
            hx: 'Ax degree of dehydration, conscious state',
            ex: 'CRT',
            ix: 'FBE + UEC + VBG + BGL + urinalysis + ketones',
            mx: 'Admx insulin + glucose + potassium'
		},
        {
            name: 'Meningitis',
            description: 'What we worry about most in paediatric infection. Beware the SBI.',
            hx: 'Non-specific Sx: irritability, lethargy, N/V, seizures',
            ex: 'Fever, purpura, weight & head circumference, fontanelle must be full for Dx to be made',
            ix: 'LP + FBE + BGL + UEC + BCs',
            mx: 'Cefotaxime +/- Benpen, acyclovir if susp. encephalitis, treat seizures immediately w/ benzos.'
		},
        {
            name: 'Congenital heart disease',
            description: 'There are so many, and their presentations are so varied, that a true appreciation of this topic requires at the very least paediatric training.',
            hx: 'FHx',
            ex: 'Vitals esp. O2 sat',
            ix: 'Most identified on antenatal US',
            mx: 'Supportive care for perfusion & oxygenation'
		},
        {
            name: 'Brief Resolved Unexplained Event (formerly ALTE)',
            description: 'A marked change in breathing, tone, colour or conscious state, followed by complete return to a baseline state, only in <12mo.',
            hx: 'Characterise event, usu 20-30s, enquire about broad range of causes; the older the child the lower the risk',
            ex: 'Complete',
            ix: 'Low-risk: none',
            mx: 'If pt requires ongoing acute treatment → øBRUE'
		},
        {
            name: 'Febrile seizure',
            description: 'Usually iso systemic viral or bacterial infxn, occurs in ~3% of children esp. 12-18mo',
            hx: 'Generally tonic-clonic. Simple if <15min w/ no neuro signs',
            ex: '>38ºC',
            ix: 'LP only I. if meningitis or intracranial pathology suspected',
            mx: 'Expectant; IV benzos if >5min'
		},
        {
            name: 'Epilepsy',
            description: '5% of children have a seizure; 1% of these are epileptic.',
            hx: 'Characterise seizure -when, where, why; Hx of other odd behavioural events; FHx + DHx',
            ex: 'Neuro + CN',
            ix: 'EEG',
            mx: 'Acute: IV benzos; Long-term: anticonvulsants'
		},
        {
            name: 'Non-specific headache',
            description: 'Most common causes are febrile illness, tension and migraine.',
            hx: 'Characterise pain; presence / absence of AFs: N/V, photo/phonophobia, concomitant infective illness; always enquire about recent injury',
            ex: 'CN, HEADSS',
            ix: 'LP / MRI onli if I.',
            mx: 'Paracetamol 15mg/kg PO, add ibuprofen + prochlorperazine if migraine <12yo, GP f/u'
		},
        {
            name: 'Raised ICP',
            description: 'Most often a complication of TBI',
            hx: 'Severe headache, vomiting',
            ex: 'HTN, papilloedema, ↓GCS',
            ix: 'Imaging',
            mx: 'ABCD'
		},
        {
            name: 'Bacteraemia',
            description: 'Bacteria in the blood.',
            hx: 'Sepsis screen',
            ex: 'BP, JVP',
            ix: 'BCs every 24hrs',
            mx: 'Antipyretics, fluid resusc, vasopressors, resp support; Abx cefazolin /  vanc if MRSA'
		},
        {
            name: 'Pneumonia',
            description: 'Aim for minimal handling in children with respiratory distress.',
            hx: 'Cough, distress, conscious state',
            ex: 'Appearance, fever, ↓O2, WOB, Sx of resp distress (subcostal / substernal / intercostal retraction, head bobbing, nasal flaring, grunting, tachypnoea)',
            ix: 'Only if severe and requiring admx: BCs + CXR + FBE + CRP',
            mx: 'Early Abx (oral in majority of cases, IV only if not tolerating), careful fluid resusc. D/c when tolerating oral intake + O2 adequate'
		},
        {
            name: 'Cellulitis',
            description: 'The most common causes are GAS (pyogenes) and staph aureus. However, skin infection is a broad church.',
            hx: 'C. predisposing factors: abrasion, laceration, eczema etc.; øitch ',
            ex: '?impetigo / SSSS / contact dermatitis / erysipelas / necfasc',
            ix: 'Swab if discharge present, FBE + BCs if systemic, US if fluctuant',
            mx: 'Fluclox'
		},
        {
            name: 'Urinary tract infection',
            description: 'The majority are uncomplicated w/o long-term sequelae.',
            hx: 'Infant: irritability, poor feeding; Child: abdo pain, back pain, dysuria, new incontinence',
            ex: 'Fever, unwell appearance, costovertebral angle tenderness',
            ix: 'C. RBUS in <2yo',
            mx: 'Usually OP, C.I. for hospital admx (<2mo, vomiting, urosepsis); Ceph +/- amoxi, if no improvement w/in 48hrs, extend coverage'
		},
        {
            name: 'Septic arthritis/osteomyelitis',
            description: 'Jordan, seen in ED, surely didn\'t have osteomyelitis, right?',
            hx: 'Considerable overlap between the two. ?onset of limp, localised pain',
            ex: 'Tenderness to palp.n, fever',
            ix: 'FBE + ESR + BCs + Xray affected area + bone scan',
            mx: 'R/f orthopaedics for aspiration +/- arthrotomy + washout'
		},
        {
            name: 'Otitis media (acute)',
            description: '~75% of children will get it by age 5.',
            hx: 'Acute onset pain',
            ex: 'Middle ear inflmxn + effusion',
            ix: 'None',
            mx: 'Avoid Abx, simple analgesia +/- topical lignocaine'
		},
        {
            name: 'Bronchiolitis',
            description: 'Most common cause of wheeze in infants.',
            hx: 'Generally C.d to affect <12mo, in older children Dx is pneumonitis. RFs: smoking in house',
            ex: 'Sx of URTI + resp distress + fever',
            ix: 'Clinical Dx',
            mx: 'Comfort feeds to settle, supportive O2, reassurance, natural Hx 7-10d'
		},
        {
            name: 'Croup',
            description: 'Aka viral laryngotracheobronchitis, most commonly caused by parainfluenza. It only appears in kids b/c adults have wider airways.',
            hx: 'Barking cough, hoarseness',
            ex: 'Inspiratory stridor',
            ix: 'None',
            mx: 'Mild: self-limited 3-5 day course, steam inhalation, analgesia; Severe: single dose oral dexa + norad nebs, IV fluids, monitoring'
		},
        {
            name: 'Pertussis',
            description: 'Aka whooping cough. Highly contagious.',
            hx: 'Chronic cough',
            ex: 'Inspiratory whoop',
            ix: 'Nasopharyngeal culture / PCR if ≤4wks duration; Serology if >4wks duration',
            mx: 'Abx øreduce Sx course but ✓limit spread; stay at home.'
		},
        {
            name: 'GI foreign body',
            description: '>6m and <3yo is the danger zone.',
            hx: 'Object, Sx',
            ex: 'Inspect neck: swelling / erythema / crepitus I. immediate surg r/f (perf oesophagus); resp exam',
            ix: 'Neck, chest & abdo AP & L Xray',
            mx: 'Depends on object: blunt objects will often pass e.g. $2 coin, G-scope for all else'
		},
        {
            name: 'Cystic fibrosis',
            description: 'Defective transporters cause ↑intracellular Cl, resulting in thick dry airway mucus and ↑susceptibility to infection. The most common life-threatening genetic disorder in Caucasians.',
            hx: 'FHx',
            ex: 'C. meconium ileus',
            ix: 'Newborn screening test (heel prick immediately after birth), sweat test',
            mx: 'Chest physio, regular Abx, high-kJ foods (↓pancreas fxn → ↑requirement), exercise, CF clinic'
		},
        {
            name: 'Viral rashes (aka exanthems)',
            description: 'VZV / measles / rubella / roseola (herpes) / parvo; meningococcaemia must be ruled out.',
            hx: '?non-blanching, petechiae',
            ex: 'Thorough skin check',
            ix: 'None except swab if vesicles present',
            mx: 'Topical antihistamine, reassurance'
		},
        {
            name: 'Urticaria',
            description: 'aka hives: skin response to histamine. Prevalence at 20%',
            hx: 'Ax severity, triggers; if a/w systemic disorder will be recurrent + persistent + difficult to treat',
            ex: 'Full skin check, vitals',
            ix: 'Allergic testing and other labs only if Sx persist',
            mx: 'R/f allergist, oral H1a (cetirizine - zyrtec / loratidine - claritin) + H2a if severe (ranitidine - zantac) +/- oral CS'
		},
        {
            name: 'Intussusception',
            description: 'Invagination of proximal into distal bowel.',
            hx: 'Pain, vomiting, lethargy, red-currant jelly stool',
            ex: 'Pallor, palpable mass',
            ix: 'US - target sign; AXR - absence of gas around cecum',
            mx: 'Simple: air enema reduction; Complicated: laparotomy'
		},
        {
            name: 'Functional abdominal pain',
            description: 'The most common cause of chronic abdo pain in children and adolescents.',
            hx: '≥2m abdo pain, øred flags (weight loss / dysphagia / severe diarrhoea), HEADSS',
            ex: 'Ax growth chart for interruption',
            ix: 'FOBT',
            mx: 'Rehab approach r/t elimination of pain'
		},
        {
            name: 'Constipation',
            description: '95% is functional.',
            hx: 'Characterise stool, for Dx of FC 2 of: -↓stool freq -hard stool -encopresis -deliberate stool retention; Enquire re avoidance',
            ex: 'Inspection: abdo for distension + palp, anus, check tone',
            ix: 'Depends on DDx',
            mx: '↑fibre +/- osmotic laxative (lactulose) / stool softener (coloxyl drops) in children, infrequent glycerin supp. in infants'
		},
        {
            name: 'Diarrhoea',
            description: 'Norovirus has now overtaken rotavirus as the #1 cause.',
            hx: 'any ∆stool pattern worrisome, esp w/ ill appearance / blood or mucus in stool / dehydration; urine output, last weight',
            ex: 'Weight, CRT, vitals, GI exam ?palpable mass ?tender to palp.n, mucus membranes',
            ix: 'None unless known exposure to causative bacteria',
            mx: 'Volume resusc'
		},
        {
            name: 'Cows milk protein intolerance',
            description: 'More common than peanuts but less likely to be anaphylactic.',
            hx: 'Sx of intolerance - blood in stool, weight loss; Ca intake',
            ex: 'Abdo exam',
            ix: 'FBE + UEC + LFTs + urine MCS + stool sampling + ESR',
            mx: 'Admx, stop formula, give AA formula, close f/u'
		},
        {
            name: 'Failure to thrive',
            description: 'The growth chart is not the disease.',
            hx: 'Possible causes -↓intake -malabsorption -↑requirements; Quantify intake and output;',
            ex: 'Normal low weight children don\'t look ill. FTT children have -sparse hair -wasted appearance (esp. gluten & thighs) -abdo protuberance -ricketic features; Observe child-parent interaction',
            ix: 'FBE + film + urine MCS + UEC + CMP + LFTs w/ albumin + protein + ESR + stool sampling + vit D',
            mx: 'Admx for weight gain'
		}, {
            name: 'Leukaemia',
            description: 'ALL ~85%, AML ~15%.',
            hx: 'Fever, malaise, MSK pain, bleeding, ↑infections',
            ex: 'Lymphadenopathy, hepatosplenomegaly',
            ix: 'FBE + blood film + special WC tests',
            mx: 'R/f paediatric Ca centre'
		},
        {
            name: 'Slipped upper femoral epiphysis',
            description: 'Slips near the time of peak linear growth (F:12, M:13.5), especially in the obese child.',
            hx: 'Pain w/o identifiable cause, worse on WB',
            ex: 'Altered gait',
            ix: 'Xray',
            mx: 'Avoid WB until surgery. Educate re: 45% Ro same in contralateral hip'
		},
        {
            name: 'Juvenile arthritis',
            description: 'An extensive and poorly elucidated range of causes make this a diagnosis of confusion.',
            hx: 'Intermittent fever, joint pain',
            ex: 'Evanescent rash',
            ix: 'No definitive tests exist, thus clinical Dx',
            mx: 'Varies; physio'
		},
        {
            name: 'Autism',
            description: 'Four times more common in males.',
            hx: 'Main difficulties are in two main areas: 1. social interaction, 2. restricted or repetitive behaviours / interests / activities',
            ex: 'Observe stereotypical behaviours',
            ix: 'Can recommend genetic testing + counselling',
            mx: 'R/f paed / psych / speech input; Amaze.org.au website; address psych comorbidities'
		},
        {
            name: 'ADD / ADHD',
            description: 'Remember that all kids have these qualities - do not include in DDx if child is <2yo.',
            hx: '3 main Sx: inattention, impulsivity & overactivity. These can manifest in many different ways',
            ex: 'A good chance to Ax level of attention & activity',
            ix: 'N/A',
            mx: 'Educate re +ve parenting strategies'
		},
        {
            name: 'Oppositional Defiant Disorder',
            description: 'Critical to intervene and treat early. Antecedent to CD.',
            hx: 'Constant disobedience, hostility, ↓self-esteem, ↓frustration threshold',
            ex: 'Unnecessary, and the child may refuse',
            ix: 'N/A',
            mx: 'R/f child psychologist / paed specialising in BD; parental training, family therapy'
		},
        {
            name: 'Sudden Infant Death Syndrome',
            description: 'The leading cause of infant mortality in the West, 90% <6mo. The mechanism is thought to involve failure of serotonin signaling.',
            hx: 'RFs include maternal smoking, prematurity, prone sleeping position',
            ex: 'N/A',
            ix: 'N/A',
            mx: 'Infant bedding should be w/o blanket, pillow, toy or excess clothing. Co-sleeping not recommended, and monitors have shown no benefit.'
		},
        {
            name: 'Torsion of testis / Hydatid of Morgagni',
            description: 'The former is much more serious.',
            hx: 'Pain+++ for ToT',
            ex: 'Palpate testes',
            ix: 'ØUS',
            mx: 'The latter is self-limited, so surgery is elective; former = emergent surgery'
		},
        {
            name: 'Epididymoorchitis',
            description: 'Most common cause is gonorrhoea in adults, can be mumps',
            hx: 'Usu unilateral swellin induration + pain in epididymis, dysuria',
            ex: 'Palpate scrotum, transilluminate, valsalva maneuvre',
            ix: 'Urinalysis, urine MCS, US w/ doppler, scrotal exploration if Dx of testicular torsion cannot be ruled out',
            mx: 'Supportive care + Abx'
		},
        {
            name: 'Undescended testis',
            description: 'Normal transinguinal migration of the testis is thought to occur between 28-40wks gestation.',
            hx: 'Birth weight & gestation; FHx of same;',
            ex: '20% are unpalpable',
            ix: 'Unilateral w/o hypospadia: no further Ix; bilateral or w/ hypospadia: Ix for intersexuality, hormone testing',
            mx: 'Orchidopexy, recommended at 6-12m'
		},
        {
            name: 'Hypospadias',
            description: 'Abnormal position of the urethral opening a/w abnormal foreskin & penile curve.',
            hx: 'OEx',
            ex: 'Scrotal exam',
            ix: 'N/A',
            mx: 'Observation or surgical correction'
		},
        {
            name: 'Phimosis',
            description: 'Where the foreskin is too tight to retract over the glans.',
            hx: 'Pain',
            ex: 'Glans erythema + swelling',
            ix: 'N/A',
            mx: 'Topical CS, if no improvement circumcision'
		},
        {
            name: 'UTI',
            description: 'E. coli is the most common cause in kids.',
            hx: 'Duration of fever, ∆conscious state',
            ex: 'Vague clinical signs; fever, vomiting w/o diarrhoea = UTI',
            ix: 'Clean catch / suprapubic',
            mx: 'Oral co-trimoxazole / IV genta+benpen (always look up guidelines to match to weight accurately)'
		},
        {
            name: 'Hydrocele / Varicocele',
            description: 'Swelling of testes due to -intraperitoneal fluid / -venous engorgement',
            hx: 'øPain',
            ex: 'Attempt to empty: if empties quickly => hernia w/ omental fat; transillumination; palpate testis',
            ix: 'Clinical Dx',
            mx: 'Hydrocele usually resolves naturally, only operate if no resolution after 2 years'
		},
        {
            name: 'Henloch-Schonlein Purpura',
            description: 'The most common systemic vasculitis of childhood; we don\'t know what causes it.',
            hx: 'Arthralgia +/- arthritis, abdo pain',
            ex: 'Palpable purpura',
            ix: 'FBE + coags',
            mx: 'Abdo US'
		},
        {
            name: 'Gastroenteritis',
            description: 'Bugs in the gut cause chaos for kids.',
            hx: 'Duration, output, most recent weight, vomiting, it isn\'t gastro if there\'s no diarrhoea',
            ex: 'Signs of dehydration / hypovolaemic shock',
            ix: 'If you place a cannula, take bloods: UEC + BGL',
            mx: 'Rehydration: trial of oral → NG RR according to RCH → IV NS+5%D; weigh, monitor input + output'
		},
        {
            name: 'Infant colic',
            description: 'A Dx of exclusion',
            hx: 'Normal crying: 1-2hrs/d',
            ex: 'Complete',
            ix: 'N/A',
            mx: 'Spont. resolution in 90% by 8wks; parental support; rubbing abdomen, white noise'
		},
	];


    $scope.showCahConditions = function (x) {
        $scope.info = $scope.cahconditions[x].description;
        $scope.hx = $scope.cahconditions[x].hx;
        $scope.ex = $scope.cahconditions[x].ex;
        $scope.ix = $scope.cahconditions[x].ix;
        $scope.mx = $scope.cahconditions[x].mx;
        $scope.selectedCahConditions = x;
    };


    //          CAH OSCEs


    $scope.cahosce = [{
            name: 'General principles',
            description: 'Neonate <28d, Infant <1y, Toddler <3y, Pre-schooler <5y, School age <12y, Adolescent >12y',
            structure: 'HoPC - PHx - growth, diet - development - behaviour - FHx / SHx - Rx - allergies',
            mnemonic: 'The three questions for every paed case: 1. Are they well or unwell? 2. Is their growth appropriate for their age? 3. Is their behaviour / development appropriate for their age?',
            questions: 'What developmental milestones would you expect a 6mo child to have achieved?'
		},
        {
            name: 'The well child visit',
            description: 'Kostya is a 2yo child presenting to your GP clinic with his parents for a general checkup. Take a Hx and discuss with the examiner your findings.',
            structure: 'Parent perception',
            mnemonic: 'BFGD -Birth -Feeding -Growth -Development',
            questions: 'What are two developmental milestones you would expect this child to have achieved by 9 months of age?'
		},
        {
            name: 'Neurodevelopment examination',
            description: 'Yolanda, age 6, has been brought in to see you by her father, who is concerned about her speech. Take a Hx and recommend an appropriate Mx plan.',
            structure: 'Neuro exam + development testing (Denver / ?BRIGANZ)',
            mnemonic: 'On Hx: SSTFWT -Smiling 6wks -Sitting 9m -Turning to sound 6m -First words 18m -Walking 18m -Talking 3 word sentences by 3y',
            questions: 'What are two causes of transient developmental regression?'
		},
        {
            name: 'The seriously unwell child',
            description: 'You are seeing Nam, age 3 months, in ED. She is tachycardic, febrile and short of breath. Mx her condition and recommend appropriate Ix.',
            structure: 'Feeding, colour, CRT; top-to-toe examination',
            mnemonic: 'Serious causes we need to be careful of PUMA -Pneumonia -UTI -Meningitis -Acute abdomen',
            questions: 'Which conditions do you think were most important to rule out in this child?'
		},
        {
            name: 'The child with seizures',
            description: 'Mai, age 10, has been admitted to the paediatric ward for observation following a seizure in ED. Take a Hx from Mai\'s father and recommend initial Ix.',
            structure: 'In most cases, supportive treatment is all that is necessary.',
            mnemonic: 'ABCB >10mins AT -Airway -Breathing -Circulation -BSL -if seizure lasts >10min, Active Treatment',
            questions: 'What are the three most common reasons for seizure in a young child?'
		},
        {
            name: 'Newborn exam',
            description: 'Grunting = inbuilt PEEP',
            structure: 'Undress, inspection, vitals, measurements, then head to tail: fontanelles, ?murmur (good to pick up early), chest, abdo, anus, GU',
            mnemonic: 'The whole body',
            questions: 'What might be a cause for low oxygen saturation in this child?'
		},
        {
            name: 'The child with headache',
            description: 'Fai, age 5, stayed home from school today because of a severe headache. Take a Hx from Fai\'s mother and recommend appropriate Mx.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'The child with cough',
            description: '~40% is PBB (protracted bacterial bronchitis)',
            structure: 'Nature of cough crucial; ?Underlying cause: CF / PCD / immunodef. / foreign body / TB',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'The child with rash',
            description: 'Anna, age 1, has been brought in by her father who is concerned about a rash that has developed on her lower limbs. Inspect the rash, take a thorough Hx from Anna\'s father, and recommend appropriate initial Mx.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Breath holding spells',
            description: '~25% of children who breath hold do so multiple times per day.',
            structure: 'Characterise spells; ?post-ictal confusion; reassure & encourage parent to treat as normal',
            mnemonic: '',
            questions: 'What is the likelihood of this child holding its breath in order to have its way?'
		},
        {
            name: 'Abdo & inguinoscrotal examination',
            description: 'The mother of Jiminy Crick, age 2, presents concerned about his development. Take a developmental history.',
            structure: 'Distraction while palp.ing helps to differentiate vol. from invol. guarding; Percussion useful in detecting peritonism.',
            mnemonic: 'Pinpoint, Palp, Percuss, Shine a light',
            questions: 'What would you expect to find in a child with septic appendicitis?'
		},
        {
            name: 'Asthma',
            description: 'Billy, age 10, is struggling with his asthma. What Mx strategies could you offer to improve control of his condition?',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Developmental assessment',
            description: 'Do you have any concerns about your child\'s development?',
            structure: 'Feeding (intake, solids); Birth (weight, gestation, complications); Measure length, weight, head circumference;',
            mnemonic: 'Language, motor, social, smarts.',
            questions: 'How would you expect your findings to differ in a 5-year old child?'
		},
        {
            name: 'GI examination',
            description: 'Lily has been diagnosed with a urinary tract infection. Please perform a full gastrointestinal examination, and present your findings to the examiner.',
            structure: 'Rapport; Inspection; GDB; Vitals; Fluid charts; Hydration status; Palpate tummy carefully; ?percuss, ?liver&spleen (these are not mentioned in the official CAH guide)',
            mnemonic: 'GI and hydration go hand in hand.',
            questions: ''
		},
        {
            name: 'Anxiety',
            description: 'Joanne is concerned that her daughter Sonia, age 10, is experiencing breathing difficulties at home. She has sent Sonia alone to your GP clinic. Take a thorough Hx and recommend appropriate Mx.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'The child with fever',
            description: '2yo Sanne has had a fever for three days, and this day has displayed some alteration in her conscious state. Take a Hx from her father and develop a Mx plan.',
            structure: 'Any child w/ fever w/o focus should get urine MCS, BCs & LP',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'ENT examination',
            description: '3yo Khalid has had a fever for the last two days. Perform a thorough ENT examination & recommend appropriate management.',
            structure: 'Introduce, ++inspection, order ENT (then neck for cervical lymphadenopathy)',
            mnemonic: '',
            questions: 'Describe the treatment & complications of ASOM in children.'
		},
        {
            name: 'Neonatal jaundice',
            description: 'Phuong, age 2 days, has severe jaundice. Explain to her mother the causes of neonatal jaundice, and the expected treatment course.',
            structure: '',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Cardiac examination',
            description: 'Selamat is concerned that her 2yo boy Kamil is not growing normally. Take a short Hx and perform a cardiac examination.',
            structure: 'Major differences from adult CVE: ++inspection, growth, femoral +/- brachial pulse; Adapt according to comfort / anxiety of child',
            mnemonic: 'Look, palpate, auscultate',
            questions: 'What in this examination would make you concerned about failure to thrive?'
		},
        {
            name: 'Wrist fracture',
            description: 'Frank, age 5, presents to ED with a broken wrist from falling out of a tree. Perform an appropriate examination and describe your Mx plan to the examiner.',
            structure: 'Take Hx, perform pre-op Ax',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'Respiratory examination',
            description: 'Jelena, age 2, has been brought in to ED by her mother, who is concerned that she is unwell. Take a short Hx and perform an appropriate examination.',
            structure: '+Abdo palp.n, ENT',
            mnemonic: '',
            questions: ''
		},
        {
            name: 'The child with a limp',
            description: 'Terence, age 10, has developed a limp over the last 2 days. Take a Hx and explain your Mx plan.',
            structure: 'Systems review, ?recent illness, Xray, bloods if fever',
            mnemonic: 'Transient synovitis, neoplastic night, awareness of abuse,',
            questions: 'What is the most common cause of limp in adolescents?'
		},
	];


    $scope.showCahOsces = function (x) {
        $scope.osceinfo = $scope.cahosce[x].description;
        $scope.structure = $scope.cahosce[x].structure;
        $scope.mnemonic = $scope.cahosce[x].mnemonic;
        $scope.questions = $scope.cahosce[x].questions;
        $scope.selectedCahOsces = x;
    };


});



app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/ACConditions", {
            templateUrl: "./rotation/ac/acconditions.html"
        })
        .when("/ACOSCEs", {
            templateUrl: "./rotation/ac/acosce.html"
        })
        .when("/GPConditions", {
            templateUrl: "./rotation/gp/gpconditions.html"
        })
        .when("/GPOSCEs", {
            templateUrl: "./rotation/gp/gposce.html"
        })
        .when("/MHConditions", {
            templateUrl: "./rotation/mh/mhconditions.html"
        })
        .when("/MHOSCEs", {
            templateUrl: "./rotation/mh/mhosce.html"
        })
        .when("/OGConditions", {
            templateUrl: "./rotation/og/ogconditions.html"
        })
        .when("/OGOSCEs", {
            templateUrl: "./rotation/og/ogosce.html"
        })
        .when("/CAHConditions", {
            templateUrl: "./rotation/cah/cahconditions.html"
        })
        .when("/CAHOSCEs", {
            templateUrl: "./rotation/cah/cahosce.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

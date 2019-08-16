import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public images = ["Group2_1.png","Group2_2.png","Group2_3.png","Group2_4.png","Group2_5.png",
                    "Group2_6.png","Group2_7.png","Group2_8.png","Group2_9.png","Group2_10.png"
                  ]

  public titles = ["KYC (Pol & Biometrics)","ENESA",
                    "SSI Extraction","Vendor On-Boarding and Helpdesk",
                    "KPI Dashboard","Employee Helpdesk",
                    "Customized Alert","Invoice & PO Processing",
                    "Contract Digitization","Employee Satisfaction Survey"
                  ]
  public KYC = `KYC digitization solution reliably extracts information
  from scanned PoI documents, and also has the capability 
  to match biometrics.`;

  public ENESA =`EY's NLP enabled support automation (ENESA) is a configurable
  solution for automated email classification, routing, and 
  straight through processing of queries.`;

  public SSI_Extraction =`EY’s customizable solution which can extract tabular information
  efficiently from different document formats.`;

  public VendorOn_Boarding  =`EY’s vendor onboarding and helpdesk bot helps the vendors receive
  quick support and immediate responses to their queries on Kaizala.`;

  public KPI_Dashboard  =`KPI dashboarding solution provides employees with instant access
  to their KPIs and dashboards on the Kaizala app.`;

  public Employee_Helpdesk  =`Using EY’s employee helpdesk solution, the employees get
  immediate responses to their queries on Kaizala app.`;

  public Customized_Alert  =`The customized alert bot helps to send instant alerts to 
  the employee’s phone on Kaizala`;

  public Invoice =`EY has developed a customized end-to-end automated solution to
  process invoice and purchase order documents.`;

  public ContractDigitization  =`EY’s contract digitization solutions extracts NER and required
  clauses across unstructured contract documents`;

  public Survey =`EY’s employee satisfaction survey on Kaizala provides a single 
  platform to roll out the survey, engage employees and receive their responses.`;

  ngOnInit() {
  }

}

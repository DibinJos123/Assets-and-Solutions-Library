import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnChanges {

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
  public KYC = `EY’s KYC digitization solution reliably extracts information from scanned images 
  of proof of identity (PoI) documents such as passport, PAN, national ID cards etc. with minimal 
  training effort. The solution also enables quality and compliance testing along with comparison 
  using biometric data. `;

  public ENESA =`Many functions within any organization such as customer support, help desks etc. 
  have to deal with user generated queries. These queries are received via multiple channels such 
  as Email, Web, Phone, Chat etc. Due to the unstructured nature of the data, the queries require 
  human agents for resolution, thus making it a very costly and time consuming process.
  ENESA is a unique solution build by EY which uses Natural Language Processing (NLP) to interpret 
  the query, which is then automatically classified, tagged and allocated in a BPM/Ticketing system. 
  ENESA sends acknowledgement, filters spam and auto resolves cases that doesn’t require human judgement.`;

  public SSI_Extraction =`Across organizations there are various documents containing tabular data 
  in different unstructured formats coming from different sources which require human intervention 
  for standardization and further processing. EY has built a customisable solution which can be 
  leveraged to extract tabular information efficiently from different document formats automatically 
  henceforth reducing processing time and saving manual effort.`;

  public VendorOn_Boarding  =`Vendor management is a major task in most of the organizations. 
  EY’s vendor onboarding and helpdesk bot helps the vendors receive quick support and immediate 
  responses to their queries during onboarding and afterwards directly on Kaizala. It helps save 
  time and makes the process smooth in terms of the vendor experience.`;

  public KPI_Dashboard  =`Employees in any team of an organization have to access multiple systems or 
  reach out to various teams to gather insight into their KPIs and achievements. EY’s KPI dashboarding 
  solution provides instant access to the team to their KPIs and dashboards on the Kaizala app. Management 
  dashboards may also be viewed directly on the app, restricting user access as per requirement.`;

  public Employee_Helpdesk  =`Quick answers for all employee queries on the go – using EY’s employee 
  helpdesk solution, the employees get immediate responses to their queries on Kaizala app.`;

  public Customized_Alert  =`Have periodic updates that need to be sent out to your team? Using EY’s 
  customized alert bot, such updates can be automatically sent to the employees on Kaizala. It has 
  the capability to schedule alerts, define the recipients and also capture employee’s response on 
  it for further action or review.`;

  public Invoice =`Accounts payable/receivable departments of different organizations receive purchase 
  orders and invoices from multiple vendors. Relevant data is extracted from these documents and fed 
  into the ERP systems. EY has developed a customized solution involving digitization tools and RPA to 
  process these documents and enter the details in the ERP systems thus reducing manual effort, processing 
  time, error and increasing efficiency.`;

  public ContractDigitization  =`Every organization manages contracts such as service agreements, lease, SOW etc. 
  A qualified legal team is required to understand and manage these contracts. EY has build this solution which 
  helps to extract most commonly used information from the contracts automatically thereby significantly reducing 
  the cost and improving efficiency.`;

  public Survey =`HR in any organization usually float surveys to employees through various channels like mail, 
  forms etc. EY’s employee satisfaction survey solution on Kaizala provides a single platform to roll out the 
  survey, engage employees, receive their responses, and provide relevant insights over it using any BI tool. `;

  ngOnInit() {
  }

  group1ClickInfo: any;
  group2ClickInfo: any;

  getClickInfo(Value) {
    console.log(Value)
    this.group1ClickInfo = Value.Group1;
    this.group2ClickInfo = Value.Group2
    console.log(this.group1ClickInfo, this.group2ClickInfo)
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}

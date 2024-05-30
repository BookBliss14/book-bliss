import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    FeedbackComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }

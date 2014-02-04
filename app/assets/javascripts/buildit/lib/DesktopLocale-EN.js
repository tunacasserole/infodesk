Ext.define("Buildit.i18n.model.Attachment",{statics:{modelLabel:"Attachment",attachment_id:"Attachment",attachable_type:"Attachable Type",attachable_id:"Attachable",content_id:"Content",file_name:"File Name",mime_type:"Mime Type",byte_size:"Byte Size",locale:"Locale",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.Note",{statics:{modelLabel:"Note",note_id:"Note",notable_type:"Related Type",notable_id:"Notable",detail:"Detail",category:"Category",is_internal:"Internal?",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.Role",{statics:{modelLabel:"Model",role_id:"Role",role_code:"Role Code",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.User",{statics:{modelLabel:"Model",user_id:"User",email_address:"Email Address",first_name:"First Name",last_name:"Last Name",secret_question:"Secret Question",secret_answer:"Secret Answer",secret_password:"Secret Password",user_name:"Username",user_cn:"Login",encrypted_password:"Encrypted Password",sso_plugin_code:"SSO Plugin Code",api_token:"API Token",is_locked:"Is Locked",status:"Status",is_sys_admin:"Is System Administrator",is_destroyed:"Is Destroyed",revision_number:"Revision Number",password:"Password",password_confirmation:"Confirm Password"}}),Ext.define("Buildit.i18n.model.UserRole",{statics:{modelLabel:"Model",user_role_id:"User Role",user_id:"User",role_id:"Role",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.Application",{statics:{modelLabel:"Model",application_id:"Application",application_code:"Application Code",hub_xtype:"Hub Xtype",application_name:"Application Name",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.ApplicationRole",{statics:{modelLabel:"Model",application_role_id:"Application Role",application_id:"Application",role_id:"Role",is_enabled:"Is Enabled"}}),Ext.define("Buildit.i18n.model.Event",{statics:{modelLabel:"Event",event_id:"Event",title:"Title",message:"Message",eventable_type:"Related To",eventable_id:"Related To",event_type:"Type",occurred_at:"Occurred At",user_id:"User",full_name:"User"}}),Ext.define("Buildit.i18n.model.Permission",{statics:{modelLabel:"Model",permission_id:"Permission",role_id:"Role",privilege_id:"Privilege",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.Privilege",{statics:{modelLabel:"Model",privilege_code:"Privilege Code",reference_code:"Reference Code",module_code:"Module Code",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number",privilege_id:"Privilege"}}),Ext.define("Buildit.i18n.model.Dashlet",{statics:{modelLabel:"Dashlet",dashlet_code:"Dashlet Code",component:"Component",name:"Name",summary:"Summary",detail:"Detail",vendor_code:"Vendor Code",version:"Version",released_on:"Released On",logo_path:"Logo Path",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.comm.email.OutboxItem",{statics:{modelLabel:"Outbox Item",comm_outbox_item_id:"Outbox Item",comm_email_message_id:"Email Message",submitted_at:"Submitted At",scheduled_for:"Scheduler For",attempts:"Attempts",delivered:"Delivered",is_destroyed:"Is Destroyed",revision_number:"Revision Number",privilege_id:"Privilege",subject:"Subject",send_to_addresses:"Sent To"}}),Ext.define("Infodesk.i18n.model.Case",{statics:{modelLabel:"Case",case_id:"Case",user_id:"User",agent_id:"Agent",state:"State",summary:"Summary",tags:"Tags",description:"Description",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.Button",{statics:{add:"Add Existing","new":"New","delete":"Delete",edit:"Edit",properties:"Properties",cancel:"Cancel",filters:"Filters",advanced:"Advanced",save:"Save",close:"Close"}}),Ext.define("Buildit.i18n.Label",{statics:{search:"Search",locatorEmptyText:"Type here to search",searching:"Searching...",nothingFound:"Nothing found",profile:"Profile",generalInformation:"General Information"}}),Ext.define("Buildit.i18n.Tooltip",{statics:{inspect:"Inspect"}});Ext.define("Buildit.i18n.view.notes.Form",{statics:{general_informationFieldsetLabel:"General Information",additional_informationFieldsetLabel:"Additional Information"}}),Ext.define("Buildit.i18n.view.dashlets.Form",{statics:{general_informationFieldsetLabel:"General Information",additional_informationFieldsetLabel:"Additional Information"}});
/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-09-18 17:18:59 (940c324ac822b840618a3a8b2b4b873f83a1a9b1)
*/

//  Filename: DirectSources.js
//  Notes:   DO NOT MODIFY THIS FILE AS IT IS AUTOMATICALLY GENERATED


Ext.define('Buildit.lib.DirectSources', {
  statics: {
    BUILDIT: 'app/direct'
  }
});


//  Filename: DirectServices.js
//  Notes:   DO NOT MODIFY THIS FILE AS IT IS AUTOMATICALLY GENERATED

//
// -----------------------------------------------------------------------
// SERVICE: Application
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Application:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: ApplicationRole
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			ApplicationRole:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Attachment
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Attachment:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Audit
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Audit:[
				{name: 'read', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: EmailService
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			EmailService:[
				{name: 'deliver', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Dashlet
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Dashlet:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Event
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Event:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Lookup
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Lookup:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Note
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Note:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Permission
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Permission:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Privilege
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Privilege:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Role
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Role:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: User
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			User:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: UserRole
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			UserRole:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Vendor
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Vendor:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Buildit.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Case
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
		type        : 'remoting',
		url         : Buildit.lib.DirectSources.BUILDIT,
		maxRetries  : 0,
		actions     : {
			Case:[
				{name: 'build', len: 1},{name: 'bulkUpdate', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'create', len: 1},{name: 'destroy', len: 1},{name: 'fireEvent', len: 1},{name: 'read', len: 1},{name: 'update', len: 1}
			]
		},
		namespace   :'Desk.service'
	}
);

//
// -----------------------------------------------------------------------
// SERVICE: Bookmark
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
    type        : 'remoting',
    url         : Buildit.lib.DirectSources.BUILDIT,
    maxRetries  : 0,
    actions     : {
      'Bookmark':[
        {name: 'create', len: 1},{name: 'read', len: 1},{name: 'update', len: 1},{name: 'destroy', len: 1},{name: 'toggle', len: 1},{name: 'getStatus', len: 1},{name: 'bulkUpdate', len: 1},{name: 'build', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'fireEvent', len: 1}
      ]
    },
    namespace   :'Buildit.service'
  }
);

//
// -----------------------------------------------------------------------
// SERVICE: comm.email.OutboxItem
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
    type        : 'remoting',
    url         : Buildit.lib.DirectSources.BUILDIT,
    maxRetries  : 0,
    actions     : {
      'comm.email.OutboxItem':[
        {name: 'create', len: 1},{name: 'read', len: 1},{name: 'update', len: 1},{name: 'destroy', len: 1},{name: 'bulkUpdate', len: 1},{name: 'build', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'fireEvent', len: 1}
      ]
    },
    namespace   :'Buildit.service'
  }
);

//
// -----------------------------------------------------------------------
// SERVICE: WebHook
// -----------------------------------------------------------------------
//

Ext.direct.Manager.addProvider({
    type        : 'remoting',
    url         : Buildit.lib.DirectSources.BUILDIT,
    maxRetries  : 0,
    actions     : {
      'WebHook':[
        {name: 'create', len: 1},{name: 'read', len: 1},{name: 'update', len: 1},{name: 'destroy', len: 1},{name: 'bulkUpdate', len: 1},{name: 'build', len: 1},{name: 'callClassMethod', len: 1},{name: 'callInstanceMethod', len: 1},{name: 'fireEvent', len: 1}
      ]
    },
    namespace   :'Buildit.service'
  }
);

Ext.define("Buildit.i18n.model.Application",{statics:{modelLabel:"Model",application_id:"Application",application_code:"Application Code",hub_xtype:"Hub Xtype",application_name:"Application Name",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.ApplicationRole",{statics:{modelLabel:"Model",application_role_id:"Application Role",application_id:"Application",role_id:"Role",is_enabled:"Is Enabled"}}),Ext.define("Buildit.i18n.model.Attachment",{statics:{modelLabel:"Attachment",attachment_id:"Attachment",attachable_type:"Attachable Type",attachable_id:"Attachable",content_id:"Content",file_name:"File Name",mime_type:"Mime Type",byte_size:"Byte Size",locale:"Locale",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number",is_internal:"Internal?",attachment_type:"Type"}}),Ext.define("Buildit.i18n.model.Bookmark",{statics:{modelLabel:"Bookmark",bookmark_id:"Bookmark",bookmarkable_type:"Type",bookmarkable_id:"Item",user_id:"User",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number",audit_created_by:"Audit Created By",audit_updated_by:"Audit Updated By",audit_created_at:"Audit Created At",audit_updated_at:"Audit Updated At"}}),Ext.define("Buildit.i18n.model.Dashlet",{statics:{modelLabel:"Dashlet",dashlet_code:"Dashlet Code",component:"Component",name:"Name",summary:"Summary",detail:"Detail",vendor_code:"Vendor Code",version:"Version",released_on:"Released On",logo_path:"Logo Path",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.Event",{statics:{modelLabel:"Event",event_id:"Event",title:"Title",message:"Message",eventable_type:"Related To",eventable_id:"Related To",event_type:"Type",occurred_at:"Occurred At",user_id:"User",full_name:"User"}}),Ext.define("Buildit.i18n.model.Note",{statics:{modelLabel:"Note",note_id:"Note",notable_type:"Related Type",detail:"Detail",category:"Category",is_internal:"Internal?",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.Permission",{statics:{modelLabel:"Model",permission_id:"Permission",role_id:"Role",privilege_id:"Privilege",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number"}}),Ext.define("Buildit.i18n.model.Privilege",{statics:{modelLabel:"Model",privilege_code:"Privilege Code",reference_code:"Reference Code",module_code:"Module Code",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed",revision_number:"Revision Number",privilege_id:"Privilege"}}),Ext.define("Buildit.i18n.model.Role",{statics:{modelLabel:"Model",role_id:"Role",role_code:"Role Code",description:"Description",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.User",{statics:{modelLabel:"Model",user_id:"User",email_address:"Email Address",first_name:"First Name",last_name:"Last Name",secret_question:"Secret Question",secret_answer:"Secret Answer",secret_password:"Secret Password",user_name:"Username",user_cn:"Login",encrypted_password:"Encrypted Password",sso_plugin_code:"SSO Plugin Code",api_token:"API Token",is_locked:"Is Locked",status:"Status",is_sys_admin:"Is System Administrator",is_destroyed:"Is Destroyed",revision_number:"Revision Number",password:"Password",password_confirmation:"Confirm Password"}}),Ext.define("Buildit.i18n.model.UserRole",{statics:{modelLabel:"Model",user_role_id:"User Role",user_id:"User",role_id:"Role",is_enabled:"Is Enabled",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.model.WebHook",{statics:{modelLabel:"WebHook",web_hook_id:"Web Hook",receive_url:"Receive Url",head_attribute:"Head Attribute",head_value:"Head Value",post_attribute:"Post Attribute",post_value:"Post Value",user_id:"User",is_destroyed:"Is Destroyed",audit_created_by:"Created By",audit_updated_by:"Updated By",audit_created_at:"Created At",audit_updated_at:"Updated At",revision_number:"Revision Number",is_enabled:"Enabled?"}}),Ext.define("Desk.i18n.model.Case",{statics:{modelLabel:"Case",display_as:"Case",case_id:"Case",case_nbr:"Request Number",case_type:"Request Type",user_id:"User",agent_id:"Agent",state:"State",summary:"Summary",tags:"Tags",description:"Description",is_destroyed:"Is Destroyed"}}),Ext.define("Buildit.i18n.Button",{statics:{add:"Add Existing","new":"New","delete":"Delete",edit:"Edit",properties:"Properties",cancel:"Cancel",filters:"Filters",advanced:"Advanced",save:"Save",close:"Close"}}),Ext.define("Buildit.i18n.Label",{statics:{search:"Search",locatorEmptyText:"Type here to search",searching:"Searching...",nothingFound:"Nothing found",profile:"Profile",generalInformation:"General Information"}}),Ext.define("Buildit.i18n.Tooltip",{statics:{inspect:"Inspect"}});Ext.define("Buildit.i18n.view.dashlets.Form",{statics:{general_informationFieldsetLabel:"General Information",additional_informationFieldsetLabel:"Additional Information"}}),Ext.define("Buildit.i18n.view.notes.Form",{statics:{general_informationFieldsetLabel:"General Information",additional_informationFieldsetLabel:"Additional Information"}});
//  Filename: ServerContext.js
//  Notes:   DO NOT MODIFY THIS FILE AS IT IS AUTOMATICALLY GENERATED


Ext.define('Buildit.lib.ServerContext', {
  statics: {"client_side":{"mapping":{"Buildit::Application":{"display":"Application","model":"Buildit.model.Application","store":"Buildit.store.Application","controller":"Buildit.controller.Application","form":"buildit-applications-Form","inspector":"buildit-applications-Inspector","explorer":"buildit-applications-Explorer"},"":{"display":null,"model":null,"store":null,"controller":null,"form":null,"inspector":null,"explorer":null},"Buildit::ApplicationRole":{"display":"ApplicationRole","model":"Buildit.model.ApplicationRole","store":"Buildit.store.ApplicationRole","controller":"Buildit.controller.ApplicationRole","form":"buildit-application_roles-Form","inspector":"buildit-application_roles-Inspector","explorer":"buildit-application_roles-Explorer"},"Buildit::Attachment":{"display":"Attachment","model":"Buildit.model.Attachment","store":"Buildit.store.Attachment","controller":"Buildit.controller.Attachment","form":"buildit-attachments-Form","inspector":"buildit-attachments-Inspector","explorer":"buildit-attachments-Explorer"},"Buildit::Dashlet":{"display":"Dashlet","model":"Buildit.model.Dashlet","store":"Buildit.store.Dashlet","controller":"Buildit.controller.Dashlet","form":"buildit-dashlets-Form","inspector":"buildit-dashlets-Inspector","explorer":"buildit-dashlets-Explorer"},"Buildit::Event":{"display":"Event","model":"Buildit.model.Event","store":"Buildit.store.Event","controller":"Buildit.controller.Event","form":"buildit-events-Form","inspector":"buildit-events-Inspector","explorer":"buildit-events-Explorer"},"Buildit::Lookup":{"display":"Lookup","model":"Buildit.model.Lookup","store":"Buildit.store.Lookup","controller":"Buildit.controller.Lookup","form":"buildit-lookups-Form","inspector":"buildit-lookups-Inspector","explorer":"buildit-lookups-Explorer"},"Buildit::Note":{"display":"Note","model":"Buildit.model.Note","store":"Buildit.store.Note","controller":"Buildit.controller.Note","form":"buildit-notes-Form","inspector":"buildit-notes-Inspector","explorer":"buildit-notes-Explorer"},"Buildit::Privilege":{"display":"Privilege","model":"Buildit.model.Privilege","store":"Buildit.store.Privilege","controller":"Buildit.controller.Privilege","form":"buildit-privileges-Form","inspector":"buildit-privileges-Inspector","explorer":"buildit-privileges-Explorer"},"Buildit::Permission":{"display":"Permission","model":"Buildit.model.Permission","store":"Buildit.store.Permission","controller":"Buildit.controller.Permission","form":"buildit-permissions-Form","inspector":"buildit-permissions-Inspector","explorer":"buildit-permissions-Explorer"},"Buildit::Role":{"display":"Role","model":"Buildit.model.Role","store":"Buildit.store.Role","controller":"Buildit.controller.Role","form":"buildit-roles-Form","inspector":"buildit-roles-Inspector","explorer":"buildit-roles-Explorer"},"Buildit::User":{"display":"User","model":"Buildit.model.User","store":"Buildit.store.User","controller":"Buildit.controller.User","form":"buildit-users-Form","inspector":"buildit-users-Inspector","explorer":"buildit-users-Explorer"},"Buildit::UserRole":{"display":"UserRole","model":"Buildit.model.UserRole","store":"Buildit.store.UserRole","controller":"Buildit.controller.UserRole","form":"buildit-user_roles-Form","inspector":"buildit-user_roles-Inspector","explorer":"buildit-user_roles-Explorer"},"Buildit::Vendor":{"display":"Vendor","model":"Buildit.model.Vendor","store":"Buildit.store.Vendor","controller":"Buildit.controller.Vendor","form":"buildit-vendors-Form","inspector":"buildit-vendors-Inspector","explorer":"buildit-vendors-Explorer"},"Buildit::Bookmark":{"display":"Bookmark","model":"Buildit.model.Bookmark","store":"Buildit.store.Bookmark","controller":"Buildit.controller.Bookmark","form":"buildit-bookmarks-Form","inspector":"buildit-bookmarks-Inspector","explorer":"buildit-bookmarks-Explorer"},"Buildit::Comm::Email::Address":{"display":"Address","model":"Buildit.model.comm.email.Address","store":"Buildit.store.comm.email.Address","controller":"Buildit.controller.comm.email.Address","form":"buildit-comm-email-addresses-Form","inspector":"buildit-comm-email-addresses-Inspector","explorer":"buildit-comm-email-addresses-Explorer"},"Buildit::Comm::Email::InboxItem":{"display":"InboxItem","model":"Buildit.model.comm.email.InboxItem","store":"Buildit.store.comm.email.InboxItem","controller":"Buildit.controller.comm.email.InboxItem","form":"buildit-comm-email-inbox_items-Form","inspector":"buildit-comm-email-inbox_items-Inspector","explorer":"buildit-comm-email-inbox_items-Explorer"},"Buildit::Comm::Email::Message":{"display":"Message","model":"Buildit.model.comm.email.Message","store":"Buildit.store.comm.email.Message","controller":"Buildit.controller.comm.email.Message","form":"buildit-comm-email-messages-Form","inspector":"buildit-comm-email-messages-Inspector","explorer":"buildit-comm-email-messages-Explorer"},"Buildit::Comm::Email::OutboxItem":{"display":"OutboxItem","model":"Buildit.model.comm.email.OutboxItem","store":"Buildit.store.comm.email.OutboxItem","controller":"Buildit.controller.comm.email.OutboxItem","form":"buildit-comm-email-outbox_items-Form","inspector":"buildit-comm-email-outbox_items-Inspector","explorer":"buildit-comm-email-outbox_items-Explorer"},"Buildit::Comm::Email::SentItem":{"display":"SentItem","model":"Buildit.model.comm.email.SentItem","store":"Buildit.store.comm.email.SentItem","controller":"Buildit.controller.comm.email.SentItem","form":"buildit-comm-email-sent_items-Form","inspector":"buildit-comm-email-sent_items-Inspector","explorer":"buildit-comm-email-sent_items-Explorer"},"Buildit::Content":{"display":"Content","model":"Buildit.model.Content","store":"Buildit.store.Content","controller":"Buildit.controller.Content","form":"buildit-contents-Form","inspector":"buildit-contents-Inspector","explorer":"buildit-contents-Explorer"},"Buildit::Conversion":{"display":"Conversion","model":"Buildit.model.Conversion","store":"Buildit.store.Conversion","controller":"Buildit.controller.Conversion","form":"buildit-conversions-Form","inspector":"buildit-conversions-Inspector","explorer":"buildit-conversions-Explorer"},"Buildit::Export":{"display":"Export","model":"Buildit.model.Export","store":"Buildit.store.Export","controller":"Buildit.controller.Export","form":"buildit-exports-Form","inspector":"buildit-exports-Inspector","explorer":"buildit-exports-Explorer"},"Buildit::Module":{"display":"Module","model":"Buildit.model.Module","store":"Buildit.store.Module","controller":"Buildit.controller.Module","form":"buildit-modules-Form","inspector":"buildit-modules-Inspector","explorer":"buildit-modules-Explorer"},"Buildit::Seed":{"display":"Seed","model":"Buildit.model.Seed","store":"Buildit.store.Seed","controller":"Buildit.controller.Seed","form":"buildit-seeds-Form","inspector":"buildit-seeds-Inspector","explorer":"buildit-seeds-Explorer"},"Buildit::Sequence":{"display":"Sequence","model":"Buildit.model.Sequence","store":"Buildit.store.Sequence","controller":"Buildit.controller.Sequence","form":"buildit-sequences-Form","inspector":"buildit-sequences-Inspector","explorer":"buildit-sequences-Explorer"},"Buildit::WebHook":{"display":"WebHook","model":"Buildit.model.WebHook","store":"Buildit.store.WebHook","controller":"Buildit.controller.WebHook","form":"buildit-web_hooks-Form","inspector":"buildit-web_hooks-Inspector","explorer":"buildit-web_hooks-Explorer"},"Desk::Case":{"display":"Case","model":"Desk.model.Case","store":"Desk.store.Case","controller":"Desk.controller.Case","form":"desk-cases-Form","inspector":"desk-cases-Inspector","explorer":"desk-cases-Explorer"}}}}
});
var lookupStoreFields = ['lookup_id', 'code', 'code_int', 'category', 'default_text', 'depends_on', 'is_enabled'];
Ext.create('Ext.data.ArrayStore', {
  storeId   : 'MASS_UPDATE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXC72911HIHI321MASSUPDATE1','CLONE',,'MASS_UPDATE_TYPE','Clone',null,true]
  ]
});

/*! Socket.IO.js build:0.9.16, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */


var io = ('undefined' === typeof module ? {} : module.exports);
(function() {

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * IO namespace.
   *
   * @namespace
   */

  var io = exports;

  /**
   * Socket.IO version
   *
   * @api public
   */

  io.version = '0.9.16';

  /**
   * Protocol implemented.
   *
   * @api public
   */

  io.protocol = 1;

  /**
   * Available transports, these will be populated with the available transports
   *
   * @api public
   */

  io.transports = [];

  /**
   * Keep track of jsonp callbacks.
   *
   * @api private
   */

  io.j = [];

  /**
   * Keep track of our io.Sockets
   *
   * @api private
   */
  io.sockets = {};


  /**
   * Manages connections to hosts.
   *
   * @param {String} uri
   * @Param {Boolean} force creation of new socket (defaults to false)
   * @api public
   */

  io.connect = function (host, details) {
    var uri = io.util.parseUri(host)
      , uuri
      , socket;

    if (global && global.location) {
      uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
      uri.host = uri.host || (global.document
        ? global.document.domain : global.location.hostname);
      uri.port = uri.port || global.location.port;
    }

    uuri = io.util.uniqueUri(uri);

    var options = {
        host: uri.host
      , secure: 'https' == uri.protocol
      , port: uri.port || ('https' == uri.protocol ? 443 : 80)
      , query: uri.query || ''
    };

    io.util.merge(options, details);

    if (options['force new connection'] || !io.sockets[uuri]) {
      socket = new io.Socket(options);
    }

    if (!options['force new connection'] && socket) {
      io.sockets[uuri] = socket;
    }

    socket = socket || io.sockets[uuri];

    // if path is different from '' or /
    return socket.of(uri.path.length > 1 ? uri.path : '');
  };

})('object' === typeof module ? module.exports : (this.io = {}), this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, global) {

  /**
   * Utilities namespace.
   *
   * @namespace
   */

  var util = exports.util = {};

  /**
   * Parses an URI
   *
   * @author Steven Levithan <stevenlevithan.com> (MIT license)
   * @api public
   */

  var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

  var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password',
               'host', 'port', 'relative', 'path', 'directory', 'file', 'query',
               'anchor'];

  util.parseUri = function (str) {
    var m = re.exec(str || '')
      , uri = {}
      , i = 14;

    while (i--) {
      uri[parts[i]] = m[i] || '';
    }

    return uri;
  };

  /**
   * Produces a unique url that identifies a Socket.IO connection.
   *
   * @param {Object} uri
   * @api public
   */

  util.uniqueUri = function (uri) {
    var protocol = uri.protocol
      , host = uri.host
      , port = uri.port;

    if ('document' in global) {
      host = host || document.domain;
      port = port || (protocol == 'https'
        && document.location.protocol !== 'https:' ? 443 : document.location.port);
    } else {
      host = host || 'localhost';

      if (!port && protocol == 'https') {
        port = 443;
      }
    }

    return (protocol || 'http') + '://' + host + ':' + (port || 80);
  };

  /**
   * Mergest 2 query strings in to once unique query string
   *
   * @param {String} base
   * @param {String} addition
   * @api public
   */

  util.query = function (base, addition) {
    var query = util.chunkQuery(base || '')
      , components = [];

    util.merge(query, util.chunkQuery(addition || ''));
    for (var part in query) {
      if (query.hasOwnProperty(part)) {
        components.push(part + '=' + query[part]);
      }
    }

    return components.length ? '?' + components.join('&') : '';
  };

  /**
   * Transforms a querystring in to an object
   *
   * @param {String} qs
   * @api public
   */

  util.chunkQuery = function (qs) {
    var query = {}
      , params = qs.split('&')
      , i = 0
      , l = params.length
      , kv;

    for (; i < l; ++i) {
      kv = params[i].split('=');
      if (kv[0]) {
        query[kv[0]] = kv[1];
      }
    }

    return query;
  };

  /**
   * Executes the given function when the page is loaded.
   *
   *     io.util.load(function () { console.log('page loaded'); });
   *
   * @param {Function} fn
   * @api public
   */

  var pageLoaded = false;

  util.load = function (fn) {
    if ('document' in global && document.readyState === 'complete' || pageLoaded) {
      return fn();
    }

    util.on(global, 'load', fn, false);
  };

  /**
   * Adds an event.
   *
   * @api private
   */

  util.on = function (element, event, fn, capture) {
    if (element.attachEvent) {
      element.attachEvent('on' + event, fn);
    } else if (element.addEventListener) {
      element.addEventListener(event, fn, capture);
    }
  };

  /**
   * Generates the correct `XMLHttpRequest` for regular and cross domain requests.
   *
   * @param {Boolean} [xdomain] Create a request that can be used cross domain.
   * @returns {XMLHttpRequest|false} If we can create a XMLHttpRequest.
   * @api private
   */

  util.request = function (xdomain) {

    if (xdomain && 'undefined' != typeof XDomainRequest && !util.ua.hasCORS) {
      return new XDomainRequest();
    }

    if ('undefined' != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
      return new XMLHttpRequest();
    }

    if (!xdomain) {
      try {
        return new window[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
      } catch(e) { }
    }

    return null;
  };

  /**
   * XHR based transport constructor.
   *
   * @constructor
   * @api public
   */

  /**
   * Change the internal pageLoaded value.
   */

  if ('undefined' != typeof window) {
    util.load(function () {
      pageLoaded = true;
    });
  }

  /**
   * Defers a function to ensure a spinner is not displayed by the browser
   *
   * @param {Function} fn
   * @api public
   */

  util.defer = function (fn) {
    if (!util.ua.webkit || 'undefined' != typeof importScripts) {
      return fn();
    }

    util.load(function () {
      setTimeout(fn, 100);
    });
  };

  /**
   * Merges two objects.
   *
   * @api public
   */

  util.merge = function merge (target, additional, deep, lastseen) {
    var seen = lastseen || []
      , depth = typeof deep == 'undefined' ? 2 : deep
      , prop;

    for (prop in additional) {
      if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
        if (typeof target[prop] !== 'object' || !depth) {
          target[prop] = additional[prop];
          seen.push(additional[prop]);
        } else {
          util.merge(target[prop], additional[prop], depth - 1, seen);
        }
      }
    }

    return target;
  };

  /**
   * Merges prototypes from objects
   *
   * @api public
   */

  util.mixin = function (ctor, ctor2) {
    util.merge(ctor.prototype, ctor2.prototype);
  };

  /**
   * Shortcut for prototypical and static inheritance.
   *
   * @api private
   */

  util.inherit = function (ctor, ctor2) {
    function f() {};
    f.prototype = ctor2.prototype;
    ctor.prototype = new f;
  };

  /**
   * Checks if the given object is an Array.
   *
   *     io.util.isArray([]); // true
   *     io.util.isArray({}); // false
   *
   * @param Object obj
   * @api public
   */

  util.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  /**
   * Intersects values of two arrays into a third
   *
   * @api public
   */

  util.intersect = function (arr, arr2) {
    var ret = []
      , longest = arr.length > arr2.length ? arr : arr2
      , shortest = arr.length > arr2.length ? arr2 : arr;

    for (var i = 0, l = shortest.length; i < l; i++) {
      if (~util.indexOf(longest, shortest[i]))
        ret.push(shortest[i]);
    }

    return ret;
  };

  /**
   * Array indexOf compatibility.
   *
   * @see bit.ly/a5Dxa2
   * @api public
   */

  util.indexOf = function (arr, o, i) {

    for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0;
         i < j && arr[i] !== o; i++) {}

    return j <= i ? -1 : i;
  };

  /**
   * Converts enumerables to array.
   *
   * @api public
   */

  util.toArray = function (enu) {
    var arr = [];

    for (var i = 0, l = enu.length; i < l; i++)
      arr.push(enu[i]);

    return arr;
  };

  /**
   * UA / engines detection namespace.
   *
   * @namespace
   */

  util.ua = {};

  /**
   * Whether the UA supports CORS for XHR.
   *
   * @api public
   */

  util.ua.hasCORS = 'undefined' != typeof XMLHttpRequest && (function () {
    try {
      var a = new XMLHttpRequest();
    } catch (e) {
      return false;
    }

    return a.withCredentials != undefined;
  })();

  /**
   * Detect webkit.
   *
   * @api public
   */

  util.ua.webkit = 'undefined' != typeof navigator
    && /webkit/i.test(navigator.userAgent);

   /**
   * Detect iPad/iPhone/iPod.
   *
   * @api public
   */

  util.ua.iDevice = 'undefined' != typeof navigator
      && /iPad|iPhone|iPod/i.test(navigator.userAgent);

})('undefined' != typeof io ? io : module.exports, this);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.EventEmitter = EventEmitter;

  /**
   * Event emitter constructor.
   *
   * @api public.
   */

  function EventEmitter () {};

  /**
   * Adds a listener
   *
   * @api public
   */

  EventEmitter.prototype.on = function (name, fn) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = fn;
    } else if (io.util.isArray(this.$events[name])) {
      this.$events[name].push(fn);
    } else {
      this.$events[name] = [this.$events[name], fn];
    }

    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  /**
   * Adds a volatile listener.
   *
   * @api public
   */

  EventEmitter.prototype.once = function (name, fn) {
    var self = this;

    function on () {
      self.removeListener(name, on);
      fn.apply(this, arguments);
    };

    on.listener = fn;
    this.on(name, on);

    return this;
  };

  /**
   * Removes a listener.
   *
   * @api public
   */

  EventEmitter.prototype.removeListener = function (name, fn) {
    if (this.$events && this.$events[name]) {
      var list = this.$events[name];

      if (io.util.isArray(list)) {
        var pos = -1;

        for (var i = 0, l = list.length; i < l; i++) {
          if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
            pos = i;
            break;
          }
        }

        if (pos < 0) {
          return this;
        }

        list.splice(pos, 1);

        if (!list.length) {
          delete this.$events[name];
        }
      } else if (list === fn || (list.listener && list.listener === fn)) {
        delete this.$events[name];
      }
    }

    return this;
  };

  /**
   * Removes all listeners for an event.
   *
   * @api public
   */

  EventEmitter.prototype.removeAllListeners = function (name) {
    if (name === undefined) {
      this.$events = {};
      return this;
    }

    if (this.$events && this.$events[name]) {
      this.$events[name] = null;
    }

    return this;
  };

  /**
   * Gets all listeners for a certain event.
   *
   * @api publci
   */

  EventEmitter.prototype.listeners = function (name) {
    if (!this.$events) {
      this.$events = {};
    }

    if (!this.$events[name]) {
      this.$events[name] = [];
    }

    if (!io.util.isArray(this.$events[name])) {
      this.$events[name] = [this.$events[name]];
    }

    return this.$events[name];
  };

  /**
   * Emits an event.
   *
   * @api public
   */

  EventEmitter.prototype.emit = function (name) {
    if (!this.$events) {
      return false;
    }

    var handler = this.$events[name];

    if (!handler) {
      return false;
    }

    var args = Array.prototype.slice.call(arguments, 1);

    if ('function' == typeof handler) {
      handler.apply(this, args);
    } else if (io.util.isArray(handler)) {
      var listeners = handler.slice();

      for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i].apply(this, args);
      }
    } else {
      return false;
    }

    return true;
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

/**
 * Based on JSON2 (http://www.JSON.org/js.html).
 */

(function (exports, nativeJSON) {
  "use strict";

  // use native JSON if it's available
  if (nativeJSON && nativeJSON.parse){
    return exports.JSON = {
      parse: nativeJSON.parse
    , stringify: nativeJSON.stringify
    };
  }

  var JSON = exports.JSON = {};

  function f(n) {
      // Format integers to have at least two digits.
      return n < 10 ? '0' + n : n;
  }

  function date(d, key) {
    return isFinite(d.valueOf()) ?
        d.getUTCFullYear()     + '-' +
        f(d.getUTCMonth() + 1) + '-' +
        f(d.getUTCDate())      + 'T' +
        f(d.getUTCHours())     + ':' +
        f(d.getUTCMinutes())   + ':' +
        f(d.getUTCSeconds())   + 'Z' : null;
  };

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"' : '\\"',
          '\\': '\\\\'
      },
      rep;


  function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

      escapable.lastIndex = 0;
      return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
          var c = meta[a];
          return typeof c === 'string' ? c :
              '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

// Produce a string from holder[key].

      var i,          // The loop counter.
          k,          // The member key.
          v,          // The member value.
          length,
          mind = gap,
          partial,
          value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

      if (value instanceof Date) {
          value = date(key);
      }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

      if (typeof rep === 'function') {
          value = rep.call(holder, key, value);
      }

// What happens next depends on the value's type.

      switch (typeof value) {
      case 'string':
          return quote(value);

      case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

          return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

          return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

      case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

          if (!value) {
              return 'null';
          }

// Make an array to hold the partial results of stringifying this object value.

          gap += indent;
          partial = [];

// Is the value an array?

          if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

              length = value.length;
              for (i = 0; i < length; i += 1) {
                  partial[i] = str(i, value) || 'null';
              }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

              v = partial.length === 0 ? '[]' : gap ?
                  '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                  '[' + partial.join(',') + ']';
              gap = mind;
              return v;
          }

// If the replacer is an array, use it to select the members to be stringified.

          if (rep && typeof rep === 'object') {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                  if (typeof rep[i] === 'string') {
                      k = rep[i];
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          } else {

// Otherwise, iterate through all of the keys in the object.

              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = str(k, value);
                      if (v) {
                          partial.push(quote(k) + (gap ? ': ' : ':') + v);
                      }
                  }
              }
          }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

          v = partial.length === 0 ? '{}' : gap ?
              '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
              '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
  }

// If the JSON object does not yet have a stringify method, give it one.

  JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

      if (typeof space === 'number') {
          for (i = 0; i < space; i += 1) {
              indent += ' ';
          }

// If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
          indent = space;
      }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
              (typeof replacer !== 'object' ||
              typeof replacer.length !== 'number')) {
          throw new Error('JSON.stringify');
      }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

      return str('', {'': value});
  };

// If the JSON object does not yet have a parse method, give it one.

  JSON.parse = function (text, reviver) {
  // The parse method takes a text and an optional reviver function, and returns
  // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

  // The walk method is used to recursively walk the resulting structure so
  // that modifications can be made.

          var k, v, value = holder[key];
          if (value && typeof value === 'object') {
              for (k in value) {
                  if (Object.prototype.hasOwnProperty.call(value, k)) {
                      v = walk(value, k);
                      if (v !== undefined) {
                          value[k] = v;
                      } else {
                          delete value[k];
                      }
                  }
              }
          }
          return reviver.call(holder, key, value);
      }


  // Parsing happens in four stages. In the first stage, we replace certain
  // Unicode characters with escape sequences. JavaScript handles many characters
  // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
          text = text.replace(cx, function (a) {
              return '\\u' +
                  ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          });
      }

  // In the second stage, we run the text against regular expressions that look
  // for non-JSON patterns. We are especially concerned with '()' and 'new'
  // because they can cause invocation, and '=' because it can cause mutation.
  // But just to be safe, we want to reject all unexpected forms.

  // We split the second stage into 4 regexp operations in order to work around
  // crippling inefficiencies in IE's and Safari's regexp engines. First we
  // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
  // replace all simple value tokens with ']' characters. Third, we delete all
  // open brackets that follow a colon or comma or that begin the text. Finally,
  // we look to see that the remaining characters are only whitespace or ']' or
  // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
              .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  // In the third stage we use the eval function to compile the text into a
  // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
  // in JavaScript: it can begin a block or an object literal. We wrap the text
  // in parens to eliminate the ambiguity.

          j = eval('(' + text + ')');

  // In the optional fourth stage, we recursively walk the new structure, passing
  // each name/value pair to a reviver function for possible transformation.

          return typeof reviver === 'function' ?
              walk({'': j}, '') : j;
      }

  // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
  };

})(
    'undefined' != typeof io ? io : module.exports
  , typeof JSON !== 'undefined' ? JSON : undefined
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Parser namespace.
   *
   * @namespace
   */

  var parser = exports.parser = {};

  /**
   * Packet types.
   */

  var packets = parser.packets = [
      'disconnect'
    , 'connect'
    , 'heartbeat'
    , 'message'
    , 'json'
    , 'event'
    , 'ack'
    , 'error'
    , 'noop'
  ];

  /**
   * Errors reasons.
   */

  var reasons = parser.reasons = [
      'transport not supported'
    , 'client not handshaken'
    , 'unauthorized'
  ];

  /**
   * Errors advice.
   */

  var advice = parser.advice = [
      'reconnect'
  ];

  /**
   * Shortcuts.
   */

  var JSON = io.JSON
    , indexOf = io.util.indexOf;

  /**
   * Encodes a packet.
   *
   * @api private
   */

  parser.encodePacket = function (packet) {
    var type = indexOf(packets, packet.type)
      , id = packet.id || ''
      , endpoint = packet.endpoint || ''
      , ack = packet.ack
      , data = null;

    switch (packet.type) {
      case 'error':
        var reason = packet.reason ? indexOf(reasons, packet.reason) : ''
          , adv = packet.advice ? indexOf(advice, packet.advice) : '';

        if (reason !== '' || adv !== '')
          data = reason + (adv !== '' ? ('+' + adv) : '');

        break;

      case 'message':
        if (packet.data !== '')
          data = packet.data;
        break;

      case 'event':
        var ev = { name: packet.name };

        if (packet.args && packet.args.length) {
          ev.args = packet.args;
        }

        data = JSON.stringify(ev);
        break;

      case 'json':
        data = JSON.stringify(packet.data);
        break;

      case 'connect':
        if (packet.qs)
          data = packet.qs;
        break;

      case 'ack':
        data = packet.ackId
          + (packet.args && packet.args.length
              ? '+' + JSON.stringify(packet.args) : '');
        break;
    }

    // construct packet with required fragments
    var encoded = [
        type
      , id + (ack == 'data' ? '+' : '')
      , endpoint
    ];

    // data fragment is optional
    if (data !== null && data !== undefined)
      encoded.push(data);

    return encoded.join(':');
  };

  /**
   * Encodes multiple messages (payload).
   *
   * @param {Array} messages
   * @api private
   */

  parser.encodePayload = function (packets) {
    var decoded = '';

    if (packets.length == 1)
      return packets[0];

    for (var i = 0, l = packets.length; i < l; i++) {
      var packet = packets[i];
      decoded += '\ufffd' + packet.length + '\ufffd' + packets[i];
    }

    return decoded;
  };

  /**
   * Decodes a packet
   *
   * @api private
   */

  var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;

  parser.decodePacket = function (data) {
    var pieces = data.match(regexp);

    if (!pieces) return {};

    var id = pieces[2] || ''
      , data = pieces[5] || ''
      , packet = {
            type: packets[pieces[1]]
          , endpoint: pieces[4] || ''
        };

    // whether we need to acknowledge the packet
    if (id) {
      packet.id = id;
      if (pieces[3])
        packet.ack = 'data';
      else
        packet.ack = true;
    }

    // handle different packet types
    switch (packet.type) {
      case 'error':
        var pieces = data.split('+');
        packet.reason = reasons[pieces[0]] || '';
        packet.advice = advice[pieces[1]] || '';
        break;

      case 'message':
        packet.data = data || '';
        break;

      case 'event':
        try {
          var opts = JSON.parse(data);
          packet.name = opts.name;
          packet.args = opts.args;
        } catch (e) { }

        packet.args = packet.args || [];
        break;

      case 'json':
        try {
          packet.data = JSON.parse(data);
        } catch (e) { }
        break;

      case 'connect':
        packet.qs = data || '';
        break;

      case 'ack':
        var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
        if (pieces) {
          packet.ackId = pieces[1];
          packet.args = [];

          if (pieces[3]) {
            try {
              packet.args = pieces[3] ? JSON.parse(pieces[3]) : [];
            } catch (e) { }
          }
        }
        break;

      case 'disconnect':
      case 'heartbeat':
        break;
    };

    return packet;
  };

  /**
   * Decodes data payload. Detects multiple messages
   *
   * @return {Array} messages
   * @api public
   */

  parser.decodePayload = function (data) {
    // IE doesn't like data[i] for unicode chars, charAt works fine
    if (data.charAt(0) == '\ufffd') {
      var ret = [];

      for (var i = 1, length = ''; i < data.length; i++) {
        if (data.charAt(i) == '\ufffd') {
          ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
          i += Number(length) + 1;
          length = '';
        } else {
          length += data.charAt(i);
        }
      }

      return ret;
    } else {
      return [parser.decodePacket(data)];
    }
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.Transport = Transport;

  /**
   * This is the transport template for all supported transport methods.
   *
   * @constructor
   * @api public
   */

  function Transport (socket, sessid) {
    this.socket = socket;
    this.sessid = sessid;
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Transport, io.EventEmitter);


  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  Transport.prototype.heartbeats = function () {
    return true;
  };

  /**
   * Handles the response from the server. When a new response is received
   * it will automatically update the timeout, decode the message and
   * forwards the response to the onMessage function for further processing.
   *
   * @param {String} data Response from the server.
   * @api private
   */

  Transport.prototype.onData = function (data) {
    this.clearCloseTimeout();

    // If the connection in currently open (or in a reopening state) reset the close
    // timeout since we have just received data. This check is necessary so
    // that we don't reset the timeout on an explicitly disconnected connection.
    if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
      this.setCloseTimeout();
    }

    if (data !== '') {
      // todo: we should only do decodePayload for xhr transports
      var msgs = io.parser.decodePayload(data);

      if (msgs && msgs.length) {
        for (var i = 0, l = msgs.length; i < l; i++) {
          this.onPacket(msgs[i]);
        }
      }
    }

    return this;
  };

  /**
   * Handles packets.
   *
   * @api private
   */

  Transport.prototype.onPacket = function (packet) {
    this.socket.setHeartbeatTimeout();

    if (packet.type == 'heartbeat') {
      return this.onHeartbeat();
    }

    if (packet.type == 'connect' && packet.endpoint == '') {
      this.onConnect();
    }

    if (packet.type == 'error' && packet.advice == 'reconnect') {
      this.isOpen = false;
    }

    this.socket.onPacket(packet);

    return this;
  };

  /**
   * Sets close timeout
   *
   * @api private
   */

  Transport.prototype.setCloseTimeout = function () {
    if (!this.closeTimeout) {
      var self = this;

      this.closeTimeout = setTimeout(function () {
        self.onDisconnect();
      }, this.socket.closeTimeout);
    }
  };

  /**
   * Called when transport disconnects.
   *
   * @api private
   */

  Transport.prototype.onDisconnect = function () {
    if (this.isOpen) this.close();
    this.clearTimeouts();
    this.socket.onDisconnect();
    return this;
  };

  /**
   * Called when transport connects
   *
   * @api private
   */

  Transport.prototype.onConnect = function () {
    this.socket.onConnect();
    return this;
  };

  /**
   * Clears close timeout
   *
   * @api private
   */

  Transport.prototype.clearCloseTimeout = function () {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  };

  /**
   * Clear timeouts
   *
   * @api private
   */

  Transport.prototype.clearTimeouts = function () {
    this.clearCloseTimeout();

    if (this.reopenTimeout) {
      clearTimeout(this.reopenTimeout);
    }
  };

  /**
   * Sends a packet
   *
   * @param {Object} packet object.
   * @api private
   */

  Transport.prototype.packet = function (packet) {
    this.send(io.parser.encodePacket(packet));
  };

  /**
   * Send the received heartbeat message back to server. So the server
   * knows we are still connected.
   *
   * @param {String} heartbeat Heartbeat response from the server.
   * @api private
   */

  Transport.prototype.onHeartbeat = function (heartbeat) {
    this.packet({ type: 'heartbeat' });
  };

  /**
   * Called when the transport opens.
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.isOpen = true;
    this.clearCloseTimeout();
    this.socket.onOpen();
  };

  /**
   * Notifies the base when the connection with the Socket.IO server
   * has been disconnected.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    var self = this;

    /* FIXME: reopen delay causing a infinit loop
    this.reopenTimeout = setTimeout(function () {
      self.open();
    }, this.socket.options['reopen delay']);*/

    this.isOpen = false;
    this.socket.onClose();
    this.onDisconnect();
  };

  /**
   * Generates a connection url based on the Socket.IO URL Protocol.
   * See <https://github.com/learnboost/socket.io-node/> for more details.
   *
   * @returns {String} Connection url
   * @api private
   */

  Transport.prototype.prepareUrl = function () {
    var options = this.socket.options;

    return this.scheme() + '://'
      + options.host + ':' + options.port + '/'
      + options.resource + '/' + io.protocol
      + '/' + this.name + '/' + this.sessid;
  };

  /**
   * Checks if the transport is ready to start a connection.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Transport.prototype.ready = function (socket, fn) {
    fn.call(this);
  };
})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.Socket = Socket;

  /**
   * Create a new `Socket.IO client` which can establish a persistent
   * connection with a Socket.IO enabled server.
   *
   * @api public
   */

  function Socket (options) {
    this.options = {
        port: 80
      , secure: false
      , document: 'document' in global ? document : false
      , resource: 'socket.io'
      , transports: io.transports
      , 'connect timeout': 10000
      , 'try multiple transports': true
      , 'reconnect': true
      , 'reconnection delay': 500
      , 'reconnection limit': Infinity
      , 'reopen delay': 3000
      , 'max reconnection attempts': 10
      , 'sync disconnect on unload': false
      , 'auto connect': true
      , 'flash policy port': 10843
      , 'manualFlush': false
    };

    io.util.merge(this.options, options);

    this.connected = false;
    this.open = false;
    this.connecting = false;
    this.reconnecting = false;
    this.namespaces = {};
    this.buffer = [];
    this.doBuffer = false;

    if (this.options['sync disconnect on unload'] &&
        (!this.isXDomain() || io.util.ua.hasCORS)) {
      var self = this;
      io.util.on(global, 'beforeunload', function () {
        self.disconnectSync();
      }, false);
    }

    if (this.options['auto connect']) {
      this.connect();
    }
};

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(Socket, io.EventEmitter);

  /**
   * Returns a namespace listener/emitter for this socket
   *
   * @api public
   */

  Socket.prototype.of = function (name) {
    if (!this.namespaces[name]) {
      this.namespaces[name] = new io.SocketNamespace(this, name);

      if (name !== '') {
        this.namespaces[name].packet({ type: 'connect' });
      }
    }

    return this.namespaces[name];
  };

  /**
   * Emits the given event to the Socket and all namespaces
   *
   * @api private
   */

  Socket.prototype.publish = function () {
    this.emit.apply(this, arguments);

    var nsp;

    for (var i in this.namespaces) {
      if (this.namespaces.hasOwnProperty(i)) {
        nsp = this.of(i);
        nsp.$emit.apply(nsp, arguments);
      }
    }
  };

  /**
   * Performs the handshake
   *
   * @api private
   */

  function empty () { };

  Socket.prototype.handshake = function (fn) {
    var self = this
      , options = this.options;

    function complete (data) {
      if (data instanceof Error) {
        self.connecting = false;
        self.onError(data.message);
      } else {
        fn.apply(null, data.split(':'));
      }
    };

    var url = [
          'http' + (options.secure ? 's' : '') + ':/'
        , options.host + ':' + options.port
        , options.resource
        , io.protocol
        , io.util.query(this.options.query, 't=' + +new Date)
      ].join('/');

    if (this.isXDomain() && !io.util.ua.hasCORS) {
      var insertAt = document.getElementsByTagName('script')[0]
        , script = document.createElement('script');

      script.src = url + '&jsonp=' + io.j.length;
      insertAt.parentNode.insertBefore(script, insertAt);

      io.j.push(function (data) {
        complete(data);
        script.parentNode.removeChild(script);
      });
    } else {
      var xhr = io.util.request();

      xhr.open('GET', url, true);
      if (this.isXDomain()) {
        xhr.withCredentials = true;
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          xhr.onreadystatechange = empty;

          if (xhr.status == 200) {
            complete(xhr.responseText);
          } else if (xhr.status == 403) {
            self.onError(xhr.responseText);
          } else {
            self.connecting = false;            
            !self.reconnecting && self.onError(xhr.responseText);
          }
        }
      };
      xhr.send(null);
    }
  };

  /**
   * Find an available transport based on the options supplied in the constructor.
   *
   * @api private
   */

  Socket.prototype.getTransport = function (override) {
    var transports = override || this.transports, match;

    for (var i = 0, transport; transport = transports[i]; i++) {
      if (io.Transport[transport]
        && io.Transport[transport].check(this)
        && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
        return new io.Transport[transport](this, this.sessionid);
      }
    }

    return null;
  };

  /**
   * Connects to the server.
   *
   * @param {Function} [fn] Callback.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.connect = function (fn) {
    if (this.connecting) {
      return this;
    }

    var self = this;
    self.connecting = true;
    
    this.handshake(function (sid, heartbeat, close, transports) {
      self.sessionid = sid;
      self.closeTimeout = close * 1000;
      self.heartbeatTimeout = heartbeat * 1000;
      if(!self.transports)
          self.transports = self.origTransports = (transports ? io.util.intersect(
              transports.split(',')
            , self.options.transports
          ) : self.options.transports);

      self.setHeartbeatTimeout();

      function connect (transports){
        if (self.transport) self.transport.clearTimeouts();

        self.transport = self.getTransport(transports);
        if (!self.transport) return self.publish('connect_failed');

        // once the transport is ready
        self.transport.ready(self, function () {
          self.connecting = true;
          self.publish('connecting', self.transport.name);
          self.transport.open();

          if (self.options['connect timeout']) {
            self.connectTimeoutTimer = setTimeout(function () {
              if (!self.connected) {
                self.connecting = false;

                if (self.options['try multiple transports']) {
                  var remaining = self.transports;

                  while (remaining.length > 0 && remaining.splice(0,1)[0] !=
                         self.transport.name) {}

                    if (remaining.length){
                      connect(remaining);
                    } else {
                      self.publish('connect_failed');
                    }
                }
              }
            }, self.options['connect timeout']);
          }
        });
      }

      connect(self.transports);

      self.once('connect', function (){
        clearTimeout(self.connectTimeoutTimer);

        fn && typeof fn == 'function' && fn();
      });
    });

    return this;
  };

  /**
   * Clears and sets a new heartbeat timeout using the value given by the
   * server during the handshake.
   *
   * @api private
   */

  Socket.prototype.setHeartbeatTimeout = function () {
    clearTimeout(this.heartbeatTimeoutTimer);
    if(this.transport && !this.transport.heartbeats()) return;

    var self = this;
    this.heartbeatTimeoutTimer = setTimeout(function () {
      self.transport.onClose();
    }, this.heartbeatTimeout);
  };

  /**
   * Sends a message.
   *
   * @param {Object} data packet.
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.packet = function (data) {
    if (this.connected && !this.doBuffer) {
      this.transport.packet(data);
    } else {
      this.buffer.push(data);
    }

    return this;
  };

  /**
   * Sets buffer state
   *
   * @api private
   */

  Socket.prototype.setBuffer = function (v) {
    this.doBuffer = v;

    if (!v && this.connected && this.buffer.length) {
      if (!this.options['manualFlush']) {
        this.flushBuffer();
      }
    }
  };

  /**
   * Flushes the buffer data over the wire.
   * To be invoked manually when 'manualFlush' is set to true.
   *
   * @api public
   */

  Socket.prototype.flushBuffer = function() {
    this.transport.payload(this.buffer);
    this.buffer = [];
  };
  

  /**
   * Disconnect the established connect.
   *
   * @returns {io.Socket}
   * @api public
   */

  Socket.prototype.disconnect = function () {
    if (this.connected || this.connecting) {
      if (this.open) {
        this.of('').packet({ type: 'disconnect' });
      }

      // handle disconnection immediately
      this.onDisconnect('booted');
    }

    return this;
  };

  /**
   * Disconnects the socket with a sync XHR.
   *
   * @api private
   */

  Socket.prototype.disconnectSync = function () {
    // ensure disconnection
    var xhr = io.util.request();
    var uri = [
        'http' + (this.options.secure ? 's' : '') + ':/'
      , this.options.host + ':' + this.options.port
      , this.options.resource
      , io.protocol
      , ''
      , this.sessionid
    ].join('/') + '/?disconnect=1';

    xhr.open('GET', uri, false);
    xhr.send(null);

    // handle disconnection immediately
    this.onDisconnect('booted');
  };

  /**
   * Check if we need to use cross domain enabled transports. Cross domain would
   * be a different port or different domain name.
   *
   * @returns {Boolean}
   * @api private
   */

  Socket.prototype.isXDomain = function () {

    var port = global.location.port ||
      ('https:' == global.location.protocol ? 443 : 80);

    return this.options.host !== global.location.hostname 
      || this.options.port != port;
  };

  /**
   * Called upon handshake.
   *
   * @api private
   */

  Socket.prototype.onConnect = function () {
    if (!this.connected) {
      this.connected = true;
      this.connecting = false;
      if (!this.doBuffer) {
        // make sure to flush the buffer
        this.setBuffer(false);
      }
      this.emit('connect');
    }
  };

  /**
   * Called when the transport opens
   *
   * @api private
   */

  Socket.prototype.onOpen = function () {
    this.open = true;
  };

  /**
   * Called when the transport closes.
   *
   * @api private
   */

  Socket.prototype.onClose = function () {
    this.open = false;
    clearTimeout(this.heartbeatTimeoutTimer);
  };

  /**
   * Called when the transport first opens a connection
   *
   * @param text
   */

  Socket.prototype.onPacket = function (packet) {
    this.of(packet.endpoint).onPacket(packet);
  };

  /**
   * Handles an error.
   *
   * @api private
   */

  Socket.prototype.onError = function (err) {
    if (err && err.advice) {
      if (err.advice === 'reconnect' && (this.connected || this.connecting)) {
        this.disconnect();
        if (this.options.reconnect) {
          this.reconnect();
        }
      }
    }

    this.publish('error', err && err.reason ? err.reason : err);
  };

  /**
   * Called when the transport disconnects.
   *
   * @api private
   */

  Socket.prototype.onDisconnect = function (reason) {
    var wasConnected = this.connected
      , wasConnecting = this.connecting;

    this.connected = false;
    this.connecting = false;
    this.open = false;

    if (wasConnected || wasConnecting) {
      this.transport.close();
      this.transport.clearTimeouts();
      if (wasConnected) {
        this.publish('disconnect', reason);

        if ('booted' != reason && this.options.reconnect && !this.reconnecting) {
          this.reconnect();
        }
      }
    }
  };

  /**
   * Called upon reconnection.
   *
   * @api private
   */

  Socket.prototype.reconnect = function () {
    this.reconnecting = true;
    this.reconnectionAttempts = 0;
    this.reconnectionDelay = this.options['reconnection delay'];

    var self = this
      , maxAttempts = this.options['max reconnection attempts']
      , tryMultiple = this.options['try multiple transports']
      , limit = this.options['reconnection limit'];

    function reset () {
      if (self.connected) {
        for (var i in self.namespaces) {
          if (self.namespaces.hasOwnProperty(i) && '' !== i) {
              self.namespaces[i].packet({ type: 'connect' });
          }
        }
        self.publish('reconnect', self.transport.name, self.reconnectionAttempts);
      }

      clearTimeout(self.reconnectionTimer);

      self.removeListener('connect_failed', maybeReconnect);
      self.removeListener('connect', maybeReconnect);

      self.reconnecting = false;

      delete self.reconnectionAttempts;
      delete self.reconnectionDelay;
      delete self.reconnectionTimer;
      delete self.redoTransports;

      self.options['try multiple transports'] = tryMultiple;
    };

    function maybeReconnect () {
      if (!self.reconnecting) {
        return;
      }

      if (self.connected) {
        return reset();
      };

      if (self.connecting && self.reconnecting) {
        return self.reconnectionTimer = setTimeout(maybeReconnect, 1000);
      }

      if (self.reconnectionAttempts++ >= maxAttempts) {
        if (!self.redoTransports) {
          self.on('connect_failed', maybeReconnect);
          self.options['try multiple transports'] = true;
          self.transports = self.origTransports;
          self.transport = self.getTransport();
          self.redoTransports = true;
          self.connect();
        } else {
          self.publish('reconnect_failed');
          reset();
        }
      } else {
        if (self.reconnectionDelay < limit) {
          self.reconnectionDelay *= 2; // exponential back off
        }

        self.connect();
        self.publish('reconnecting', self.reconnectionDelay, self.reconnectionAttempts);
        self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay);
      }
    };

    this.options['try multiple transports'] = false;
    this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);

    this.on('connect', maybeReconnect);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.SocketNamespace = SocketNamespace;

  /**
   * Socket namespace constructor.
   *
   * @constructor
   * @api public
   */

  function SocketNamespace (socket, name) {
    this.socket = socket;
    this.name = name || '';
    this.flags = {};
    this.json = new Flag(this, 'json');
    this.ackPackets = 0;
    this.acks = {};
  };

  /**
   * Apply EventEmitter mixin.
   */

  io.util.mixin(SocketNamespace, io.EventEmitter);

  /**
   * Copies emit since we override it
   *
   * @api private
   */

  SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;

  /**
   * Creates a new namespace, by proxying the request to the socket. This
   * allows us to use the synax as we do on the server.
   *
   * @api public
   */

  SocketNamespace.prototype.of = function () {
    return this.socket.of.apply(this.socket, arguments);
  };

  /**
   * Sends a packet.
   *
   * @api private
   */

  SocketNamespace.prototype.packet = function (packet) {
    packet.endpoint = this.name;
    this.socket.packet(packet);
    this.flags = {};
    return this;
  };

  /**
   * Sends a message
   *
   * @api public
   */

  SocketNamespace.prototype.send = function (data, fn) {
    var packet = {
        type: this.flags.json ? 'json' : 'message'
      , data: data
    };

    if ('function' == typeof fn) {
      packet.id = ++this.ackPackets;
      packet.ack = true;
      this.acks[packet.id] = fn;
    }

    return this.packet(packet);
  };

  /**
   * Emits an event
   *
   * @api public
   */
  
  SocketNamespace.prototype.emit = function (name) {
    var args = Array.prototype.slice.call(arguments, 1)
      , lastArg = args[args.length - 1]
      , packet = {
            type: 'event'
          , name: name
        };

    if ('function' == typeof lastArg) {
      packet.id = ++this.ackPackets;
      packet.ack = 'data';
      this.acks[packet.id] = lastArg;
      args = args.slice(0, args.length - 1);
    }

    packet.args = args;

    return this.packet(packet);
  };

  /**
   * Disconnects the namespace
   *
   * @api private
   */

  SocketNamespace.prototype.disconnect = function () {
    if (this.name === '') {
      this.socket.disconnect();
    } else {
      this.packet({ type: 'disconnect' });
      this.$emit('disconnect');
    }

    return this;
  };

  /**
   * Handles a packet
   *
   * @api private
   */

  SocketNamespace.prototype.onPacket = function (packet) {
    var self = this;

    function ack () {
      self.packet({
          type: 'ack'
        , args: io.util.toArray(arguments)
        , ackId: packet.id
      });
    };

    switch (packet.type) {
      case 'connect':
        this.$emit('connect');
        break;

      case 'disconnect':
        if (this.name === '') {
          this.socket.onDisconnect(packet.reason || 'booted');
        } else {
          this.$emit('disconnect', packet.reason);
        }
        break;

      case 'message':
      case 'json':
        var params = ['message', packet.data];

        if (packet.ack == 'data') {
          params.push(ack);
        } else if (packet.ack) {
          this.packet({ type: 'ack', ackId: packet.id });
        }

        this.$emit.apply(this, params);
        break;

      case 'event':
        var params = [packet.name].concat(packet.args);

        if (packet.ack == 'data')
          params.push(ack);

        this.$emit.apply(this, params);
        break;

      case 'ack':
        if (this.acks[packet.ackId]) {
          this.acks[packet.ackId].apply(this, packet.args);
          delete this.acks[packet.ackId];
        }
        break;

      case 'error':
        if (packet.advice){
          this.socket.onError(packet);
        } else {
          if (packet.reason == 'unauthorized') {
            this.$emit('connect_failed', packet.reason);
          } else {
            this.$emit('error', packet.reason);
          }
        }
        break;
    }
  };

  /**
   * Flag interface.
   *
   * @api private
   */

  function Flag (nsp, name) {
    this.namespace = nsp;
    this.name = name;
  };

  /**
   * Send a message
   *
   * @api public
   */

  Flag.prototype.send = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.send.apply(this.namespace, arguments);
  };

  /**
   * Emit an event
   *
   * @api public
   */

  Flag.prototype.emit = function () {
    this.namespace.flags[this.name] = true;
    this.namespace.emit.apply(this.namespace, arguments);
  };

})(
    'undefined' != typeof io ? io : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports.websocket = WS;

  /**
   * The WebSocket transport uses the HTML5 WebSocket API to establish an
   * persistent connection with the Socket.IO server. This transport will also
   * be inherited by the FlashSocket fallback as it provides a API compatible
   * polyfill for the WebSockets.
   *
   * @constructor
   * @extends {io.Transport}
   * @api public
   */

  function WS (socket) {
    io.Transport.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(WS, io.Transport);

  /**
   * Transport name
   *
   * @api public
   */

  WS.prototype.name = 'websocket';

  /**
   * Initializes a new `WebSocket` connection with the Socket.IO server. We attach
   * all the appropriate listeners to handle the responses from the server.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.open = function () {
    var query = io.util.query(this.socket.options.query)
      , self = this
      , Socket


    if (!Socket) {
      Socket = global.MozWebSocket || global.WebSocket;
    }

    this.websocket = new Socket(this.prepareUrl() + query);

    this.websocket.onopen = function () {
      self.onOpen();
      self.socket.setBuffer(false);
    };
    this.websocket.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.websocket.onclose = function () {
      self.onClose();
      self.socket.setBuffer(true);
    };
    this.websocket.onerror = function (e) {
      self.onError(e);
    };

    return this;
  };

  /**
   * Send a message to the Socket.IO server. The message will automatically be
   * encoded in the correct message format.
   *
   * @returns {Transport}
   * @api public
   */

  // Do to a bug in the current IDevices browser, we need to wrap the send in a 
  // setTimeout, when they resume from sleeping the browser will crash if 
  // we don't allow the browser time to detect the socket has been closed
  if (io.util.ua.iDevice) {
    WS.prototype.send = function (data) {
      var self = this;
      setTimeout(function() {
         self.websocket.send(data);
      },0);
      return this;
    };
  } else {
    WS.prototype.send = function (data) {
      this.websocket.send(data);
      return this;
    };
  }

  /**
   * Payload
   *
   * @api private
   */

  WS.prototype.payload = function (arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
      this.packet(arr[i]);
    }
    return this;
  };

  /**
   * Disconnect the established `WebSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  WS.prototype.close = function () {
    this.websocket.close();
    return this;
  };

  /**
   * Handle the errors that `WebSocket` might be giving when we
   * are attempting to connect or send messages.
   *
   * @param {Error} e The error.
   * @api private
   */

  WS.prototype.onError = function (e) {
    this.socket.onError(e);
  };

  /**
   * Returns the appropriate scheme for the URI generation.
   *
   * @api private
   */
  WS.prototype.scheme = function () {
    return this.socket.options.secure ? 'wss' : 'ws';
  };

  /**
   * Checks if the browser has support for native `WebSockets` and that
   * it's not the polyfill created for the FlashSocket transport.
   *
   * @return {Boolean}
   * @api public
   */

  WS.check = function () {
    return ('WebSocket' in global && !('__addTask' in WebSocket))
          || 'MozWebSocket' in global;
  };

  /**
   * Check if the `WebSocket` transport support cross domain communications.
   *
   * @returns {Boolean}
   * @api public
   */

  WS.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('websocket');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.flashsocket = Flashsocket;

  /**
   * The FlashSocket transport. This is a API wrapper for the HTML5 WebSocket
   * specification. It uses a .swf file to communicate with the server. If you want
   * to serve the .swf file from a other server than where the Socket.IO script is
   * coming from you need to use the insecure version of the .swf. More information
   * about this can be found on the github page.
   *
   * @constructor
   * @extends {io.Transport.websocket}
   * @api public
   */

  function Flashsocket () {
    io.Transport.websocket.apply(this, arguments);
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(Flashsocket, io.Transport.websocket);

  /**
   * Transport name
   *
   * @api public
   */

  Flashsocket.prototype.name = 'flashsocket';

  /**
   * Disconnect the established `FlashSocket` connection. This is done by adding a 
   * new task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.open = function () {
    var self = this
      , args = arguments;

    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.open.apply(self, args);
    });
    return this;
  };
  
  /**
   * Sends a message to the Socket.IO server. This is done by adding a new
   * task to the FlashSocket. The rest will be handled off by the `WebSocket` 
   * transport.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.send = function () {
    var self = this, args = arguments;
    WebSocket.__addTask(function () {
      io.Transport.websocket.prototype.send.apply(self, args);
    });
    return this;
  };

  /**
   * Disconnects the established `FlashSocket` connection.
   *
   * @returns {Transport}
   * @api public
   */

  Flashsocket.prototype.close = function () {
    WebSocket.__tasks.length = 0;
    io.Transport.websocket.prototype.close.call(this);
    return this;
  };

  /**
   * The WebSocket fall back needs to append the flash container to the body
   * element, so we need to make sure we have access to it. Or defer the call
   * until we are sure there is a body element.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  Flashsocket.prototype.ready = function (socket, fn) {
    function init () {
      var options = socket.options
        , port = options['flash policy port']
        , path = [
              'http' + (options.secure ? 's' : '') + ':/'
            , options.host + ':' + options.port
            , options.resource
            , 'static/flashsocket'
            , 'WebSocketMain' + (socket.isXDomain() ? 'Insecure' : '') + '.swf'
          ];

      // Only start downloading the swf file when the checked that this browser
      // actually supports it
      if (!Flashsocket.loaded) {
        if (typeof WEB_SOCKET_SWF_LOCATION === 'undefined') {
          // Set the correct file based on the XDomain settings
          WEB_SOCKET_SWF_LOCATION = path.join('/');
        }

        if (port !== 843) {
          WebSocket.loadFlashPolicyFile('xmlsocket://' + options.host + ':' + port);
        }

        WebSocket.__initialize();
        Flashsocket.loaded = true;
      }

      fn.call(self);
    }

    var self = this;
    if (document.body) return init();

    io.util.load(init);
  };

  /**
   * Check if the FlashSocket transport is supported as it requires that the Adobe
   * Flash Player plug-in version `10.0.0` or greater is installed. And also check if
   * the polyfill is correctly loaded.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.check = function () {
    if (
        typeof WebSocket == 'undefined'
      || !('__initialize' in WebSocket) || !swfobject
    ) return false;

    return swfobject.getFlashPlayerVersion().major >= 10;
  };

  /**
   * Check if the FlashSocket transport can be used as cross domain / cross origin 
   * transport. Because we can't see which type (secure or insecure) of .swf is used
   * we will just return true.
   *
   * @returns {Boolean}
   * @api public
   */

  Flashsocket.xdomainCheck = function () {
    return true;
  };

  /**
   * Disable AUTO_INITIALIZATION
   */

  if (typeof window != 'undefined') {
    WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
  }

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('flashsocket');
})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);
/*  SWFObject v2.2 <http://code.google.com/p/swfobject/> 
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
if ('undefined' != typeof window) {
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O[(['Active'].concat('Object').join('X'))]!=D){try{var ad=new window[(['Active'].concat('Object').join('X'))](W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?(['Active'].concat('').join('X')):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
}
// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol

(function() {
  
  if ('undefined' == typeof window || window.WebSocket) return;

  var console = window.console;
  if (!console || !console.log || !console.error) {
    console = {log: function(){ }, error: function(){ }};
  }
  
  if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
    console.error("Flash Player >= 10.0.0 is required.");
    return;
  }
  if (location.protocol == "file:") {
    console.error(
      "WARNING: web-socket-js doesn't work in file:///... URL " +
      "unless you set Flash Security Settings properly. " +
      "Open the page via Web server i.e. http://...");
  }

  /**
   * This class represents a faux web socket.
   * @param {string} url
   * @param {array or string} protocols
   * @param {string} proxyHost
   * @param {int} proxyPort
   * @param {string} headers
   */
  WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
    var self = this;
    self.__id = WebSocket.__nextId++;
    WebSocket.__instances[self.__id] = self;
    self.readyState = WebSocket.CONNECTING;
    self.bufferedAmount = 0;
    self.__events = {};
    if (!protocols) {
      protocols = [];
    } else if (typeof protocols == "string") {
      protocols = [protocols];
    }
    // Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc.
    // Otherwise, when onopen fires immediately, onopen is called before it is set.
    setTimeout(function() {
      WebSocket.__addTask(function() {
        WebSocket.__flash.create(
            self.__id, url, protocols, proxyHost || null, proxyPort || 0, headers || null);
      });
    }, 0);
  };

  /**
   * Send data to the web socket.
   * @param {string} data  The data to send to the socket.
   * @return {boolean}  True for success, false for failure.
   */
  WebSocket.prototype.send = function(data) {
    if (this.readyState == WebSocket.CONNECTING) {
      throw "INVALID_STATE_ERR: Web Socket connection has not been established";
    }
    // We use encodeURIComponent() here, because FABridge doesn't work if
    // the argument includes some characters. We don't use escape() here
    // because of this:
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions
    // But it looks decodeURIComponent(encodeURIComponent(s)) doesn't
    // preserve all Unicode characters either e.g. "\uffff" in Firefox.
    // Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require
    // additional testing.
    var result = WebSocket.__flash.send(this.__id, encodeURIComponent(data));
    if (result < 0) { // success
      return true;
    } else {
      this.bufferedAmount += result;
      return false;
    }
  };

  /**
   * Close this web socket gracefully.
   */
  WebSocket.prototype.close = function() {
    if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
      return;
    }
    this.readyState = WebSocket.CLOSING;
    WebSocket.__flash.close(this.__id);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) {
      this.__events[type] = [];
    }
    this.__events[type].push(listener);
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {string} type
   * @param {function} listener
   * @param {boolean} useCapture
   * @return void
   */
  WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
    if (!(type in this.__events)) return;
    var events = this.__events[type];
    for (var i = events.length - 1; i >= 0; --i) {
      if (events[i] === listener) {
        events.splice(i, 1);
        break;
      }
    }
  };

  /**
   * Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}
   *
   * @param {Event} event
   * @return void
   */
  WebSocket.prototype.dispatchEvent = function(event) {
    var events = this.__events[event.type] || [];
    for (var i = 0; i < events.length; ++i) {
      events[i](event);
    }
    var handler = this["on" + event.type];
    if (handler) handler(event);
  };

  /**
   * Handles an event from Flash.
   * @param {Object} flashEvent
   */
  WebSocket.prototype.__handleEvent = function(flashEvent) {
    if ("readyState" in flashEvent) {
      this.readyState = flashEvent.readyState;
    }
    if ("protocol" in flashEvent) {
      this.protocol = flashEvent.protocol;
    }
    
    var jsEvent;
    if (flashEvent.type == "open" || flashEvent.type == "error") {
      jsEvent = this.__createSimpleEvent(flashEvent.type);
    } else if (flashEvent.type == "close") {
      // TODO implement jsEvent.wasClean
      jsEvent = this.__createSimpleEvent("close");
    } else if (flashEvent.type == "message") {
      var data = decodeURIComponent(flashEvent.message);
      jsEvent = this.__createMessageEvent("message", data);
    } else {
      throw "unknown event type: " + flashEvent.type;
    }
    
    this.dispatchEvent(jsEvent);
  };
  
  WebSocket.prototype.__createSimpleEvent = function(type) {
    if (document.createEvent && window.Event) {
      var event = document.createEvent("Event");
      event.initEvent(type, false, false);
      return event;
    } else {
      return {type: type, bubbles: false, cancelable: false};
    }
  };
  
  WebSocket.prototype.__createMessageEvent = function(type, data) {
    if (document.createEvent && window.MessageEvent && !window.opera) {
      var event = document.createEvent("MessageEvent");
      event.initMessageEvent("message", false, false, data, null, null, window, null);
      return event;
    } else {
      // IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
      return {type: type, data: data, bubbles: false, cancelable: false};
    }
  };
  
  /**
   * Define the WebSocket readyState enumeration.
   */
  WebSocket.CONNECTING = 0;
  WebSocket.OPEN = 1;
  WebSocket.CLOSING = 2;
  WebSocket.CLOSED = 3;

  WebSocket.__flash = null;
  WebSocket.__instances = {};
  WebSocket.__tasks = [];
  WebSocket.__nextId = 0;
  
  /**
   * Load a new flash security policy file.
   * @param {string} url
   */
  WebSocket.loadFlashPolicyFile = function(url){
    WebSocket.__addTask(function() {
      WebSocket.__flash.loadManualPolicyFile(url);
    });
  };

  /**
   * Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
   */
  WebSocket.__initialize = function() {
    if (WebSocket.__flash) return;
    
    if (WebSocket.__swfLocation) {
      // For backword compatibility.
      window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation;
    }
    if (!window.WEB_SOCKET_SWF_LOCATION) {
      console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
      return;
    }
    var container = document.createElement("div");
    container.id = "webSocketContainer";
    // Hides Flash box. We cannot use display: none or visibility: hidden because it prevents
    // Flash from loading at least in IE. So we move it out of the screen at (-100, -100).
    // But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash
    // Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is
    // the best we can do as far as we know now.
    container.style.position = "absolute";
    if (WebSocket.__isFlashLite()) {
      container.style.left = "0px";
      container.style.top = "0px";
    } else {
      container.style.left = "-100px";
      container.style.top = "-100px";
    }
    var holder = document.createElement("div");
    holder.id = "webSocketFlash";
    container.appendChild(holder);
    document.body.appendChild(container);
    // See this article for hasPriority:
    // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
    swfobject.embedSWF(
      WEB_SOCKET_SWF_LOCATION,
      "webSocketFlash",
      "1" /* width */,
      "1" /* height */,
      "10.0.0" /* SWF version */,
      null,
      null,
      {hasPriority: true, swliveconnect : true, allowScriptAccess: "always"},
      null,
      function(e) {
        if (!e.success) {
          console.error("[WebSocket] swfobject.embedSWF failed");
        }
      });
  };
  
  /**
   * Called by Flash to notify JS that it's fully loaded and ready
   * for communication.
   */
  WebSocket.__onFlashInitialized = function() {
    // We need to set a timeout here to avoid round-trip calls
    // to flash during the initialization process.
    setTimeout(function() {
      WebSocket.__flash = document.getElementById("webSocketFlash");
      WebSocket.__flash.setCallerUrl(location.href);
      WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
      for (var i = 0; i < WebSocket.__tasks.length; ++i) {
        WebSocket.__tasks[i]();
      }
      WebSocket.__tasks = [];
    }, 0);
  };
  
  /**
   * Called by Flash to notify WebSockets events are fired.
   */
  WebSocket.__onFlashEvent = function() {
    setTimeout(function() {
      try {
        // Gets events using receiveEvents() instead of getting it from event object
        // of Flash event. This is to make sure to keep message order.
        // It seems sometimes Flash events don't arrive in the same order as they are sent.
        var events = WebSocket.__flash.receiveEvents();
        for (var i = 0; i < events.length; ++i) {
          WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
        }
      } catch (e) {
        console.error(e);
      }
    }, 0);
    return true;
  };
  
  // Called by Flash.
  WebSocket.__log = function(message) {
    console.log(decodeURIComponent(message));
  };
  
  // Called by Flash.
  WebSocket.__error = function(message) {
    console.error(decodeURIComponent(message));
  };
  
  WebSocket.__addTask = function(task) {
    if (WebSocket.__flash) {
      task();
    } else {
      WebSocket.__tasks.push(task);
    }
  };
  
  /**
   * Test if the browser is running flash lite.
   * @return {boolean} True if flash lite is running, false otherwise.
   */
  WebSocket.__isFlashLite = function() {
    if (!window.navigator || !window.navigator.mimeTypes) {
      return false;
    }
    var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
    if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
      return false;
    }
    return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false;
  };
  
  if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
    if (window.addEventListener) {
      window.addEventListener("load", function(){
        WebSocket.__initialize();
      }, false);
    } else {
      window.attachEvent("onload", function(){
        WebSocket.__initialize();
      });
    }
  }
  
})();

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   *
   * @api public
   */

  exports.XHR = XHR;

  /**
   * XHR constructor
   *
   * @costructor
   * @api public
   */

  function XHR (socket) {
    if (!socket) return;

    io.Transport.apply(this, arguments);
    this.sendBuffer = [];
  };

  /**
   * Inherits from Transport.
   */

  io.util.inherit(XHR, io.Transport);

  /**
   * Establish a connection
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.open = function () {
    this.socket.setBuffer(false);
    this.onOpen();
    this.get();

    // we need to make sure the request succeeds since we have no indication
    // whether the request opened or not until it succeeded.
    this.setCloseTimeout();

    return this;
  };

  /**
   * Check if we need to send data to the Socket.IO server, if we have data in our
   * buffer we encode it and forward it to the `post` method.
   *
   * @api private
   */

  XHR.prototype.payload = function (payload) {
    var msgs = [];

    for (var i = 0, l = payload.length; i < l; i++) {
      msgs.push(io.parser.encodePacket(payload[i]));
    }

    this.send(io.parser.encodePayload(msgs));
  };

  /**
   * Send data to the Socket.IO server.
   *
   * @param data The message
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.send = function (data) {
    this.post(data);
    return this;
  };

  /**
   * Posts a encoded message to the Socket.IO server.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  function empty () { };

  XHR.prototype.post = function (data) {
    var self = this;
    this.socket.setBuffer(true);

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;
        self.posting = false;

        if (this.status == 200){
          self.socket.setBuffer(false);
        } else {
          self.onClose();
        }
      }
    }

    function onload () {
      this.onload = empty;
      self.socket.setBuffer(false);
    };

    this.sendXHR = this.request('POST');

    if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
      this.sendXHR.onload = this.sendXHR.onerror = onload;
    } else {
      this.sendXHR.onreadystatechange = stateChange;
    }

    this.sendXHR.send(data);
  };

  /**
   * Disconnects the established `XHR` connection.
   *
   * @returns {Transport}
   * @api public
   */

  XHR.prototype.close = function () {
    this.onClose();
    return this;
  };

  /**
   * Generates a configured XHR request
   *
   * @param {String} url The url that needs to be requested.
   * @param {String} method The method the request should use.
   * @returns {XMLHttpRequest}
   * @api private
   */

  XHR.prototype.request = function (method) {
    var req = io.util.request(this.socket.isXDomain())
      , query = io.util.query(this.socket.options.query, 't=' + +new Date);

    req.open(method || 'GET', this.prepareUrl() + query, true);

    if (method == 'POST') {
      try {
        if (req.setRequestHeader) {
          req.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } else {
          // XDomainRequest
          req.contentType = 'text/plain';
        }
      } catch (e) {}
    }

    return req;
  };

  /**
   * Returns the scheme to use for the transport URLs.
   *
   * @api private
   */

  XHR.prototype.scheme = function () {
    return this.socket.options.secure ? 'https' : 'http';
  };

  /**
   * Check if the XHR transports are supported
   *
   * @param {Boolean} xdomain Check if we support cross domain requests.
   * @returns {Boolean}
   * @api public
   */

  XHR.check = function (socket, xdomain) {
    try {
      var request = io.util.request(xdomain),
          usesXDomReq = (global.XDomainRequest && request instanceof XDomainRequest),
          socketProtocol = (socket && socket.options && socket.options.secure ? 'https:' : 'http:'),
          isXProtocol = (global.location && socketProtocol != global.location.protocol);
      if (request && !(usesXDomReq && isXProtocol)) {
        return true;
      }
    } catch(e) {}

    return false;
  };

  /**
   * Check if the XHR transport supports cross domain requests.
   *
   * @returns {Boolean}
   * @api public
   */

  XHR.xdomainCheck = function (socket) {
    return XHR.check(socket, true);
  };

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);
/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io) {

  /**
   * Expose constructor.
   */

  exports.htmlfile = HTMLFile;

  /**
   * The HTMLFile transport creates a `forever iframe` based transport
   * for Internet Explorer. Regular forever iframe implementations will 
   * continuously trigger the browsers buzy indicators. If the forever iframe
   * is created inside a `htmlfile` these indicators will not be trigged.
   *
   * @constructor
   * @extends {io.Transport.XHR}
   * @api public
   */

  function HTMLFile (socket) {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(HTMLFile, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  HTMLFile.prototype.name = 'htmlfile';

  /**
   * Creates a new Ac...eX `htmlfile` with a forever loading iframe
   * that can be used to listen to messages. Inside the generated
   * `htmlfile` a reference will be made to the HTMLFile transport.
   *
   * @api private
   */

  HTMLFile.prototype.get = function () {
    this.doc = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
    this.doc.open();
    this.doc.write('<html></html>');
    this.doc.close();
    this.doc.parentWindow.s = this;

    var iframeC = this.doc.createElement('div');
    iframeC.className = 'socketio';

    this.doc.body.appendChild(iframeC);
    this.iframe = this.doc.createElement('iframe');

    iframeC.appendChild(this.iframe);

    var self = this
      , query = io.util.query(this.socket.options.query, 't='+ +new Date);

    this.iframe.src = this.prepareUrl() + query;

    io.util.on(window, 'unload', function () {
      self.destroy();
    });
  };

  /**
   * The Socket.IO server will write script tags inside the forever
   * iframe, this function will be used as callback for the incoming
   * information.
   *
   * @param {String} data The message
   * @param {document} doc Reference to the context
   * @api private
   */

  HTMLFile.prototype._ = function (data, doc) {
    // unescape all forward slashes. see GH-1251
    data = data.replace(/\\\//g, '/');
    this.onData(data);
    try {
      var script = doc.getElementsByTagName('script')[0];
      script.parentNode.removeChild(script);
    } catch (e) { }
  };

  /**
   * Destroy the established connection, iframe and `htmlfile`.
   * And calls the `CollectGarbage` function of Internet Explorer
   * to release the memory.
   *
   * @api private
   */

  HTMLFile.prototype.destroy = function () {
    if (this.iframe){
      try {
        this.iframe.src = 'about:blank';
      } catch(e){}

      this.doc = null;
      this.iframe.parentNode.removeChild(this.iframe);
      this.iframe = null;

      CollectGarbage();
    }
  };

  /**
   * Disconnects the established connection.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  HTMLFile.prototype.close = function () {
    this.destroy();
    return io.Transport.XHR.prototype.close.call(this);
  };

  /**
   * Checks if the browser supports this transport. The browser
   * must have an `Ac...eXObject` implementation.
   *
   * @return {Boolean}
   * @api public
   */

  HTMLFile.check = function (socket) {
    if (typeof window != "undefined" && (['Active'].concat('Object').join('X')) in window){
      try {
        var a = new window[(['Active'].concat('Object').join('X'))]('htmlfile');
        return a && io.Transport.XHR.check(socket);
      } catch(e){}
    }
    return false;
  };

  /**
   * Check if cross domain requests are supported.
   *
   * @returns {Boolean}
   * @api public
   */

  HTMLFile.xdomainCheck = function () {
    // we can probably do handling for sub-domains, we should
    // test that it's cross domain but a subdomain here
    return false;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('htmlfile');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {

  /**
   * Expose constructor.
   */

  exports['xhr-polling'] = XHRPolling;

  /**
   * The XHR-polling transport uses long polling XHR requests to create a
   * "persistent" connection with the server.
   *
   * @constructor
   * @api public
   */

  function XHRPolling () {
    io.Transport.XHR.apply(this, arguments);
  };

  /**
   * Inherits from XHR transport.
   */

  io.util.inherit(XHRPolling, io.Transport.XHR);

  /**
   * Merge the properties from XHR transport
   */

  io.util.merge(XHRPolling, io.Transport.XHR);

  /**
   * Transport name
   *
   * @api public
   */

  XHRPolling.prototype.name = 'xhr-polling';

  /**
   * Indicates whether heartbeats is enabled for this transport
   *
   * @api private
   */

  XHRPolling.prototype.heartbeats = function () {
    return false;
  };

  /** 
   * Establish a connection, for iPhone and Android this will be done once the page
   * is loaded.
   *
   * @returns {Transport} Chaining.
   * @api public
   */

  XHRPolling.prototype.open = function () {
    var self = this;

    io.Transport.XHR.prototype.open.call(self);
    return false;
  };

  /**
   * Starts a XHR request to wait for incoming messages.
   *
   * @api private
   */

  function empty () {};

  XHRPolling.prototype.get = function () {
    if (!this.isOpen) return;

    var self = this;

    function stateChange () {
      if (this.readyState == 4) {
        this.onreadystatechange = empty;

        if (this.status == 200) {
          self.onData(this.responseText);
          self.get();
        } else {
          self.onClose();
        }
      }
    };

    function onload () {
      this.onload = empty;
      this.onerror = empty;
      self.retryCounter = 1;
      self.onData(this.responseText);
      self.get();
    };

    function onerror () {
      self.retryCounter ++;
      if(!self.retryCounter || self.retryCounter > 3) {
        self.onClose();  
      } else {
        self.get();
      }
    };

    this.xhr = this.request();

    if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
      this.xhr.onload = onload;
      this.xhr.onerror = onerror;
    } else {
      this.xhr.onreadystatechange = stateChange;
    }

    this.xhr.send(null);
  };

  /**
   * Handle the unclean close behavior.
   *
   * @api private
   */

  XHRPolling.prototype.onClose = function () {
    io.Transport.XHR.prototype.onClose.call(this);

    if (this.xhr) {
      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
      try {
        this.xhr.abort();
      } catch(e){}
      this.xhr = null;
    }
  };

  /**
   * Webkit based browsers show a infinit spinner when you start a XHR request
   * before the browsers onload event is called so we need to defer opening of
   * the transport until the onload event is called. Wrapping the cb in our
   * defer method solve this.
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  XHRPolling.prototype.ready = function (socket, fn) {
    var self = this;

    io.util.defer(function () {
      fn.call(self);
    });
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('xhr-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

/**
 * socket.io
 * Copyright(c) 2011 LearnBoost <dev@learnboost.com>
 * MIT Licensed
 */

(function (exports, io, global) {
  /**
   * There is a way to hide the loading indicator in Firefox. If you create and
   * remove a iframe it will stop showing the current loading indicator.
   * Unfortunately we can't feature detect that and UA sniffing is evil.
   *
   * @api private
   */

  var indicator = global.document && "MozAppearance" in
    global.document.documentElement.style;

  /**
   * Expose constructor.
   */

  exports['jsonp-polling'] = JSONPPolling;

  /**
   * The JSONP transport creates an persistent connection by dynamically
   * inserting a script tag in the page. This script tag will receive the
   * information of the Socket.IO server. When new information is received
   * it creates a new script tag for the new data stream.
   *
   * @constructor
   * @extends {io.Transport.xhr-polling}
   * @api public
   */

  function JSONPPolling (socket) {
    io.Transport['xhr-polling'].apply(this, arguments);

    this.index = io.j.length;

    var self = this;

    io.j.push(function (msg) {
      self._(msg);
    });
  };

  /**
   * Inherits from XHR polling transport.
   */

  io.util.inherit(JSONPPolling, io.Transport['xhr-polling']);

  /**
   * Transport name
   *
   * @api public
   */

  JSONPPolling.prototype.name = 'jsonp-polling';

  /**
   * Posts a encoded message to the Socket.IO server using an iframe.
   * The iframe is used because script tags can create POST based requests.
   * The iframe is positioned outside of the view so the user does not
   * notice it's existence.
   *
   * @param {String} data A encoded message.
   * @api private
   */

  JSONPPolling.prototype.post = function (data) {
    var self = this
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (!this.form) {
      var form = document.createElement('form')
        , area = document.createElement('textarea')
        , id = this.iframeId = 'socketio_iframe_' + this.index
        , iframe;

      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '0px';
      form.style.left = '0px';
      form.style.display = 'none';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);

      this.form = form;
      this.area = area;
    }

    this.form.action = this.prepareUrl() + query;

    function complete () {
      initIframe();
      self.socket.setBuffer(false);
    };

    function initIframe () {
      if (self.iframe) {
        self.form.removeChild(self.iframe);
      }

      try {
        // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
        iframe = document.createElement('<iframe name="'+ self.iframeId +'">');
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
      }

      iframe.id = self.iframeId;

      self.form.appendChild(iframe);
      self.iframe = iframe;
    };

    initIframe();

    // we temporarily stringify until we figure out how to prevent
    // browsers from turning `\n` into `\r\n` in form inputs
    this.area.value = io.JSON.stringify(data);

    try {
      this.form.submit();
    } catch(e) {}

    if (this.iframe.attachEvent) {
      iframe.onreadystatechange = function () {
        if (self.iframe.readyState == 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }

    this.socket.setBuffer(true);
  };

  /**
   * Creates a new JSONP poll that can be used to listen
   * for messages from the Socket.IO server.
   *
   * @api private
   */

  JSONPPolling.prototype.get = function () {
    var self = this
      , script = document.createElement('script')
      , query = io.util.query(
             this.socket.options.query
          , 't='+ (+new Date) + '&i=' + this.index
        );

    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }

    script.async = true;
    script.src = this.prepareUrl() + query;
    script.onerror = function () {
      self.onClose();
    };

    var insertAt = document.getElementsByTagName('script')[0];
    insertAt.parentNode.insertBefore(script, insertAt);
    this.script = script;

    if (indicator) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };

  /**
   * Callback function for the incoming message stream from the Socket.IO server.
   *
   * @param {String} data The message
   * @api private
   */

  JSONPPolling.prototype._ = function (msg) {
    this.onData(msg);
    if (this.isOpen) {
      this.get();
    }
    return this;
  };

  /**
   * The indicator hack only works after onload
   *
   * @param {Socket} socket The socket instance that needs a transport
   * @param {Function} fn The callback
   * @api private
   */

  JSONPPolling.prototype.ready = function (socket, fn) {
    var self = this;
    if (!indicator) return fn.call(this);

    io.util.load(function () {
      fn.call(self);
    });
  };

  /**
   * Checks if browser supports this transport.
   *
   * @return {Boolean}
   * @api public
   */

  JSONPPolling.check = function () {
    return 'document' in global;
  };

  /**
   * Check if cross domain requests are supported
   *
   * @returns {Boolean}
   * @api public
   */

  JSONPPolling.xdomainCheck = function () {
    return true;
  };

  /**
   * Add the transport to your public io.transports array.
   *
   * @api private
   */

  io.transports.push('jsonp-polling');

})(
    'undefined' != typeof io ? io.Transport : module.exports
  , 'undefined' != typeof io ? io : module.parent.exports
  , this
);

if (typeof define === "function" && define.amd) {
  define([], function () { return io; });
}
})();
Ext.define('Buildit.Application', {
    extend: 'Ext.app.Application',

    constructor: function(cfg) {
      if(!cfg.controllers) {
        cfg.controllers = [];
      }
      
      cfg.controllers = cfg.controllers.concat(Buildit.controllers);
      var launch = cfg.launch;
      var me = this;
      cfg.launch = function() {
        // run passed launch
        launch.apply(me);
        // fire appReady event
        me.fireEvent('appReady');
      };
      Buildit.application = this;
      this.callParent(arguments);
    }
});

Ext.ns('Buildit');
Buildit.controllers = [];

Buildit.defineController = function(name, cls) {
  Ext.define(name, cls, function(cls) {
    Buildit.controllers.push(name);
  });
};

Buildit.desktopApplication = function(config) {
  Ext.onReady(function() {
    Ext.create('Buildit.Application', config);
  });
};

Buildit.touchApplication = function(config) {
  Ext.setup({
      onReady: function() {
          Ext.Loader.setPath({'Buildit': 'Buildit'});
          Ext.create('Buildit.Application', config);
      }
  });
};
/**
 * This is a registry for application permissions.
 * Application components register available permissions on launch.
 * The AuthorizationManager can be queried if the current user owns a specific permission explicitly or by being member of a {@link Buildit.lib.Role}.
 */

Ext.define('Buildit.lib.AuthorizationManager', {
	
    constructor: function() {
      Ext.applyIf(this, {
          permissions: {}
      });
      // Register the AuthorizationManager's own permissions
      this.registerPermission('AuthorizationManager', 'query permissions');
      this.registerPermission('AuthorizationManager', 'update permissions');

			// get the permissions for the current user
			this.permissions = Buildit.service.Authorization.getPrivileges();
    },

    /**
     * Registers an available permission
     * @param {String} scope the scope this Permission applies to. This could be a component ('FooExplorer'), a column in a grid ('FooExplorer-isAdmin'), a controller ('Foo') or anything else describing the scope to the user
     * @param {String} action the action this Permission applies to. This should describe the action that can be authorized on the scoped item (i.e. 'delete record')
     */
    registerPermission: function(scope, action) {
      this.permissions.push({scope: scope, action: action});
    },

    /**
     * Check if the current user has the given permission
     * @param {String} scope
     * @param {String} action
     * @return {Boolean}
     */
    hasPermission: function(scope, action) {
      // TODO: implement
      return true;
    },

    /**
     * Return all permissions for the current user
     * @return {Array}
     */
    getPermissions: function() {
      if(!hasPermission('AuthorizationManager', 'query permissions')) {
        return [];
      }
      // TODO: implement
      return [];
    },

    /**
     * Check if the given user has the given permission
     * @param {String} user
     * @param {String} scope
     * @param {String} action
     * @return {Boolean}
     */
    hasUserPermission: function(user, scope, action) {
      // TODO: implement
      return true;
    },

    /**
     * Return all permissions for the given user
     * @param {String} user
     * @return {Array}
     */
    getUserPermissions: function() {
      if(!hasPermission('AuthorizationManager', 'query permissions')) {
        return [];
      }
      // TODO: implement
      return [];
    }

});
/* 
 *  Notification / Toastwindow extension for Ext JS 4.x
 *
 *  Copyright (c) 2011 Eirik Lorentsen (http://www.eirik.net/)
 *
 *  Examples and documentation at: http://www.eirik.net/Ext/ux/window/Notification.html
 *
 *  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 *  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 *  Version: 2.1
 *  Last changed date: 2012-08-12
 */


Ext.define('Ext.ux.window.Notification', {
  extend: 'Ext.window.Window',
  alias: 'widget.uxNotification',

  cls: 'ux-notification-window',
  autoClose: true,
  autoHeight: true,
  plain: true,
  draggable: false,
  shadow: false,
  focus: Ext.emptyFn,

  // For alignment and to store array of rendered notifications. Defaults to document if not set.
  manager: null,

  useXAxis: false,

  // Options: br, bl, tr, tl, t, l, b, r
  position: 'br',

  // Pixels between each notification
  spacing: 6,

  // Pixels from the managers borders to start the first notification
  paddingX: 10,
  paddingY: 10,

  slideInAnimation: 'easeIn',
  slideBackAnimation: 'bounceOut',
  slideInDuration: 1500,
  slideBackDuration: 1000,
  hideDuration: 500,
  autoCloseDelay: 7000,
  stickOnClick: true,
  stickWhileHover: true,

  // Private. Do not override!
  isHiding: false,
  readyToHide: false,
  destroyAfterHide: false,
  closeOnMouseOut: false,

  // Caching coordinates to be able to align to final position of siblings being animated
  xPos: 0,
  yPos: 0,

  statics: {
    defaultManager: {
      el: null
    }
  },

  initComponent: function() {
    var me = this;

    // Backwards compatibility
    if (Ext.isDefined(me.corner)) {
      me.position = me.corner;
    }
    if (Ext.isDefined(me.slideDownAnimation)) {
      me.slideBackAnimation = me.slideDownAnimation;
    }
    if (Ext.isDefined(me.autoDestroyDelay)) {
      me.autoCloseDelay = me.autoDestroyDelay;
    }
    if (Ext.isDefined(me.autoHideDelay)) {
      me.autoCloseDelay = me.autoHideDelay;
    }
    if (Ext.isDefined(me.autoHide)) {
      me.autoClose = me.autoHide;
    }
    if (Ext.isDefined(me.slideInDelay)) {
      me.slideInDuration = me.slideInDelay;
    }
    if (Ext.isDefined(me.slideDownDelay)) {
      me.slideBackDuration = me.slideDownDelay;
    }
    if (Ext.isDefined(me.fadeDelay)) {
      me.hideDuration = me.fadeDelay;
    }

    // 'bc', lc', 'rc', 'tc' compatibility
    me.position = me.position.replace(/c/, '');

    me.updateAlignment(me.position);

    me.setManager(me.manager);

    me.callParent(arguments);
  },

  onRender: function() {
    var me = this;

    me.el.hover(
      function () {
        me.mouseIsOver = true;
      },
      function () {
        me.mouseIsOver = false;
        if (me.closeOnMouseOut) {
          me.closeOnMouseOut = false;
          me.close();
        }
      },
      me
    );

    this.callParent(arguments);

  },
  
  updateAlignment: function (position) {
    var me = this;

    switch (position) {
      case 'br':
        me.paddingFactorX = -1;
        me.paddingFactorY = -1;
        me.siblingAlignment = "br-br";
        if (me.useXAxis) {
          me.managerAlignment = "bl-br";
        } else {
          me.managerAlignment = "tr-br";
        }
        break;
      case 'bl':
        me.paddingFactorX = 1;
        me.paddingFactorY = -1;
        me.siblingAlignment = "bl-bl";
        if (me.useXAxis) {
          me.managerAlignment = "br-bl";
        } else {
          me.managerAlignment = "tl-bl";
        }
        break;
      case 'tr':
        me.paddingFactorX = -1;
        me.paddingFactorY = 1;
        me.siblingAlignment = "tr-tr";
        if (me.useXAxis) {
          me.managerAlignment = "tl-tr";
        } else {
          me.managerAlignment = "br-tr";
        }
        break;
      case 'tl':
        me.paddingFactorX = 1;
        me.paddingFactorY = 1;
        me.siblingAlignment = "tl-tl";
        if (me.useXAxis) {
          me.managerAlignment = "tr-tl";
        } else {
          me.managerAlignment = "bl-tl";
        }
        break;
      case 'b':
        me.paddingFactorX = 0;
        me.paddingFactorY = -1;
        me.siblingAlignment = "b-b";
        me.useXAxis = 0;
        me.managerAlignment = "t-b";
        break;
      case 't':
        me.paddingFactorX = 0;
        me.paddingFactorY = 1;
        me.siblingAlignment = "t-t";
        me.useXAxis = 0;
        me.managerAlignment = "b-t";
        break;
      case 'l':
        me.paddingFactorX = 1;
        me.paddingFactorY = 0;
        me.siblingAlignment = "l-l";
        me.useXAxis = 1;
        me.managerAlignment = "r-l";
        break;
      case 'r':
        me.paddingFactorX = -1;
        me.paddingFactorY = 0;
        me.siblingAlignment = "r-r";
        me.useXAxis = 1;
        me.managerAlignment = "l-r";
        break;
      }
  },
  
  getXposAlignedToManager: function () {
    var me = this;

    var xPos = 0;

    // Avoid error messages if the manager does not have a dom element
    if (me.manager && me.manager.el && me.manager.el.dom) {
      if (!me.useXAxis) {
        // Element should already be aligned verticaly
        return me.el.getLeft();
      } else {
        // Using getAnchorXY instead of getTop/getBottom should give a correct placement when document is used
        // as the manager but is still 0 px high. Before rendering the viewport.
        if (me.position == 'br' || me.position == 'tr' || me.position == 'r') {
          xPos += me.manager.el.getAnchorXY('r')[0];
          xPos -= (me.el.getWidth() + me.paddingX);
        } else {
          xPos += me.manager.el.getAnchorXY('l')[0];
          xPos += me.paddingX;
        }
      }
    }

    return xPos;
  },

  getYposAlignedToManager: function () {
    var me = this;

    var yPos = 0;

    // Avoid error messages if the manager does not have a dom element
    if (me.manager && me.manager.el && me.manager.el.dom) {
      if (me.useXAxis) {
        // Element should already be aligned horizontaly
        return me.el.getTop();
      } else {
        // Using getAnchorXY instead of getTop/getBottom should give a correct placement when document is used
        // as the manager but is still 0 px high. Before rendering the viewport.
        if (me.position == 'br' || me.position == 'bl' || me.position == 'b') {
          yPos += me.manager.el.getAnchorXY('b')[1];
          yPos -= (me.el.getHeight() + me.paddingY);
        } else {
          yPos += me.manager.el.getAnchorXY('t')[1];
          yPos += me.paddingY;
        }
      }
    }

    return yPos;
  },

  getXposAlignedToSibling: function (sibling) {
    var me = this;

    if (me.useXAxis) {
      if (me.position == 'tl' || me.position == 'bl' || me.position == 'l') {
        // Using sibling's width when adding
        return (sibling.xPos + sibling.el.getWidth() + sibling.spacing);
      } else {
        // Using own width when subtracting
        return (sibling.xPos - me.el.getWidth() - me.spacing);
      }
    } else {
      return me.el.getLeft();
    }

  },

  getYposAlignedToSibling: function (sibling) {
    var me = this;

    if (me.useXAxis) {
      return me.el.getTop();
    } else {
      if (me.position == 'tr' || me.position == 'tl' || me.position == 't') {
        // Using sibling's width when adding
        return (sibling.yPos + sibling.el.getHeight() + sibling.spacing);       
      } else {
        // Using own width when subtracting
        return (sibling.yPos - me.el.getHeight() - sibling.spacing);
      }
    }
  },

  getNotifications: function (alignment) {
    var me = this;

    if (!me.manager.notifications[alignment]) {
      me.manager.notifications[alignment] = [];
    }

    return me.manager.notifications[alignment];
  },

  setManager: function (manager) {
    var me = this;

    me.manager = manager;

    if (typeof me.manager == 'string') {
      me.manager = Ext.getCmp(me.manager);
    }

    // If no manager is provided or found, then the static object is used and the el property pointed to the body document.
    if (!me.manager) {
      me.manager = me.statics().defaultManager;

      if (!me.manager.el) {
        me.manager.el = Ext.getBody();
      }
    }
    
    if (typeof me.manager.notifications == 'undefined') {
      me.manager.notifications = {};
    }
  },
  
  beforeShow: function () {
    var me = this;

    if (me.stickOnClick) {
      if (me.body && me.body.dom) {
        Ext.fly(me.body.dom).on('click', function () {
          me.cancelAutoClose();
          me.addCls('notification-fixed');
        }, me);
      }
    }

    if (me.autoClose) {
      me.task = new Ext.util.DelayedTask(me.doAutoClose, me);
      me.task.delay(me.autoCloseDelay);
    }

    // Shunting offscreen to avoid flicker
    me.el.setX(-10000);
    me.el.setOpacity(1);
    
  },

  afterShow: function () {
    var me = this;

    var notifications = me.getNotifications(me.managerAlignment);

    if (notifications.length) {
      me.el.alignTo(notifications[notifications.length - 1].el, me.siblingAlignment, [0, 0]);
      me.xPos = me.getXposAlignedToSibling(notifications[notifications.length - 1]);
      me.yPos = me.getYposAlignedToSibling(notifications[notifications.length - 1]);
    } else {
      me.el.alignTo(me.manager.el, me.managerAlignment, [(me.paddingX * me.paddingFactorX), (me.paddingY * me.paddingFactorY)], false);
      me.xPos = me.getXposAlignedToManager();
      me.yPos = me.getYposAlignedToManager();
    }

    Ext.Array.include(notifications, me);

    me.el.animate({
      to: {
        x: me.xPos,
        y: me.yPos,
        opacity: 1
      },
      easing: me.slideInAnimation,
      duration: me.slideInDuration,
      dynamic: true
    });

    this.callParent(arguments);
  },
  
  slideBack: function () {
    var me = this;

    var notifications = me.getNotifications(me.managerAlignment);
    var index = Ext.Array.indexOf(notifications, me)

    // Not animating the element if it already started to hide itself or if the manager is not present in the dom
    if (!me.isHiding && me.el && me.manager && me.manager.el && me.manager.el.dom && me.manager.el.isVisible()) {

      if (index) {
        me.xPos = me.getXposAlignedToSibling(notifications[index - 1]);
        me.yPos = me.getYposAlignedToSibling(notifications[index - 1]);
      } else {
        me.xPos = me.getXposAlignedToManager();
        me.yPos = me.getYposAlignedToManager();
      }

      me.stopAnimation();

      me.el.animate({
        to: {
          x: me.xPos,
          y: me.yPos
        },
        easing: me.slideBackAnimation,
        duration: me.slideBackDuration,
        dynamic: true
      });
    }
  },

  cancelAutoClose: function() {
    var me = this;

    if (me.autoClose) {
      me.task.cancel();
    }
  },

  doAutoClose: function () {
    var me = this;

    if (!(me.stickWhileHover && me.mouseIsOver)) {
      // Close immediately
      me.close();
    } else {
      // Delayed closing when mouse leaves the component.
      me.closeOnMouseOut = true;
    }
  },

  removeFromManager: function () {
    var me = this;

    if (me.manager) {
      var notifications = me.getNotifications(me.managerAlignment);
      var index = Ext.Array.indexOf(notifications, me);
      if (index != -1) {
        Ext.Array.erase(notifications, index, 1);

        // Slide "down" all notifications "above" the hidden one
        for (;index < notifications.length; index++) {
          notifications[index].slideBack();
        }
      }
    }
  },

  hide: function () {
    var me = this;

    // Avoids restarting the last animation on an element already underway with its hide animation
    if (!me.isHiding && me.el) {

      me.isHiding = true;

      me.cancelAutoClose();
      me.stopAnimation();

      me.el.animate({
        to: {
          opacity: 0
        },
        easing: 'easeIn',
        duration: me.hideDuration,
        dynamic: false,
        listeners: {
          afteranimate: function () {
            me.removeFromManager();
            me.readyToHide = true;
            me.hide(me.animateTarget, me.doClose, me);
          }
        }
      });
    }

    // Calling parent's hide function to complete hiding
    if (me.readyToHide) {
      me.isHiding = false;
      me.readyToHide = false;
      me.removeCls('notification-fixed');
      me.callParent(arguments);
      if (me.destroyAfterHide) {
        me.destroy();
      }
    }
  },

  destroy: function () {
    var me = this;

    if (!me.hidden) {
      me.destroyAfterHide = true;
      me.hide(me.animateTarget, me.doClose, me);
    } else {
      me.callParent(arguments);
    }
  }

});

Ext.define('Buildit.ux.Notification', {
  extend: 'Ext.ux.window.Notification',
  alias: 'widget.buildit-Notification',

  ui: 'plain',
  corner: 'tr',
  closable: false,
  manager: 'feedback',
  autoDestroyDelay: 4000,
  slideInDelay: 500,
  slideDownDelay: 500,
  slideInAnimation: 'bounceOut',
  slideDownAnimation: 'easeIn',
  maxWidth: 800,
  padding: '0 0 20 0',

  initComponent:function(){
    var me = this;

    this.callParent(arguments);
  }
});

Buildit.addToCanvas  = function(component){

  var canvas = Ext.getCmp('canvas');
  canvas.add(component);
  canvas.setActiveTab(component);
};


Buildit.infoMsg = function(message){
  Ext.create('Buildit.ux.Notification', {
    bodyCls: 'ux-notification-information',
    html: message
  }).show();
};


Buildit.errorMsg = function(message){
  Ext.create('Buildit.ux.Notification', {
    bodyCls: 'ux-notification-error',
    html: message
  }).show();
};



Buildit.getTargetSlot = function(){
  var targetId = (Buildit.uiMode === 'workspace' ? 'workspace' : 'canvas');
  return Ext.getCmp(targetId);
};

Ext.define('Buildit.util.ComponentManager', {
  singleton: true,

  MAP: {},

  register:function(parent, child){
	  var children = this.MAP[parent.id] || [];
	  children.push(child);
	  this.MAP[parent.id] = children;
  },

  hideChildren:function(parent){
    var children = this.MAP[parent.id] || [];
    Ext.Array.each(children, function(cmp, idx, all){
	    try
	      {
		      cmp.hide();
	      }
      catch(err)
        {
		      console.log('An error occured closing down the component' + idx, err);
	      }
    });
  },

  removeChildren:function(parent){
    console.log('removing the parent and all children');
  }
	
});
Ext.define("Buildit.lib.Model", {
  extend: "Ext.data.Model",
  statics: {
    load: function(id, config){
      config = Ext.apply({}, config);

      var params={};
      params[this.prototype.idProperty] = id;

      config = Ext.applyIf(config, {
          action: 'read',
          params: params
      });

      var operation  = Ext.create('Ext.data.Operation', config),
          scope      = config.scope || this,
          record     = null,
          callback;

      callback = function(operation) {
          if (operation.wasSuccessful()) {
              record = operation.getRecords()[0];
              Ext.callback(config.success, scope, [record, operation]);
          } else {
              Ext.callback(config.failure, scope, [record, operation]);
          }
          Ext.callback(config.callback, scope, [record, operation]);
      };

      this.proxy.read(operation, callback, this);
    }
  }
});
Ext.define('Buildit.lib.RemotingProvider', {
  extend: 'Ext.direct.RemotingProvider',

    constructor: function() {
      this.callParent(arguments);
      this.on('call',this.onCallEvent);
      this.on('data',this.onDataEvent);
    },

    statics: {
      runningRequests: 0,
      /* 
       * @return {boolean} if there are any batched requests in the provider
       */
      hasRunningRequests: function() {
        return this.runningRequests !== 0;
      }
    },

    onCallEvent: function() {
      Buildit.lib.RemotingProvider.runningRequests++;
    },

    onDataEvent: function(data) {
      if(data.transaction instanceof Array) {
        Buildit.lib.RemotingProvider.runningRequests -= data.transaction.length;
      } else {
        Buildit.lib.RemotingProvider.runningRequests--;
      }
    }

});
Ext.define('Buildit.lib.SocketManager', {
  singleton: true,

  SOCKETS : {},

  /**
   * Adds a new socket to the socket manager for retrieval/use at a future time.
   */
  add     : function(name, socket){
    this.SOCKETS[name] = socket;
  }, // add

  /**
   *
   */
  get     : function(name){
    return this.SOCKETS[name];
  }, // get


  /**
   *
   */
  remove  : function(name){

  } // remove

});
Ext.define('Buildit.util.Bookmark', {	
	statics: {
	  resolveNavigation: function(record){
	    // extract the record type
	    var bookmarkable_type   = record.get('bookmarkable_type');

	    context = Buildit.lib.ServerContext.client_side.mapping[bookmarkable_type]

	    
	    if(context.store){    
	      // fetch a reference to the main application canvas
	      var canvas = Ext.getCmp('canvas');

	      // load the record as we only have the approval_request up until now
	      var store  = Ext.create(context.store);
	      var clause = {};

	      var primaryKey = store.model.prototype.idProperty;

	      clause[primaryKey] = { equal_to: record.get('bookmarkable_id') };
	      store.proxy.extraParams.search = { with: clause };

	      store.load(function(records, operation, success){
	        if(records.length > 0){
	          var inspector = Ext.createWidget({xtype: context.inspector, record: records[0]});
	          canvas.add(inspector);
	          inspector.show();
	          canvas.setActive(inspector);
	        }
	      });
	    } else {
	      console.log(bookmarkable_type + " has not been configured for client navigation. Ensure you have run rake buildit:context if you have already configured this object.");
	    }
	  }	
  }
});
/**
 * This is a utility or helper class to be used for color related information or actions.
 *
 */

Ext.define('Buildit.util.Color', {	
	statics: {
		
		/**
		 * @property {String} PURPLE
		 */
		PURPLE:                '#9A2599',
		
		/**
		 * @property {String} MAGENTA
		 */
		MAGENTA:               '#FF0097',
		
		/**
		 * @property {String} TEAL
		 */
		TEAL:                  '#00ABA9',
		
		/**
		 * @property {String} LIME
		 */
		LIME:                  '#8CBF26',
		
		/**
		 * @property {String} BROWN
		 */
		BROWN:                 '#A05000',
		
		/**
		 * @property {String} PINK
		 */
		PINK:                  '#E671B8',
		
		/**
		 * @property {String} ORANGE
		 */
		ORANGE:                '#F09609',

		/**
		 * @property {String} BLUE
		 */
		BLUE:                  '#1BA1E2',
		
		/**
		 * @property {String} RED
		 */
		RED:                   '#E51400',
		
		/**
		 * @property {String} ORANGE
		 */
		GREEN:                 '#339933',

		/**
		 * @property {String} DARKGRAY
		 */
		DARKGRAY:              '#666666',

		/**
		 * @property {String} LIGHTBLUE
		 */
		LIGHTBLUE:             '#71B1D1',
		
		/**
		 * @property {String} DARKBLUE
		 */
		DARKBLUE:              '#519BBD',


		DARKESTGRAY:           '#262626',
		
		
		
		approved:function(color){
			var approvedColor = color;

			if(Buildit.util.Color.hasOwnProperty(color.toUpperCase())){
	      approvedColor = Buildit.util.Color[color.toUpperCase()];
		  }
			return approvedColor;
		}

	},
	
	constructor	: function(options){
			this.initConfig(options);
	}
	
	
})
;
Ext.define('Buildit.util.Context', {	
	statics: {
	  serverModelFor: function(model){
	    var modelName = undefined;

      Ext.Object.each(Buildit.lib.ServerContext.client_side.mapping, function(serverModel,context,allContext){
      	if(context.model === model){
      		modelName = serverModel;
      		return false;
      	}
      });

	    return modelName;
	  }	
  }
});
Ext.define('Buildit.util.Data', {	
	statics: {
	  search_to_object: function(filter){
	    var result = {};
	    
	    if(typeof(filter) == 'object'){
	      var withClause = filter.with || {};
	      var keys = Object.keys(withClause);
	      
	      Ext.each(keys, function(key){
	        var clause = withClause[key];
	        if(Ext.isDefined(clause['equal_to'])){
	          result[key] = clause.equal_to;
	        }
	      });
	      
	    }
	    
	    return result;
	  }	
  }
});
Ext.define('Buildit.util.EventNavigator', {	
	statics: {
	  resolveNavigation: function(record){
	    // extract the record type
	    var eventable_type   = record.get('eventable_type');

	    context = Buildit.lib.ServerContext.client_side.mapping[eventable_type]

	    
	    if(context.store){    
	      // fetch a reference to the main application canvas
	      var canvas = Ext.getCmp('canvas');

	      // load the record as we only have the approval_request up until now
	      var store  = Ext.create(context.store);
	      var clause = {};

	      var primaryKey = store.model.prototype.idProperty;

	      clause[primaryKey] = { equal_to: record.get('eventable_id') };
	      store.proxy.extraParams.search = { with: clause };

	      store.load(function(records, operation, success){
	        if(records.length > 0){
	          var inspector = Ext.createWidget({xtype: context.inspector, record: records[0]});
	          canvas.add(inspector);
	          inspector.show();
	          canvas.setActive(inspector);
	        }
	      });
	    } else {
	      console.log(eventable_type + " has not been configured for client navigation. Ensure you have run rake buildit:context if you have already configured this object.");
	    }
	  }	
  }
});
/**
 * @class Buildit.util.Format
 *
 * @singleton
 *
 * Here is my basic example
 *
 */

Ext.define('Buildit.util.Format', {
	singleton: true,

  modelRenderer:function(){
    return function(value, obj, row, a, b, rowStore, view) {
			return Buildit.lib.ServerContext.client_side.mapping[value].display;
		}
  },


	percentageRenderer: function(){
		return function(value, obj, row, a, b, rowStore, view) {
			return [value * 100, '%'].join('');
		}
	},


  stringWrapRenderer: function(length){
    return function(value, obj, row, a, b, rowStore, view) {
      var displayString = (length != undefined ? value.substring(0, length) : value);
      return '<div style="white-space:normal !important;">'+ displayString +'...</div>';
    }
  },


    /**
      * @method lookupRenderer
      * Returns the display value for a lookups value
      * @param {String} category The category of lookup the value is bound to.
      */
	lookupRenderer: function(category) {

		return function(value, obj, row, a, b, rowStore, view) {

		  var store = undefined;
		  var lookupStoreId = category + '-lookup-Store';

			if (Ext.isDefined(Ext.data.StoreManager.lookup(lookupStoreId))) {
				store = Ext.data.StoreManager.lookup(lookupStoreId);
			}
			else
			{
				store = Ext.create('Buildit.store.Lookup', {
					storeId: lookupStoreId,
					category: category
				});

				store.on('load', function( ref, records, successful, eOpts ){
					view.refresh();

			  });
			}

		  var idx = store.find('code', String(value));
	    var rec = store.getAt(idx);

	    if (rec) {
			  return rec.get('default_text');
	    };

	    return '';
	}

}
});
Ext.define('Buildit.util.LookupManager', {
  singleton: true,

  configuredLookups: [],

  autoLoad: true,


  /**
   *
   */
  eagerLoad: function(string_or_array){
  	var param = string_or_array.constructor === Array ? string_or_array : new Array(string_or_array);
    this.configuredLookups = Ext.Array.merge(this.configuredLookups, param);
  },

  load : function(){
    var me = this;
    
  	Ext.Array.each(me.configuredLookups, function(category){

      var lookupStoreId = category + '-lookup-Store';

      if (Ext.isDefined(Ext.data.StoreManager.lookup(lookupStoreId))) {
        store = Ext.data.StoreManager.lookup(lookupStoreId);
      } else {
        store = Ext.create('Buildit.store.Lookup', {
          storeId: lookupStoreId,
          category: category
        });
      }
    });
  }
  
});
/*
  Default Fieldset width to maxWidth of 800
*/

Ext.override(Ext.form.FieldSet, {
  maxWidth  : 800,
  padding   : '0 10 0 0',
  defaults:     {anchor: '95%'},
});
Ext.define('Buildit.util.Runtime', {
  singleton: true
  
});
/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */

(function(){var root=typeof exports=="undefined"?window:exports;var config={check_mime_type:true};root.Retina=Retina;function Retina(){}Retina.configure=function(options){if(options==null)options={};for(var prop in options)config[prop]=options[prop]};Retina.init=function(context){if(context==null)context=root;var existing_onload=context.onload||new Function;context.onload=function(){var images=document.getElementsByTagName("img"),retinaImages=[],i,image;for(i=0;i<images.length;i++){image=images[i];retinaImages.push(new RetinaImage(image))}existing_onload()}};Retina.isRetina=function(){var mediaQuery="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(root.devicePixelRatio>1)return true;if(root.matchMedia&&root.matchMedia(mediaQuery).matches)return true;return false};root.RetinaImagePath=RetinaImagePath;function RetinaImagePath(path,at_2x_path){this.path=path;if(typeof at_2x_path!=="undefined"&&at_2x_path!==null){this.at_2x_path=at_2x_path;this.perform_check=false}else{this.at_2x_path=path.replace(/\.\w+$/,function(match){return"@2x"+match});this.perform_check=true}}RetinaImagePath.confirmed_paths=[];RetinaImagePath.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};RetinaImagePath.prototype.check_2x_variant=function(callback){var http,that=this;if(this.is_external()){return callback(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return callback(true)}else if(this.at_2x_path in RetinaImagePath.confirmed_paths){return callback(true)}else{http=new XMLHttpRequest;http.open("HEAD",this.at_2x_path);http.onreadystatechange=function(){if(http.readyState!=4){return callback(false)}if(http.status>=200&&http.status<=399){if(config.check_mime_type){var type=http.getResponseHeader("Content-Type");if(type==null||!type.match(/^image/i)){return callback(false)}}RetinaImagePath.confirmed_paths.push(that.at_2x_path);return callback(true)}else{return callback(false)}};http.send()}};function RetinaImage(el){this.el=el;this.path=new RetinaImagePath(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var that=this;this.path.check_2x_variant(function(hasVariant){if(hasVariant)that.swap()})}root.RetinaImage=RetinaImage;RetinaImage.prototype.swap=function(path){if(typeof path=="undefined")path=this.path.at_2x_path;var that=this;function load(){if(!that.el.complete){setTimeout(load,5)}else{that.el.setAttribute("width",that.el.offsetWidth);that.el.setAttribute("height",that.el.offsetHeight);that.el.setAttribute("src",path)}}load()};if(Retina.isRetina()){Retina.init(root)}})();
//     ____________
//    |            |    A Javascript parser for vCards
//    |  vCard.js  |    Created by Mattt Thompson, 2008
//    |            |    Released under the MIT License
//     ̅̅̅̅̅̅̅̅̅̅̅̅

// Adding Javascript 1.6 Compatibility
if(!Array.prototype.forEach){Array.prototype.forEach=function(d,c){c=c||this;for(var b=0,a=this.length;b<a;b++){d.call(c,this[b],b,this)}}}if(typeof Prototype!="undefined"||!Array.prototype.map){Array.prototype.map=function(d,c){c=c||this;var e=[];for(var b=0,a=this.length;b<a;b++){e.push(d.call(c,this[b],b,this))}return e}}if(typeof Prototype!="undefined"||!Array.prototype.filter){Array.prototype.filter=function(d,c){c=c||this;var e=[];for(var b=0,a=this.length;b<a;b++){if(d.call(c,this[b],b,this)){e.push(this[b])}}return e}}["forEach","map","filter","slice","concat"].forEach(function(a){if(!Array[a]){Array[a]=function(b){return this.prototype[a].apply(b,Array.prototype.slice.call(arguments,1))}}});Date.ISO8601PartMap={Year:1,Month:3,Date:5,Hours:7,Minutes:8,Seconds:9};Date.matchISO8601=function(a){return a.match(/^(\d{4})(-?(\d{2}))?(-?(\d{2}))?(T(\d{2}):?(\d{2})(:?(\d{2}))?)?(Z?(([+\-])(\d{2}):?(\d{2})))?$/)};Date.parseISO8601=function(e){var b=this.matchISO8601(e);if(b){var a=new Date,c,d=0;for(var f in this.ISO8601PartMap){if(part=b[this.ISO8601PartMap[f]]){a["set"+f]((f=="Month")?parseInt(part)-1:parseInt(part))}else{a["set"+f]((f=="Date")?1:0)}}if(b[11]){d=(parseInt(b[14])*60)+parseInt(b[15]);d*=((parseInt[13]=="-")?1:-1)}d-=a.getTimezoneOffset();a.setTime(a.getTime()+(d*60*1000));return a}};

vCard = {
  initialize: function(_input){
    var vc = {};
    this.parse(_input, vc);

    vc.prototype = vCard.Base;
    return vCard.extend(vc, vCard.SingletonMethods);
  },
  parse: function(_input, fields) {
    var regexps = {
      simple: /^(version|fn|title|org)\:(.+)$/i,
      complex: /^([^\:\;]+);([^\:]+)\:(.+)$/,
      key: /item\d{1,2}\./,
      properties: /((type=)?(.+);?)+/
    }

    var lines = _input.split(/\r?\n/);
    for (n in lines) {
      line = lines[n];

      if(regexps['simple'].test(line))
      {
        results = line.match(regexps['simple']);
        key = results[1].toLowerCase();
        value = results[2];

        fields[key] = value;
      }

      else if(regexps['complex'].test(line))
      {
        results = line.match(regexps['complex']);
        key = results[1].replace(regexps['key'], '').toLowerCase();

        properties = results[2].split(';');
        properties = Array.filter(properties, function(p) { return ! p.match(/[a-z]+=[a-z]+/) });
        properties = Array.map(properties, function(p) { return p.replace(/type=/g, '') });

        type = properties.pop() || 'default';
        type = type.toLowerCase();

        value = results[3];
        value = /;/.test(value) ? [value.split(';')] : value;

        fields[key] = fields[key] || {};
        fields[key][type] = fields[key][type] || [];
        fields[key][type] = fields[key][type].concat(value);
      }
    }
  },
  SingletonMethods: {
    to_html: function() {
      var output = '<div class="vcard">';

      if(this.photo)
      {
        output += '<img class="photo" src="data:image/png;base64,' + this.photo['base64'][0] + '" />';
      }

      output += '<span class="fn">' + this.fn + '</span>'; // Required



      if(this.title)
      {
        output += '<span class="title">' + this.title + '</span>';
      }

      if(this.org)
      {
        output += '<span class="org">' + this.org + '</span>';
      }

      output += '<hr/>'

      for(type in this.adr)
      {
        for(n in this.adr[type])
        {
          value = this.adr[type][n];

          output += '<address class="adr">';
          output += '<span class="type">' + type + '</span>';
          output += '<div class="content">';

          adr_fields = ['post-office-box', 'extended-address', 'street-address',
                        'locality', 'region', 'postal-code', 'country-name'       ]
          for(field in adr_fields)
          {
            if(value[field])
            {
              output += '<span class="' + adr_fields[field] + '">';
              output += value[field];
              output += '</span>';
            }
          }

          output += '</div>';
          output += '</address>';
        }
      }

      for(type in this.tel)
      {
        for(n in this.tel[type])
        {
          value = this.tel[type][n];
          output += '<span class="tel">';
          output += '<span class="type">' + type + '</span>';
          output += '<span class="value">' + value + '</span>';
          output += '</span>';
        }
      }

      for(type in this.email)
      {
        for(n in this.email[type])
        {
          value = this.email[type][n];
          output += '<span class="email">';
          output += '<span class="type">' + type + '</span>';
          output += '<a class="value" href="mailto:' + value + '">' + value + '</a>';
          output += '</span>';
        }
      }

      for(type in this.url)
      {
        for(n in this.url[type])
        {
          value = this.url[type][n];
          output += '<span class="url">';
          output += '<span class="type">' + type + '</span>';
          output += '<a class="value" href="' + value + '">' + value + '</a>';
          output += '</span>';
        }
      }

      output += '</div>';
      output = output.replace(/\\n/g, '<br/>');
      return output;
    }
  },
  extend : function(dest, source) {
    for (var prop in source) dest[prop] = source[prop];
    return dest;
  },

  Base: {}
}
;
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.context.Settings', {
  statics: {
    click:function(btn){
      Buildit.model.User.load(Buildit.context.user.user_id, {
        success : function(record, operation){
          var me              = this,
              targetConfig    = btn.target,
              canvas          = Buildit.getTargetSlot(),
              additionalConf  = {
                record        : record,
                backTabIndex  : me.id
              };

          if(!Ext.Object.isEmpty(targetConfig)){
            var target = Ext.createWidget(Ext.merge(additionalConf, targetConfig));
            canvas.add(target);
            target.show();
            canvas.setActive(target);
          }
        }
      });
    }
  }
});
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.explorer.action.Delete', {
  statics: {
    click:function(btn){
      var explorerGridView = btn.ownerCt.contextOwner.down('grid').getView();
      var selectedItems = explorerGridView.getSelectionModel().getSelection();
      var store = btn.ownerCt.contextOwner.store;

      Ext.Msg.confirm(
        'Confirm Delete',
        'You are about to delete the selected record(s), are you sure?',
        function(btn){
          if(btn == 'yes'){
            Ext.each(selectedItems, function(item){
              store.remove(item);
            });

            store.sync();
          };
        }
      );
    }
  }
});
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.explorer.action.DeselectAll', {
  statics: {
    click:function(btn){
      var explorerGridView = btn.ownerCt.contextOwner.down('grid').getView();
      var selectedItems = explorerGridView.getSelectionModel().deselectAll();
    }
  }
});
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.explorer.action.Export', {
  statics: {
    click:function(btn){
      var explorer = btn.ownerCt.contextOwner;

      var search    = explorer.store.proxy.extraParams.search;
      var criteria  = '';

      var params = {};
      var sorters = [];
    
      Ext.merge(params, explorer.store.proxy.extraParams);
      Ext.merge(params, {export: {filename: 'export.csv'}});

      explorer.store.proxy.api.read(params, function(response, e){
        Ext.getDom('export-iframe').src = response.url;
      });

    }
  }
});
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.explorer.action.New', {
  statics: {
    click:function(btn){
      console.log(btn);
      var explorer = btn.ownerCt.contextOwner;
      if(Ext.defined(explorer.newForms) && explorer.newForms != []){
        var banner = explorer.down('buildit-explorer-Banner');
        console.log(explorer, banner);
        banner.launchNew(btn);
      }
    },
    beforerender:function(btn){
      var explorer = btn.ownerCt.contextOwner;
      console.log(explorer, explorer.new);
      if(explorer.newForms == undefined || explorer.newForms.length == 0){
        console.log(btn);
        btn.setDisabled(true);
      }
    }
  }
});
/**
 *  The DELETE button will be clicked from the context menu bound to the gridview.
 */

Ext.define('Buildit.logic.explorer.action.SelectAll', {
  statics: {
    click:function(btn){
      var explorerGridView = btn.ownerCt.contextOwner.down('grid').getView();
      var selectedItems = explorerGridView.getSelectionModel().selectAll();
    }
  }
});
Ext.define('Buildit.model.Application', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'application_id',              type: 'string'   },    
      { name: 'application_code',            type: 'string'   },    
      { name: 'hub_xtype',                   type: 'string'   },    
      { name: 'application_name',            type: 'string'   },    
      { name: 'description',                 type: 'string'   },    
      { name: 'is_enabled',                  type: 'boolean'  },    
      { name: 'is_destroyed',                type: 'boolean'  },    
      { name: 'revision_number',             type: 'integer'  }    
   
  ],

  idProperty: 'application_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Application.create,
      read:    Buildit.service.Application.read,
      update:  Buildit.service.Application.update,
      destroy: Buildit.service.Application.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.ApplicationRole', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'application_role_id',         type: 'string'   },    
      { name: 'application_id',              type: 'string'   },    
      { name: 'role_id',                     type: 'string'   },    
      { name: 'is_enabled',                  type: 'boolean'  },
      { name: 'role_code',                   type: 'string'   },
      { name: 'application_code',            type: 'string'   }   
   
  ],

  idProperty: 'application_role_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.ApplicationRole.create,
      read:    Buildit.service.ApplicationRole.read,
      update:  Buildit.service.ApplicationRole.update,
      destroy: Buildit.service.ApplicationRole.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.Attachment', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'attachment_id',               type: 'string'   },    
      { name: 'attachable_type',             type: 'string'   },    
      { name: 'attachable_id',               type: 'string'   },    
      { name: 'content_id',                  type: 'string'   },
      { name: 'tmp_content_id',              type: 'string'   },   
      { name: 'file_name',                   type: 'string'   },    
      { name: 'mime_type',                   type: 'string'   },    
      { name: 'byte_size',                   type: 'integer'  },    
      { name: 'locale',                      type: 'string'   },    
      { name: 'is_enabled',                  type: 'boolean'  },    
      { name: 'is_destroyed',                type: 'boolean'  },    
      { name: 'revision_number',             type: 'integer'  },   
      { name: 'attachment_type',             type: 'string'   },
      { name: 'is_internal',                 type: 'boolean'  }
  ],

  idProperty: 'attachment_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Attachment.create,
      read:    Buildit.service.Attachment.read,
      update:  Buildit.service.Attachment.update,
      destroy: Buildit.service.Attachment.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.Audit', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'model_audit_id',              type: 'string'   },    
      { name: 'model_id',                    type: 'string'   },    
      { name: 'user_id',                     type: 'string'   },    
      { name: 'action',                      type: 'string'   },       
      { name: 'audited_at',                  type: 'datetime' },
      
      { name: 'user_name',                   type: 'string'   }   
   
  ],

  idProperty: 'model_audit_id',
  
  proxy: {
    type: 'direct',
    api: {
      read:    Buildit.service.Audit.read
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.Bookmark', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'bookmark_id',
      type       : 'string'
    },
    {
      name       : 'bookmarkable_type',
      type       : 'string'
    },
    {
      name       : 'bookmarkable_id',
      type       : 'string'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    {
      name       : 'is_enabled',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    },
    {
      name       : 'revision_number',
      type       : 'integer'
    },
    {
      name       : 'audit_created_by',
      type       : 'string'
    },
    {
      name       : 'audit_updated_by',
      type       : 'string'
    },
    {
      name       : 'audit_created_at',
      type       : 'date'
    },
    {
      name       : 'audit_updated_at',
      type       : 'date'
    },
    {
      name       : 'user_full_name',
      type       : 'string'
    }

  ],

  idProperty : 'bookmark_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Buildit.service.Bookmark.create,
      read       : Buildit.service.Bookmark.read,
      update     : Buildit.service.Bookmark.update,
      destroy    : Buildit.service.Bookmark.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Buildit.model.Bookmark'
;
Ext.define('Buildit.model.Dashlet', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string' },
			{ name: 'dashlet_code',                type: 'string' },
			{ name: 'component',                   type: 'string' },
			{ name: 'name',                        type: 'string' },
			{ name: 'summary',                     type: 'string' },
			{ name: 'detail',                      type: 'text'   },
			{ name: 'vendor_code',                 type: 'string' },
			{ name: 'version',                     type: 'string' },
			{ name: 'released_on',                 type: 'date'   },
			{ name: 'logo_path',                   type: 'string' },
			{ name: 'is_destroyed',                type: 'boolean'}
	  ],

	idProperty: 'dashlet_code',


	proxy: {
	  type: 'direct',
	 	api: {
	 	  create: Buildit.service.Dashlet.create,
	 		read: Buildit.service.Dashlet.read,
	 	  update: Buildit.service.Dashlet.update,
	 		destroy: Buildit.service.Dashlet.destroy
	 	},
	 	reader: {
	 	  type : 'json',
	 		root : 'records',
	 		totalProperty  : 'total',
	 		successProperty: 'success'
	 	}
	},


  validations: [
					  { type: 'presence', field: 'component' },
					  { type: 'presence', field: 'name' },
					  { type: 'presence', field: 'summary' },
					  { type: 'presence', field: 'vendor_code' },
					  { type: 'presence', field: 'version' }
		
  ]

});
Ext.define('Buildit.model.Event', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'display_as',                  type: 'string'   },
    { name: 'event_id',                    type: 'string'   },
    { name: 'title',                       type: 'string'   },
    { name: 'message',                     type: 'string'   },
    { name: 'eventable_type',              type: 'string'   },
    { name: 'eventable_id',                type: 'string'   },
    { name: 'event_type',                  type: 'string'   },
    { name: 'occurred_at',                 type: 'date'     },
    { name: 'user_id',                     type: 'string'   },
    { name: 'full_name',                   type: 'string'   }
  ],

  idProperty: 'event_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Event.create,
      read:    Buildit.service.Event.read,
      update:  Buildit.service.Event.update,
      destroy: Buildit.service.Event.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});
Ext.define('Buildit.model.Lookup', {
  extend   : 'Ext.data.Model',

  fields   : [
    { name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'lookup_id',
      type       : 'string'
    },
    {
      name       : 'code',
      type       : 'string'
    },
    {
      name       : 'code_int',
      type       : 'integer'
    },
    {
      name       : 'category',
      type       : 'string'
    },
    {
      name       : 'default_text',
      type       : 'string'
    },
    {
      name       : 'depends_on',
      type       : 'string'
    },
    {
      name       : 'is_enabled',
      type       : 'boolean'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }
	],

	idProperty  : 'lookup_id',

	proxy       : {
	  type        : 'direct',
	 	api         : {
	 	  create      : Buildit.service.Lookup.create,
	 		read        : Buildit.service.Lookup.read,
	 	  update      : Buildit.service.Lookup.update,
	 		destroy     : Buildit.service.Lookup.destroy
	 	},
	 	reader    : {
	 	  type      : 'json',
	 		root      : 'records',
	 		totalProperty  : 'total',
	 		successProperty: 'success'
	 	}
	},


  validations : [

  ]

});
Ext.define('Buildit.model.Note', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string' },
      { name: 'note_id',                     type: 'string' },
      { name: 'notable_id',                  type: 'string' },
      { name: 'notable_type',                type: 'string' },
      { name: 'detail',                      type: 'string' },
      { name: 'category',                    type: 'string',  default: '0'   },
      { name: 'is_internal',                 type: 'boolean', default: false },
      { name: 'is_destroyed',                type: 'boolean', default: false }
    ],

  idProperty: 'note_id',
  
  proxy: {
    type: 'direct',
    api: {
      create: Buildit.service.Note.create,
      read: Buildit.service.Note.read,
      update: Buildit.service.Note.update,
      destroy: Buildit.service.Note.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
      { type: 'presence', field: 'notable_type' },
      { type: 'presence', field: 'detail' },
      { type: 'presence', field: 'is_destroyed' }
  
  ]

});
Ext.define('Buildit.model.Permission', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'permission_id',               type: 'string'   },
      { name: 'role_id',                     type: 'string'   },
      { name: 'privilege_id',                type: 'string'   },
      { name: 'is_enabled',                  type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'revision_number',             type: 'integer'  },
      { name: 'role_code',                   type: 'string'   },
      { name: 'module_code',                 type: 'string'   },
      { name: 'privilege_code',              type: 'string'   }
    ],

  idProperty: 'permission_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Permission.create,
      read:    Buildit.service.Permission.read,
      update:  Buildit.service.Permission.update,
      destroy: Buildit.service.Permission.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});
Ext.define('Buildit.model.Privilege', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'privilege_code',              type: 'string'   },
      { name: 'reference_code',              type: 'string'   },
      { name: 'module_code',                 type: 'string'   },
      { name: 'description',                 type: 'string'   },
      { name: 'is_enabled',                  type: 'boolean'  },
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'revision_number',             type: 'integer'  },
      { name: 'privilege_id',                type: 'string'   }
    ],

  idProperty: 'privilege_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Privilege.create,
      read:    Buildit.service.Privilege.read,
      update:  Buildit.service.Privilege.update,
      destroy: Buildit.service.Privilege.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});
Ext.define('Buildit.model.Role', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'role_id',                     type: 'string'   },    
      { name: 'role_code',                   type: 'string'   },    
      { name: 'description',                 type: 'string'   },    
      { name: 'is_enabled',                  type: 'boolean'  },    
      { name: 'is_destroyed',                type: 'boolean'  }    
   
  ],

  idProperty: 'role_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.Role.create,
      read:    Buildit.service.Role.read,
      update:  Buildit.service.Role.update,
      destroy: Buildit.service.Role.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.User', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'user_id',                     type: 'string'   },    
      { name: 'email_address',               type: 'string'   },    
      { name: 'first_name',                  type: 'string'   },    
      { name: 'last_name',                   type: 'string'   },    
      { name: 'secret_question',             type: 'string'   },    
      { name: 'secret_answer',               type: 'string'   },    
      { name: 'secret_password',             type: 'string'   },    
      { name: 'user_name',                   type: 'string'   },
      { name: 'user_cn',                     type: 'string'   },    
      { name: 'encrypted_password',          type: 'string'   },    
      { name: 'sso_plugin_code',             type: 'string'   },    
      { name: 'api_token',                   type: 'string'   },    
      { name: 'is_locked',                   type: 'boolean'  },    
      { name: 'status',                      type: 'integer'  },    
      { name: 'is_sys_admin',                type: 'boolean'  },    
      { name: 'is_destroyed',                type: 'boolean'  },    
      { name: 'revision_number',             type: 'integer'  },
      { name: 'full_name',                   type: 'string'   },
      { name: 'password',                    type: 'string'   },
      { name: 'password_confirmation',       type: 'string'   }
   
  ],

  idProperty: 'user_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.User.create,
      read:    Buildit.service.User.read,
      update:  Buildit.service.User.update,
      destroy: Buildit.service.User.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.UserRole', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'display_as',                  type: 'string'   },
      { name: 'user_role_id',                type: 'string'   },    
      { name: 'user_id',                     type: 'string'   },    
      { name: 'role_id',                     type: 'string'   },    
      { name: 'is_enabled',                  type: 'boolean'  },    
      { name: 'is_destroyed',                type: 'boolean'  },
      { name: 'user_full_name',              type: 'string'   },
      { name: 'user_email_address',          type: 'string'   },
      { name: 'role_code',                   type: 'string'   } 
   
  ],

  idProperty: 'user_id',
  
  proxy: {
    type: 'direct',
    api: {
      create:  Buildit.service.UserRole.create,
      read:    Buildit.service.UserRole.read,
      update:  Buildit.service.UserRole.update,
      destroy: Buildit.service.UserRole.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },
  

  validations: [
  
  ]

});
Ext.define('Buildit.model.WebHook', {
  extend     : 'Ext.data.Model',

  fields     : [
    { 
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'web_hook_id',
      type       : 'string'
    },
    {
      name       : 'receive_url',
      type       : 'string'
    },
    {
      name       : 'head_attribute',
      type       : 'string'
    },
    {
      name       : 'head_value',
      type       : 'string'
    },
    {
      name       : 'post_attribute',
      type       : 'string'
    },
    {
      name       : 'post_value',
      type       : 'string'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    },
    {
      name       : 'audit_created_by',
      type       : 'string'
    },
    {
      name       : 'audit_updated_by',
      type       : 'string'
    },
    {
      name       : 'audit_created_at',
      type       : 'datetime'
    },
    {
      name       : 'audit_updated_at',
      type       : 'datetime'
    },
    {
      name       : 'revision_number',
      type       : 'integer'
    },
    {
      name       : 'is_enabled',
      type       : 'boolean'
    },
    {
      name       : 'user_full_name',
      type       : 'string'
    }

  ],

  idProperty : 'web_hook_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Buildit.service.WebHook.create,
      read       : Buildit.service.WebHook.read,
      update     : Buildit.service.WebHook.update,
      destroy    : Buildit.service.WebHook.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Buildit.model.WebHook'
;
Ext.define('Buildit.store.Application', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Application',
  model : 'Buildit.model.Application',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.ApplicationRole', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-ApplicationRole',
  model : 'Buildit.model.ApplicationRole',
  storeId : 'ApplicationRoleStore',
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Attachment', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Attachment',
  model : 'Buildit.model.Attachment',
  storeId : 'AttachmentStore',
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Audit', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Audit',
  model : 'Buildit.model.Audit',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Bookmark', {
  extend       : 'Ext.data.Store',
  alias        : 'store.buildit-Bookmark',
  model        : 'Buildit.model.Bookmark',
  autoLoad     : false,
  storeId      : 'BookmarkStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Buildit.store.Bookmark'
;
Ext.define('Buildit.store.Dashlet', {
	extend: 'Ext.data.Store',
	alias: 'store.buildit-Dashlet',
	model : 'Buildit.model.Dashlet',
	autoLoad : false,
	storeId : 'DashletStore',
	remoteFilter : true,
	remoteSort : true,
	constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Event', {
  extend       : 'Ext.data.Store',
  alias        : 'store.buildit-Event',
  model        : 'Buildit.model.Event',
  autoLoad     : false,
  storeId      : 'EventStore',
  remoteFilter : true,
  remoteSort   : true,
  sorters      : [{
    property: 'occurred_at',
    direction: 'DESC'
  }],
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Lookup', {
	extend:'Ext.data.Store',
	alias:'store.buildit-Lookup',

	constructor :function (config) {

		var me = this;

		Ext.apply(this, {
			model        : 'Buildit.model.Lookup',
			autoLoad     : true,
			remoteFilter : false,
			remoteSort   : false,
			storeId      : config.storeId,
			pageSize     : 300,
			filters      : [
        {
          property     :'category',
          value        : config.category
        }
        ]
      });


      this.callParent();
      var proxy = Ext.Object.merge({}, me.getProxy());
      me.setProxy(proxy);
    }

});
Ext.define('Buildit.store.Note', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Note',
  model : 'Buildit.model.Note',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Permission', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Permission',
  model : 'Buildit.model.Permission',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Privilege', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Privilege',
  model : 'Buildit.model.Privilege',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.Role', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-Role',
  model : 'Buildit.model.Role',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.User', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-User',
  model : 'Buildit.model.User',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.UserRole', {
  extend: 'Ext.data.Store',
  alias: 'store.buildit-UserRole',
  model : 'Buildit.model.UserRole',
  autoLoad : false,
  remoteFilter : true,
  remoteSort : true,
  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  }
});
Ext.define('Buildit.store.WebHook', {
  extend       : 'Ext.data.Store',
  alias        : 'store.buildit-WebHook',
  model        : 'Buildit.model.WebHook',
  autoLoad     : false,
  storeId      : 'WebHookStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Buildit.store.WebHook'
;
/**
 * A tile is the primary element that is presented in the section of a hub.
 *
 */

Ext.define('Buildit.ux.Tile', {
  extend   : 'Ext.panel.Panel',
  alias    : 'widget.buildit-Tile',

  title    : '',

  color    : '',

  icon     : undefined,

  states   : [],

  border   : false,

  header   : false,

  target   : undefined,

  miniBadge: undefined,

  badge    : undefined,

  cls      : 'tile',

  layout   : {
    type     : 'vbox',
    align    : 'stretch'
  },

  initComponent: function(){
	  var me = this;

	  //  add a custom event to indicate the tile has been selected
	  me.addEvents(

        /**
         * @event clicked
         * Fires when the tile is clicked. Return false from any listener to stop the clicked event being
         * fired
         * @param {Buildit.ux.Tile} tile The Tile object clicked on
         */
        'clicked'
    );

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
      border: false,
      dock: 'bottom',
      cls: 'footer',
      items: [
        { xtype: 'tbtext', text: me.title, cls: 'title' }
      ]
    });

    if(Ext.isDefined(this.badge)) {
      this.data = {badge: this.badge};
    }

    Ext.applyIf(me, {
      tpl: new Ext.XTemplate('<div class="badge">{badge}</div>', {compiled: true})
    });

    this.miniBadgeText = Ext.createWidget('tbtext', {text: this.miniBadge, cls: 'miniBadge'});
    toolbar.add(['->', this.miniBadgeText]);

    if(this.miniBadge != undefined){
      
    }


	  Ext.apply(this, {
		  dockedItems: [toolbar]
	  });

    // Initiate the component.
    this.callParent();

    // Adds the bodyCls of tile to this component. It is done after the fact in the event that it may have
    // been overrriden previously.
    this.addCls('tile');

    // Color is added based on on the supplied color. Similar to above, it is done after the fact.
    //this.addBodyCls(this.color);

    this.on('render', function(cmp) {
      cmp.body.on('click', function() {
        if(cmp.target){
          var canvas  = Ext.getCmp('canvas');
          var target = canvas.add(cmp.target);
          canvas.setActiveTab(target);
        }
        // fire the custom click event and reference the component
        cmp.fireEvent('clicked', cmp);
      });
	  }, this
	  );

  }, // initComponent

  setMiniBadge : function(value){
    this.miniBadge = value;
    this.miniBadgeText.setText(value);
  }
});

Ext.define('Buildit.ux.BadgeTile', {
  extend   : 'Buildit.ux.Tile',
  alias    : 'widget.buildit-badgeTile',


  initComponent : function(){

    var me = this;

    Ext.applyIf(me, {
      tpl: new Ext.XTemplate('<div class="badge">{badge}</div><div class="subtitle">{subtitle}</div>', {compiled: true})
    });

    this.callParent();

  }, // initComponent


  setBadge : function(content){
    this.badge = content;
    this.renderBadge();
  },

  setSubtitle : function(content){
    this.subtitle = content;
    this.renderBadge();
  }, 

  renderBadge : function(){
    var data = {badge: this.badge, subtitle: this.subtitle};
    this.update(data);
    console.log(this);
  }

}); // Ext.define('Buildit.ux.Tile'
;
/**
 *
 */

Ext.define('Buildit.ux.Banner', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.buildit-Banner',

  /**
   * @cfg {Component} The component that this banner belongs to
   */
  parent: undefined,


  /**
   * @cfg {Boolean} Indicates if there should be a spacer before the title
   */
  indentTitle: true,


  /**
   * @cfg {Boolean} Indicates if a back button should be exposed on the banner
   */
  allowBack: false,

  /**
   * @cfg {String} The title to appear on the banner
   */
  bannerTitle: '',

  /**
   * @cfg {String} The subtitle to appear on the banner
   */
  bannerSubtitle: '',


  mode: 'dark',

  initComponent:function(){
    var me = this;

    var requiredConfigs = ['parent'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.Banner is undefined: ' + cfg);
      }
    });

    this.bannerTitle      = this.title || this.parent.title;
    this.bannerSubtitle   = this.subtitle || this.parent.subtitle;


    var classes = 'banner ';

    if(this.mode == 'light'){
      classes = 'banner.light ';
    };

    if(Ext.isDefined(this.withCls)){
      classes = classes + this.withCls;
    };

    Ext.applyIf(this, {
      header     : false,
      height     : 120,
      cls        : classes,
      defaults   : {
        ui         : 'plain',
        margin     : 0
      }
    });

    me.callParent();
    this.setup();

  }, // initComponent


  setup : function(){
    var me = this;

    this.actionGroup = Ext.create('Ext.container.Container', {
      layout    : 'hbox',
      cls       : 'action-group',
      defaults  : {
        ui      : 'plain'
      }
    });

    if(this.indentTitle == true && this.allowBack == false){
      this.add({xtype: 'tbspacer', width: 60});
    };

    if(this.allowBack == true){
      this.add(
        {
          handler           : this.navigateBack,
          scope             : this,
          cls               : 'back',
          ui                : 'plain'
        },
        {
          xtype             : 'tbspacer',
          width             : 20
        }
      );
    };

    this.add([
      {
        flex                : 1,
        xtype               : 'panel',
        bodyCls             : 'title-block',
        data                : {
          title               : this.bannerTitle,
          subtitle            : this.bannerSubtitle
        },
        tpl                : Ext.XTemplate('<h2>{subtitle}</h2><h1>{title}</h1>')
      }
    ]);

    this.add(this.actionGroup);

    this.add(
      {
        xtype              : 'tbspacer',
        width              : 60
      }
    );

    // Add each of the parents actions to the actionGroup
    Ext.Array.each(this.parent.actions, function(action){
      me.actionGroup.add(action);
    });

  }, // setup

  /**
   *
   */
  navigateBack :function(){
    window.history.back();
    this.parent.close();
  }, // navigateBack

  /**
   * Fetches and returns a collection of actions for this banner. This should only
   */
  getActions : function() {
    return this.actionGroup.items;
  }, // getActions


  /**
   * Iterates over each action in the actionGroup and informs it to refresh itself
   * by recalling the beforerender event for each. This in turn will allow any action
   * that contains any special presentation logic, typically exhibited on startup
   * to be re-run.
   */
  refreshActions : function(parent, banner){
    var me = banner;
    Ext.Array.each(me.actionGroup.items.items, function(action){
      action.fireEvent('beforerender', action);
    });

  } // refreshActions


});
/**
 *
 */

Ext.define('Buildit.ux.BlankTile', {
  extend: 'Ext.container.Container',
  alias: 'widget.buildit-BlankTile',
  
  bodyStyle: 'background: transparent',

  initComponent: function(){
    this.callParent();
  }
});
Ext.define('Buildit.ux.BookmarkButton', {
	extend   : 'Ext.button.Button',
	alias    : ['widget.buildit-BookmarkButton', 'widget.bookmark'],
	
  action   : 'bookmark',

  iconCls  : 'icon-bookmark-empty',

  record   : undefined,

  tooltip  : 'Bookmark this record',

  cls      : 'bookmark-action',

  disabled : true,

  model    : undefined,


	initComponent : function(){
    var me = this;

    Ext.apply(me, {
      hidden : me.record.phantom
    });

    me.callParent();

    me.on('render',  me.checkStatus, me);
    me.on('click',   me.toggleState, me);
	}, // initComponent

	checkStatus : function(btn){
		var me = this;

    me.model = Object.getPrototypeOf(me.record).serverSide;

    Buildit.service.Bookmark.getStatus({
        id       : me.record.internalId,
        model    : me.model
      },{
        success  : function(response, operation, success, eOpts){
          me.isBookmarked = response.isBookmarked;
          me.setButtonState();
          me.enable();
        },
        failure  : function(response, operation, success, eOpts){
          btn.hide();
        }
      });

	}, // checkStatus

	toggleState : function(btn){
    var me = this;

    me.disable();
    
    var prototype = Object.getPrototypeOf(me.record);

    me.model = Buildit.util.Context.serverModelFor(prototype.$className);

    Buildit.service.Bookmark.toggle({
        id       : me.record.internalId,
        model    : me.model
      },{
        success  : function(response, operation, success, eOpts){
          me.isBookmarked = response.isBookmarked;
          me.setButtonState();
          me.enable();
        },
        failure  : function(response, operation, success, eOpts){
          btn.hide();
        }
      });
    

	}, // togglePanel

  setButtonState : function(){
    var me = this;
    if(me.isBookmarked === true){
      me.setIconCls('icon-bookmark');
    } else {
      me.setIconCls('icon-bookmark-empty');
    }
  }

}); // Ext.define
;
/**
 *
 */

Ext.define('Buildit.ux.Canvas', {
  extend: 'Ext.tab.Panel',
  alias: 'widget.buildit-Canvas',

  cls: 'desktop',

  border: false,

  header: false,

  id: 'canvas',

  defaults: {
    bodyStyle: 'background: transparent',
    border: false
  },

  initComponent: function(){
    var me = this;

    Ext.apply(this, {
	    listeners: {
			  tabchange: {fn: me.onTabChange, scope: me},
			  afterrender: {fn: me.onAfterRender, scope: me}
			},

    });

    //Ext.util.History.init();
    this.callParent();
    this.tabBar.hide();
    this.mapKeys();
  },

  /**
   *
   */
  mapKeys : function(){
    var homeKey = new Ext.util.KeyMap(Ext.getDoc(), {
      key      : Ext.EventObject.H,
      ctrl     : true,
      shift    : true,
      handler  : this.processHome,
      scope    : this
    });
  }, // mapKeys


  processHome : function(canvas, e){
    e.stopPropagation();
    var activeTabId = this.getLayout().activeItem.getId();

    if(activeTabId !== 'login'){
      this.getLayout().setActiveItem(1);
    }

  }, // processHome


  /**
   *
   */
  onTabChange: function(tabPanel, tab, oldTab, opts) {
    // inform the child managed components to hide
    Buildit.util.ComponentManager.hideChildren(oldTab);
  },

  /**
   * Handle this change event in order to restore the UI to the appropriate history state
   */
  onAfterRender: function() {
/*
    Ext.util.History.on('change', function(token) {
      if (token) {
        var page = token.split(":");
        Ext.getCmp(page[0]).setActiveTab(page[1]);
      }
    });

    var token = Ext.util.History.getToken();
    if(token == undefined){
      Ext.History.add(this.id + ":" + this.getActiveTab().id);
    }
*/
  }

});
/**
 *
 */

Ext.define('Buildit.ux.CardSpace', {

  extend:'Ext.panel.Panel',
  alias:'widget.buildit-CardSpace',
  
  
  layout:'card',

  defaults: {
    border: 0,
    bodyStyle: {
      background: 'transparent'
    }
  },
  
  
  leftItems: [],
  
  rightItems: [],

  cards: [],
  
  flex: 1,
  
  bodyStyle: {
    background: 'transparent'
  },

  initComponent:function () {
    var me = this;

    me.callParent(arguments);

    me.cardButtons = [];

    var toolbar = Ext.create('widget.toolbar', {
      height: 66
    });
    
    toolbar.add(this.leftItems);
    toolbar.add({xtype: 'tbfill'});

    Ext.each(this.cards, function (card) {
      me.processCard(me, card, toolbar);
    });
    
    toolbar.add({xtype: 'tbfill'});
    toolbar.add(this.rightItems);


    me.addDocked(toolbar);
    Ext.apply(this, {
      toolbar: toolbar
    });


  },

  processCard:function (space, card, toolbar) {

    var options = {border: false, flex: 1};

    var iconCls = card.iconCls;
    var title   = card.title;

    // remove the title and add the card as a child item to the CardSpace
    Ext.destroyMembers(card, 'iconCls', 'title');
    space.add(card);

    var isFirst = true;
    if(space.cardButtons.length > 0){
      isFirst = false;
    }

    // now add the corresponding toolbar entry
    var button = Ext.create('Ext.button.Button', {
      text: title,
      iconCls: iconCls,
      setActive: this.cardButtons.length,
      enableToggle: true,
      scale: 'small',
      iconAlign: 'left',
      pressed: isFirst,
      handler: space.onToggle
    });


    space.cardButtons.push(button);
    toolbar.add(button);

  },

  onToggle: function(button, e) {

    var space = button.up("buildit-CardSpace");
    Ext.each(space.cardButtons, function(button, idx){
       button.toggle(false);
    });

    button.toggle(true);
    space.layout.setActiveItem(button.setActive);

  }




});
/**
 * The context menu is designed to replace the standard menu typically used on the
 * contextitem (right-click) event. The paradigm for this menu is that it is a horizontal
 * based menuing system that is based on toolbar.
 * Another key differentiator from the standard menu used for contexts is that it is docked
 * to the viewport by its bottom edge (along the bottom of the window).
 * Unlike the popup, it is not modal, and will allow the user to still have a clear,
 * uninterrupted view of the page/component from which it was initiated.
 *
 * Once the context menu is opened, it may be closed (hidden) by simply clicking the primary
 * viewable area outside of the component itself.
 */

Ext.define('Buildit.ux.ContextMenu', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.buildit-ContextMenu',

  
  /**
   * @cfg {Array} leftActions
   * An array of items designated for the left-side of the context bar.
   */
  leftActions: [],

  /**
   * @cfg {Array} rightActions
   * An array of items designated for the right-side of the context bar.
   */
  rightActions: [],

  /**
   * @cfg {Object} contextOwner (required)
   * A reference to the object to which the context menu is related too.
   */  
  contextOwner: undefined,



  initComponent: function(){
    var me = this;

    if(this.contextOwner == undefined){
      Ext.Error.raise('You must set the contextOwner for this component!');
    }


    this.items = Ext.Array.merge([{xtype: 'tbspacer', width: 40}], this.leftActions, [{ xtype: 'tbfill' }], this.rightActions, [{xtype: 'tbspacer', width: 40}]);

    Ext.apply(this, {
      floating : true,
      shadow   : false,
      border   : false,
      cls      : 'contextBar',
      defaults : {
        ui       : 'plain',
        margin   : 0
      }
    });

    Ext.applyIf(this, {
      style: {background: me.backgroundColor},
      height: 100
    });


    this.callParent();
    
    // resize if the browser resizes
    Ext.EventManager.onWindowResize(this.computePosition, this);
    this.computePosition();
  },

  /**
   * Recomputes the position of the context bar after the browser has been resized.
   * @protected
   */
  computePosition:function(){
    this.setSize(Ext.getBody().getViewSize().width, this.height);
    this.setPosition(0,Ext.getBody().getViewSize().height-this.height);
  }

})
;
Ext.define('Buildit.ux.DateTimePicker', {
  extend: 'Ext.form.FieldContainer',
  mixins: ['Ext.form.field.Field'],
  alias: 'widget.buildit-DateTimePicker',

  presetNow: false,

  initComponent: function(){
    var me = this;

    this.dateField = Ext.create('Ext.form.field.Date', {
      submitValue : false,
      format      : 'm/d/Y'
    });

    this.timePicker = Ext.create('Ext.form.field.Time', {
      submitValue : false,
      margins     : '0 0 0 5'
    });

    Ext.apply(this, {
      combineErrors: true,

      msgTarget : 'side',

      layout    : 'hbox',

      defaults  : {
        hideLabel  : true,
        flex       : 1
      },

      items: [
        this.dateField,
        this.timePicker
      ]
    })


    this.callParent();
    this.initField();

  },


  setValue: function (value) {
    this.value = value;

    var dateValue = ( value ? new Date(value) : undefined );
    if(this.presetNow)
      dateValue = new Date();

    if(dateValue){
      this.value = dateValue;
      this.dateField.setValue(dateValue);
      this.timePicker.setValue(dateValue);
    }
  },

  getValue: function() {
    return this.value;
  }

});
/**
 *
 */

Ext.define('Buildit.ux.Form', {
	extend:'Ext.form.Panel',
	alias:'widget.buildit-Form',


  /**
   * @cfg {Boolean} excludeFromHistory indicates of the form should not be added to
   * the browsers history.
   */
	excludeFromHistory : true,



	backOnNew : false,



	record: undefined,

  /**
   *
   */
	bodyCls: 'form-body',


  /**
   *
  */
	ui: 'plain',


	/**
   * @cfg {Object} bannerConfig represents additional configuration to be applied to the nested banner
   *
   */
	bannerConfig: {},


	/**
   * @cfg {String} mode
   *
   */
	mode: 'normal',

	/**
   * @cfg {Boolean} allowSave
   *
   */
	allowSave: true,


	/**
	 * @cfg {Boolean} allowBookmarking
	 * Indicates if the form supports the bookmarking feature
	 */
	allowBookmarking : false,


	/**
   * @cfg {String} allowSave
   *
   */
	subtitle: undefined,

	/**
   * @cfg {String} allowSave
   *
   */
	newTitle: undefined,


	/**
   * @cfg {String} allowSave
   *
   */
	newSubtitle: undefined,

  /**
   *
   */
	actions: [],


  /**
   *
   */
	autoScroll: true,


  /**
   *
   */
	allowToggleFieldset : true,


  /**
   *
   */
	allowErrorFinder : false,


  /**
   * @cfg {Boolean} Causes the associated banner actions to be refreshed
   */
  autoRefreshActions : true,


  /**
   *
   */
	finder: undefined,


  // IS THIS STILL USED??
	storeName: undefined,



	initComponent:function () {

		var me = this;

		me.addEvents(

		  /**
		   * @event
		   */
		  'recordchanged',


		  /**
		   * @event
		   */
		  'recordsaved'

		);


		if(me.record == undefined && me.association != undefined){
			me.mode = 'association';
		}

		if(me.mode == 'association'){
			me.record = me.association;
		}

		var requiredConfigs = ['record'];
		Ext.each(requiredConfigs, function (cfg) {
			if (!Ext.isDefined(me[cfg])) {
				throw new Error('Required config parameter to Buildit.ux.Form is undefined: ' + cfg);
			}
		});

		me.store = me.record.store;

		if(me.record.phantom){
			me.title     = me.newTitle    || '';
			me.subtitle  = me.newSubtitle || '';
		};

		var actions = [];
    me.setupActions(actions);


		me.actions = Ext.Array.merge(me.actions, actions);
    me.banner  = Ext.create('Buildit.ux.Banner', Ext.merge({
      parent     : me},
      me.bannerConfig
    ));

    Ext.apply(me, {
    	trackResetOnLoad : true
    });


		Ext.applyIf(me, {
			header           : false,
			fieldDefaults    : {
				labelAlign       : 'right',
				labelWidth       : 220,
				msgTarget        : 'under',
				labelSeparator   : '',
				baseCls          : 'fieldset_scheme_0',
				anchor           : '100%',
				labelAttrTpl     : new Ext.XTemplate('<tpl if="allowBlank === false">class="required x-form-item-label x-unselectable x-form-item-label-right"</tpl>', {
				  disableFormats  : true,
				  compiled        : true
				})

			},

			listeners: {
				recordchanged : me.banner.refreshActions
			}
		});



		Ext.apply(me, {
			dockedItems : [
			  me.banner
      ]
		});

		me.callParent();

		me.processFieldsets();

		me.loadRecord(me.record);

		if(me.seeker && me.storeName){
		  var store = Ext.create(me.storeName);
		  store.proxy.setExtraParam('search', me.seeker);
		  store.load(function(provider, response){
		    me.record = response.resultSet.records[0];
		    me.loadRecord(me.record);
		  });
		}

		me.on('render', function(){
		  me.getForm().isValid();
		});

		//me.bookmarkAction.on()


	}, // initComponent


  /**
   * Defines the appropriate actions from the form based on the configuration
   * properties supplied to the form itself.
   */
	setupActions : function(actions) {

	  var me = this;

    if(this.allowErrorFinder){
			Ext.Array.include(actions, {
				xtype    : 'button',
				action   : 'findNextError',
				iconCls  : 'icon-exclamation-sign',
				disabled : true,
				handler  : me.toggleFieldset,
				scope    : me
			});
		};

		if(me.allowBookmarking){
			Ext.Array.include(actions, {
				xtype    : 'bookmark',
				record   : me.record
			});
		};


		if(this.allowToggleFieldset){
			Ext.Array.include(actions, {
				xtype    : 'button',
				action   : 'toggleFieldset',
				iconCls  : 'icon-sort',
				handler  : me.toggleFieldset,
				scope    : me,
				tooltip  : 'Toggle the form fieldsets'
			});
		};


		if(this.allowSave){
			Ext.Array.include(actions, {
				xtype    : 'button',
				action   : 'save',
				iconCls  : 'icon-ok',
				cls      : 'ok-action',
				handler  : me.saveForm,
				scope    : me,
				tooltip  : 'Save this record'
			});
		};

		if(this.mode == 'popup'){
			Ext.Array.include(actions, {
				xtype    : 'button',
				action   : 'cancel',
				iconCls  : 'icon-remove',
				handler  : me.closeForm,
				scope    : me
			});
		};



	}, // setupActions


  /**
   * Applies the default fieldset scheme if one is not already applied
   */
	processFieldsets:function(){
		Ext.each(this.query('fieldset'), function(fieldset){
			var fieldsetScheme = fieldset.scheme || 'fieldset_scheme_0'
			fieldset.addCls(fieldsetScheme);
		});

	}, // processFieldsets


  bookmarkRecord : function(){

    console.log('! About to bookmark or unmark the current record');

  },


  /**
   *
   */
	closeForm: function(){
		this.close();
	}, // closeForm



	saveForm: function(btn){

    //btn.setDisabled(true);
    var me          = this,
        record      = this.record,
        form        = this.getForm(),
        store       = record.store,
        defaultMsg  = 'Please wait...',
        saveMsg     = me.existingMsg || defaultMsg;

    if(record.phantom){
      saveMsg = me.newMsg || defaultMsg;
    }


    var saveMask = new Ext.LoadMask({target: me.up('buildit-Canvas'), msg: saveMsg});
    saveMask.show();

    record.set(form.getFieldValues());

    // establish the exception handler prior to the save
    record.getProxy().on('exception', this.onProxyException, this);

    record.save({
      success: function(record, operation){
        saveMask.hide();
        Buildit.infoMsg('Record Saved Successfully');

        me.store.load();
        form.loadRecord(record);

        me.fireEvent('recordsaved',    me, me.banner);
        me.fireEvent('recordchanged',  me, me.banner);

	    	if(me.mode == 'popup'){

          if(me.backOnNew != true){
            var explorer = me.explorer;

            if(explorer.inspectorConfig.xtype != undefined){
              var canvas = Ext.getCmp('canvas');
              var additionalConf = {
                record       : record,
                backTabIndex : explorer.id
              };

              var inspector = Ext.createWidget(Ext.merge(additionalConf, explorer.inspectorConfig));
              canvas.add(inspector);
              inspector.show();
              canvas.setActive(inspector);
              //me.close();
            } else {
              //me.close();
            }
          } else {
            //me.close();
          }

          me.close();
	    	}
	    },
	    failure : function(record, operation) {
	      //btn.setDisabled(false);
        saveMask.hide();
      }
	  });

	},

	toggleFieldset: function(){
		var fieldsets = this.query('fieldset');
		Ext.each(fieldsets, function(fieldset){
			fieldset.toggle();
		});
	}, // toggleFieldset

	onProxyException : function (proxy, response, operation) {
	  var   me = this,
        form = me.getForm();

    form.clearInvalid();
    var resp = Ext.JSON.decode(response.xhr.responseText).result;
    if(resp.errors)
      me.form.markInvalid(resp.errors);

    var error_message = 'An error occurred trying to save this record';
    if(resp.message)
      error_message = resp.message;

    if(resp.errors)
      error_message = error_message + '. Please fix the highlighted fields and try again.'

    Buildit.errorMsg(error_message);

  },  // onProxyException

  skipNow : function(){
    return this.record.phantom ? false : true;
  }



});
Ext.define('Buildit.ux.Hub', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.buildit-Hub',

  /**
   * @cfg {String} title
   * The columns to display. See the {@link Ext.grid.column.Column column docs} for more details
   */
  title: 'START',

  /**
   * @cfg {String} subTitle
   * The columns to display. See the {@link Ext.grid.column.Column column docs} for more details
   */
  subTitle: 'ENTERPRISE SOLUTION CENTER',


  /**
   * @cfg {Boolean} enableSectionMenu
   * This will determine if the sections will be listed next to the title and made
   * selectable via a dropdown in order to quickly navigate to the selected section without
   * having to manually scroll.
   */
  enableSectionMenu: true,

  bodyCls: 'hub',
  //bodyStyle: 'background: transparent',

  actions:[],

  /**
   * @cfg {Boolean} allowSignout
   * If enabled, an action will be added to the main banner providing the user
   * with the option to signout of the application.
   */
  allowSignout : true,

  /**
   * @cfg {Array} sections
   * The list of section items that will be laid out in the hub container.
   */
  sections: [],


  /**
   * @cfg {"horizontal"/"vertical"} flowDirection
   * The direction that the sections will be laid out in the hub container. If horizontal,
   * the sections will be laid out side-by-side. If vertical, they will be laid out end-to-end.
   */
  flowDirection: 'horizontal',

  header: false,


  bannerConfig: {},

  /**
   * @cfg {Buildit.ux.ContextMenu} contextMenu
   * The context menu for the hub container.
   */
  contextMenu: undefined,

  initComponent: function(){
    var me = this;

    // determines the direction that the sections will be laid out in the Section Slider
    var layoutType = (this.flowDirection == 'horizontal' ? 'hbox' : 'vbox');

    var sectionsContainer = {
      bodyStyle  : 'background: transparent',
      padding    : '0, 0, 0, 60',
      autoScroll : true,
      border     : 0,
      defaults   : {
        margins    : '0 60 60 0',
        xtype      : 'buildit-Section'
      },
      flex       : 1,
      layout     : {type: layoutType},
      items      : this.sections
    };


    var actions = [{
        xtype   : 'tbtext',
        text    : Buildit.context.user.email_address,
        cls     : 'user-email'
      }];

    if(this.allowSignout){
			Ext.Array.include(actions, {
				xtype   : 'button',
				iconCls : 'icon-signout',
        tooltip : 'Sign out of the application',
				handler : me.signOut,
				scope   : me
			});
		};



    this.actions = Ext.Array.merge(this.actions, actions);

    

    this.banner  = Ext.create('Buildit.ux.Banner', Ext.merge({
      parent     : me},
      this.bannerConfig
    ));

     Ext.apply(this, {
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      defaults: {
        border: false
      },
      items: [
        this.banner,
        sectionsContainer
      ]
    });

    this.callParent();
    this.prepareContextMenu();

    Buildit.uiMode = 'hub';

  }, // initComponent

  /**
   *
   */
  prepareContextMenu : function(){

    var ecmXtype = this.contextMenuConfig.xtype;

    if(Ext.isDefined(ecmXtype)){
      var config = Ext.clone(this.contextMenuConfig);
      Ext.destroyMembers(config, 'xtype');

      // set the context menu for the explorer
      this.contextMenu = Ext.createWidget(ecmXtype, Ext.merge(config, {
        contextOwner: this
      }));

      // register the event click
      this.on('render', function(c){
        c.getEl().on('contextmenu', function(e, t){
          e.stopEvent();
          Buildit.util.ComponentManager.register(this, this.contextMenu);
          this.contextMenu.show();
        }, this);

        c.getEl().on('click', function(e,t){
          this.contextMenu.hide();
        }, this);
      });
    };

  },

  signOut:function(btn, e){
    Ext.getCmp('canvas').setActiveTab(0);
  }, // signOut

  onDestroy : function(){
    this.callParent();
    Buildit.uiMode = undefined;

  }
});
/**
 *
 */

Ext.define('Buildit.ux.Locator', {

  extend  : 'Ext.form.field.ComboBox',
  alias   : 'widget.buildit-Locator',



  /**
   * @cfg {Object} defaultSearch
   * Provides a search that will be applied to the locator. This is independent
   * of dependency etc and will be an additive fulltext criteria that is applied
   * to the locator to further refine the locator search criteria.
   */
  defaultSearch : undefined,


  /**
   * @cfg {Ext.data.Store} store (required)
   * The data store bound to the locator that provides the underling data.
   */
  store : undefined,

 
  /**
   * @cfg {String} displayField (required)
   */
  displayField : undefined,


  /**
   * @cfg {String} queryField (required)
   */
  queryField : undefined,


  valueField : undefined,


  name : undefined,


  initialValue : undefined,


  /**
   * @cfg {String} target
   * Basic configuration to allow the locator to present the user with the ability
   * to navigate to another form (generally the inspector) for the record current
   * in the loctor.
   */
  target     : undefined,


  newConfig  : undefined,



  initComponent : function() {

    var me = this;

    var requiredConfig = [
      'store',
      'name'
    ];
    var missingConfigs = [];
    Ext.each(requiredConfig, function(req) {
      if(!me[req]) {
        missingConfigs.push(req);
      }
    });
    if(!Ext.isEmpty(missingConfigs)) {
      throw "Locator is missing the following configuration value(s): "+missingConfigs.join(', ');
    }

    me.pageSize = me.store.pageSize || 10;

    Ext.applyIf(me, {
      emptyTextLabel      : Buildit.i18n.Label.locatorEmptyText,
      searchingLabel      : Buildit.i18n.Label.searching,
      nothingFoundLabel   : Buildit.i18n.Label.nothingFound,
      valueField          : me.name,
      queryField          : me.name,
      displayField        : me.name
    });

    Ext.applyIf(me, {
      emptyText     : me.emptyTextLabel,
      listConfig    : {
        loadingText   : me.searchingLabel,
        emptyText     : me.nothingFoundLabel,
        getInnerTpl   : function() {
          return me.itemTpl || '{' + me.displayField + '}';
        }
      }
    });

    if(Ext.isDefined(me.defaultSearch)){
      me.store.proxy.extraParams.search = me.defaultSearch;
    }

    if(Ext.isDefined(me.gotoTarget)){
      me.setupGotoAction();
    }

    me.setupSearchAction();


    me.callParent();

    me.on('beforequery',   me.onBeforequery, me);
    me.on('beforerender',  me.onBeforerender, me);
    me.on('select',        me.onSelect, me);
    me.on('change',        me.onChange, me);
    me.on('settemprecord', me.fetchFullRecord, me);

    
    // define the clear action on the paging toolbar
    me.setupClearAction();

    if(me.newTarget){
      me.setupNewAction();
    }

    me.store.on('load', function(){
      Ext.Function.defer(function(){
        //me.focus();
      }, 200);
    });

  }, // initComponent

  setupInitialValue : function(field, value){
    var me = this;

    if(Ext.isDefined(me.initialValue) && value !== undefined && value !== ''){
      var modelName = me.store.model.prototype.modelName;
      var record    = Ext.create(modelName);

      record.set(me.valueField, value);
      record.set(me.displayField, me.initialValue);

      me.fireEvent('settemprecord', me, record, value);

      return record;
    }

    return undefined;

  }, // setupInitialValue

  fetchFullRecord : function(cmp, record, value){
    var me = this;
    me.store.load({
      id     : value,
      scope  : me,
      callback: function(records, operation, success) {
        if(records.length > 0){
          var initial = Ext.clone(me.lastSelection);
          Ext.Array.remove(me.lastSelection, record);
          Ext.Array.push(me.lastSelection, records);
        }
      }
    });
  },


  setupSearchAction : function(){
    var me = this;

    var index = Ext.isDefined(me.gotoTarget) ? 2 : 1;
    
    var className = "trigger" + index + "Cls";
    me[className] = Ext.baseCSSPrefix + 'form-search-trigger';

  }, // setupSearchAction


  setupGotoAction : function(){
    var me = this;
    Ext.apply(me, {
      trigger1Cls      : Ext.baseCSSPrefix + 'form-goto-trigger',
      onTrigger1Click  : me.onNavigate
    });
    
  }, // setupGotoAction

  setupClearAction : function(){

    var me      = this,
        toolbar = me.getPicker().pagingToolbar;

    me.toolbar  = toolbar;

    this.on('render', function(cmp){
      // Add separator
      me.toolbar.add({ xtype: 'tbseparator' });

      // Add new action
      me.toolbar.add({ text : 'Clear', handler: me.handleClearAction, scope: me});

    });
    
  }, // setupNewAction

  setupNewAction : function(){
    var me      = this;

    this.on('render', function(cmp){
      // Add new action
      me.toolbar.add({ text : 'New', handler: me.handleNewAction, scope: me});
    });
  }, // setupNewAction

  handleNewAction : function(btn, eOpts){
    
    var me              = this,
        canvas          = Buildit.getTargetSlot(),
        form            = me.up('form');

    me.collapse();
    canvas.mask();

    var modelName = me.store.model.prototype.modelName;

    var record    = Ext.create(modelName);

    var targetCmp = Ext.createWidget(me.newTarget, {
      record   : record
    });

    targetCmp.on('close', function(){
      canvas.unmask();
    });

    targetCmp.on('recordsaved', function(cmp, record){
      me.clearValue();
      Ext.Array.push(me.lastSelection, record);
      var value = record.get(me.valueField);
      me.setValue(value);
      cmp.close();
      me.setEditable(false);
      var next = me.nextNode();
      next.focus(false, 200);
    });

    targetCmp.show();

  }, // handleNewAction


  setRawValue : function(value){
    this.callParent(arguments);
  },


  /**
   *
   */
  onSelect : function(combo, records, eOpts) {
    combo.setEditable(false);
    var next = combo.nextNode();
    next.focus(false, 200);
  }, // onSelect

  /**
   *
   */
  onChange : function(combo, newValue, oldValue, eOpts){
    this.loadValue(this.value);
  }, // onChange

  onBeforequery : function(queryEvent, eOpts) {
    queryEvent.query = this.queryField + ': '+ queryEvent.query;
  },

  onBeforerender : function( combo, eOpts ){
    var me = this;

    if(me.dependsOn !== undefined){
      me.establishDependency();
    }
    this.loadValue(this.value);
  },

  /**
   * The first step is to transform the dependency configuration if a string is supplied.
   * It is perfectly acceptable to pass a string if the field and attribute names are the same.
   * The final configuration needs to look like the following;
   *
   * dependsOn  : {
   *   name       : 'fieldname',
   *   foreignKey : 'attributename'
   * }
   *
   * Once the format is defined, we then bind the current field to the referenced field.
   */
  establishDependency : function(){

    // transform if string is provided
    if(typeof this.dependsOn === 'string'){
      var value = Ext.clone(this.dependsOn);
      this.dependsOn = {
        name: value,
        foreignKey: value,
        fulltext: true
      }
    }

    // locate the related field and store for future use
    this.dependsOnField = this.up('form').getForm().findField(this.dependsOn.name);

    // initialize current field based on related field having a value or not
    var dependsOnValue = this.dependsOnField.value;

    if(dependsOnValue === '' || dependsOnValue === undefined || dependsOnValue === null){
      this.setDisabled(true);
    } else {
      this.setDisabled(false);
      if(this.store.proxy.extraParams.search === undefined){
        this.store.proxy.extraParams.search = {};
      }

      if(this.store.proxy.extraParams.search.with === undefined){
        this.store.proxy.extraParams.search.with = {};
      }

      this.store.proxy.extraParams.search.with[this.dependsOn.foreignKey] = {equal_to: dependsOnValue};
    }

    // handle select on dependent combo/locator
    this.dependsOnField.on('select', function(){
      this.handleDependency();
    }, this);

    // handle clear on a locator
    this.dependsOnField.on('clear', function(){
      this.clearValue();
      this.handleDependency();
    }, this);

  }, // establishDependency


  /**
   *
   */
  handleDependency : function(){

    var dependsOnValue = this.dependsOnField.value;

    if(dependsOnValue === '' || dependsOnValue === undefined || dependsOnValue === null){
      this.setDisabled(true);
    } else {
      this.setDisabled(false);
      this.clearValue();
      if(this.dependsOn.fulltext === true){
        this.store.proxy.extraParams.search = {}
        this.store.proxy.extraParams.search.with = {};
        this.store.proxy.extraParams.search.with[this.dependsOn.foreignKey] = {equal_to: dependsOnValue};
        this.store.load();

      } else {
        // todo - define for regular filters
      }
    }
  }, // handleDependencySelect


  /**
   *
   */
  loadValue : function(value){
    var me = this;

    if(value){
      var foundRec = this.findRecord(this.getName(), value);
      if(foundRec === false){
        this.store.load({
          id     : value,
          scope  : this,
          callback: function(records, operation, success) {
            Ext.Array.push(me.lastSelection, records);
          }
        });
      } else {
        if(value !== null && value !== undefined && value !== ''){
          me.setEditable(false);
        }
      }
    }

    me.checkDirty();
    me.validate();
  }, // loadValue


  /**
   *
   */
  onNavigate : function(){
    
    var me              = this,
        canvas          = Buildit.getTargetSlot(),
        record          = me.findRecord(),
        form            = me.up('form'),
        association     = form.record,
        additionalConf  = {
          record        : record,
          backTabIndex  : me.id
        };

    
    if(!association.phantom){
      var inspector = Ext.createWidget(Ext.merge(additionalConf, {xtype: me.gotoTarget}));
      canvas.add(inspector);
      inspector.show();
      canvas.setActive(inspector);
    }
  }, // onNavigate



  /**
   * This trigger represents the clear button. Upon click, the handler
   * should clear the value and ensure the field is editable.
   */
  handleClearAction : function() {
    this.setEditable(true);
    this.store.clearFilter();
    this.clearValue();
    this.fireEvent('clear', this);
    this.collapse();
  }, // handleClearAction


  findRecord : function(field, value) {
    var foundRec = null;

    Ext.each(this.lastSelection, function(rec) {
      if (rec.get(field) === value) {
        foundRec = rec;
        return false; // stop 'each' loop
      }
    });
    if (foundRec) {
      this.checkDirty();
      return foundRec;
    } else {
      
      foundRec = this.setupInitialValue(field, value);
      if(foundRec){
        return foundRec;
      }
      return this.callParent(arguments);
    }
  }, // findRecord

  clearValue : function(){
    this.setValue('');
    this.checkDirty();
  }

});
Ext.define('Buildit.ux.Login', {
  extend   : 'Ext.panel.Panel',
  alias    : 'widget.buildit-Login',


  layout   : 'border',

  cls      : 'login',


  initComponent:function(){
    var me = this;

    var login = new Ext.FormPanel({
	    waitMsgTarget : true,
			border        : false,
			labelWidth    : 100,
			url           : '/app/login/create',
			bodyStyle     : 'background-color:transparent',
			frame         : false,
			bodyCls       : 'loginForm',
			defaultType   : 'textfield',
			defaults      : {
				margin        : 5,
				anchor        : '100%',
				labelStyle    : 'color:white'
			},
			monitorValid  : true,
			items         : [
				{
					fieldLabel    : 'Username',
					labelAlign    : 'left',
					name          : 'username',
					allowBlank    : false,
					listeners     : {
						specialkey  : function(field, e) {
							if (e.getKey() == e.ENTER) {
								login.processLogin();
							}
						}
					}
				},
				{
					fieldLabel    : 'Password',
					labelAlign    : 'left',
					name          : 'password',
					inputType     : 'password',
					allowBlank    : false,
					listeners     : {
						specialkey    : function(field, e) {
							if (e.getKey() == e.ENTER) {
								login.processLogin();
							}
						}
					}
				}
			],

			// All the magic happens after the user clicks the button
			buttons:[
				{
					text:'Sign In',
          ui: 'plain',
					// Function that fires when user clicks the button
					handler:function () {
						login.processLogin();
					}
				}
			],

			processLogin: function(){
				login.getForm().submit({
					method:'POST',
					//waitTitle:'Please wait...',
					//waitMsg:'Connecting to Authentication Service',

					success:function (form, action) {
						obj = Ext.JSON.decode(action.response.responseText);
						Ext.Ajax.defaultHeaders = {
						    'X-API-TOKEN': obj.api_token
						};

						Ext.getCmp('canvas').setActiveTab(1);

					},

					failure:function (form, action) {
						obj = Ext.JSON.decode(action.response.responseText);
						alert('Sign-in failed, please try again.');
					}
				});

			}
		});


    Ext.apply(this, {
	    bodyStyle: 'background: transparent',
      items:[
        {
				  region: 'center',
				  xtype: 'panel',
          bodyCls: 'transparent',
          dockedItems:[
            {
              xtype:'buildit-Banner',
              parent: me
            }
          ]
			  },{
			    region: 'east',
			    width: 320,
			    border: false,
			    bodyCls: 'loginSidebar',
			    layout: {
				    type: 'vbox',
				    align: 'stretch'
			    },
			    items: [
          {
              xtype:'buildit-Banner',
              indentTitle: false,
              parent: me,
              title: me.sidebarTitle,
              subtitle: me.sidebarSubtitle,
              withCls: 'light'
          },
			    login
          ]}
      ]
    });

    this.callParent();

    this.on('show', function(c){
    	var canvas = Ext.getCmp('canvas');
    	Ext.each(canvas.items.items, function(tab, idx, tabs){
        try{
          if(tab.id != 'login' && tab.id != 'home'){

            tab.close();
          }
        } catch(e) {
        	console.log(e);
        } finally {}
      });
    });
  }
});
/**
 *
 */

Ext.define('Buildit.ux.Lookup', {
  extend : 'Ext.form.ComboBox',
  alias  : ['widget.buildit-Lookup', 'widget.lookup'],


  /**
   * @cfg {'code'/'code_int'} lkp the field in the store that represents the value
   */
  lkp : 'code',

  /**
   * @cfg {Boolean} typeAhead indicates if the field allows the user to type ahead
   */
  typeAhead : false,

  /**
   * @cfg {Boolean} hideTrigger hides the lookup trigger if required too
   */
  hideTrigger : false,

  /**
   * @cfg {'local'/'remote'} queryMode informs the underlying store where the query will be performed
   */
  queryMode : 'local',


  /**
   * @cfg {Boolean} queryCaching indicates if the queries should be cached or not
   */
  queryCaching : true,


  /**
   * @cfg {Boolean} autoSelect
   */
  autoSelect : true,


  /**
   * @cfg {String} displayField indicates the field in the store to be displayed in the field
   */
  displayField : 'default_text',


  /**
   * @cfg {String/Ext.form.BaseField} dependsOn the name of the field this lookup should observe.
   *
   * The field specified will be observed for change, hence it must be capable of firing
   * the change event.
   */
  dependsOn : undefined,



  forceSelection: true,


  cls : 'lookup',

  // @inherit docs
  initComponent: function() {

    var me = this;

    var requiredConfig = ['category'],
        missingConfigs = [];

    if(this.allowBlank)
      this.autoSelect = false;

    Ext.each(requiredConfig, function(req) {
      if (!me[req])
        missingConfigs.push(req);
    });

    if (!Ext.isEmpty(missingConfigs)) {
      throw "Lookup is missing the following configuration value(s): " + missingConfigs.join(', ');
    }

    this.valueField = this.lkp;

    var lookupStoreId = this.category + '-lookup-Store';

    if (Ext.isDefined(Ext.data.StoreManager.lookup(lookupStoreId))) {
      this.store = Ext.data.StoreManager.lookup(lookupStoreId);
    } else {
      this.store = Ext.create('Buildit.store.Lookup', {
        storeId: lookupStoreId,
        category: this.category
      });
    }

    if(me.allowBlank){
      
      if(me.store.getCount() > 0){
        var firstEntry = me.store.getAt(0);
        if(firstEntry.get('default_text') !== '----'){
          me.store.insert(0, Ext.create('Buildit.model.Lookup', {
            default_text : '----',
            is_enabled   : true
          }));
        }
      }
      
    }

    Ext.apply(this, {
      listConfig: {
        itemTpl: '<tpl for="."><div class="enabled_{is_enabled}">{default_text}</div></tpl>',
        itemSelector: 'span.item' // you need to provide an itemSelector if you change the template
      }
    });


    this.callParent();

    this.on('beforequery', function(queryEvent, eOpts) {
      //queryEvent.query = this.queryField + ': '+ queryEvent.query;
    });

    me.on('beforerender', function(){
      if(me.dependsOn != undefined && me.dependsOn != '')
        me.bindDependency();
    });

  }, // initComponent


  /**
   * The key to dependency based lookups is managing the change from the dependency
   * back to the dependent. First step is to create a listener on this lookup
   * to the dependency so that any time it changes, the lookup will be updated
   * accordingly.
   *
   *
   */
  bindDependency : function(){
    var me        = this,
        relField  = undefined;

    // the field should start in a disabled mode unless a value is set
    if(this.getValue()){
      me.setDisabled(false);

    } else {
      me.setDisabled(true);
    }

    if(me.dependsOn instanceof Ext.form.BaseField){
      relField = me.dependsOn;
    } else if(typeof me.dependsOn=='string'){
      relField = me.up('form').getForm().findField(me.dependsOn);
    }

    if(relField == undefined)
      return;

    // initialize now before change event to handle initial render
    me.initializeDependency(relField, relField.getValue());

    // handle all future changes to the observed field
    relField.on('change', function(field, newValue, oldValue, eOpts){
      me.handleDependencyChange(field, newValue);
    }, me);


  }, // bindDependency

  /**
   *
   */
  initializeDependency : function(field, value) {
    var me = this;
    if(value === '' || value === undefined){
      me.setDisabled(true);
    } else {
      me.setDisabled(false);
      me.store.clearFilter(true);
      me.store.filter([{property: 'category', value: me.category}, {property: 'depends_on', value: value}]);
    }
  }, // initializeDependency


  /**
   *
   */
  handleDependencyChange : function(field, value){
    var me = this;
    if(value=='' || value == undefined){
      me.setDisabled(true);
    } else {
      me.setDisabled(false);
      me.clearValue();
      me.store.clearFilter(true);
      me.store.filter([{property: 'category', value: me.category}, {property: 'depends_on', value: value}]);
      me.store.load();
      //me.store.filter('depends_on', value);
    }
  } // handleDependencyChange


}); // Ext.define
;
/**
 * A popup is similar to a modal window in that it is a container for other items, presented
 * with an overlay that restricts access to all other elements on the page. Where Popup differs
 * is that it mimics the panel type in metro that docks to either the top or bottom of the viewport
 * and stretches the width.
 */

Ext.define('Buildit.ux.Popup', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.buildit-Popup',

	/**
	 * @cfg {Integer/String} defaultHeight
	 * Provide a raw numeric value or a percentage of the viewport
	 */
	defaultHeight: '60%',

	/**
	 * @cfg {"north"/"south/east/west"} dockAt (required)
	 * Represents the side that will dock to the viewport
	 *
	 * - 'north' - Results in the popup being bound to the viewport by its top-side edge
	 * - 'south' - Results in the popup beign bound by its bottom-side edge
	 */
	dockAt: 'south',

	/**
	 * @cfg {Integer} dockPadding
	 * The number of pixels to pad the popup from the viewports docked edge
	 */
	dockPadding: 0,

	/**
	 * @cfg {String} componentCls
	 * The base class set at the root level element to provide styling
	 */
	componentCls: 'popup',

	/**
	 * @cfg {Boolean} autoScroll
	 * Set to true to show scroll bars automatically when necessary.
	 */
	autoScroll: false,

	/**
	 * @cfg {String} backgroundColor
	 * Provide a named color string or a hex value representing the color you require for the background
	 */
	backgroundColor: Buildit.util.Color.DARKESTGRAY,


	/**
	 * @cfg {Boolean} [modal=true]
	 *
	 */
	modal: true,


	floating: true,

	border: false,

	shadow: false,

	header: false,

	layout: 'fit',

	defaults: {
		bodyStyle: {
			background: 'transparent'
		},
		border: false
	},

	initComponent: function() {
		var me = this;


		me.addEvents(

		/**
		 * @event beforeclose
		 * Fires before the user closes the popup. Return false from any listener to stop the close event being
		 * fired
		 * @param {Buildit.ux.Popup} popup The Panel object
		 */
		'beforeclose',

		/**
		 * @event beforeshow
		 * Fires before the user closes the popup. Return false from any listener to stop the close event being
		 * fired
		 * @param {Buildit.ux.Popup} popup The Panel object
		 */
		'beforeshow'

		);

		Ext.applyIf(this, {
			bodyStyle: {
				background: me.backgroundColor
			}
		});

		this.initEvents();
		this.callParent();

		var map = new Ext.util.KeyMap(Ext.getDoc(), {
			key: Ext.EventObject.ESC,
			handler: function() {
				me.close();
			}
		});
		// handle the resize event of the browser
		Ext.EventManager.onWindowResize(this.computePosition, this);
		this.computePosition();
	},

	initEvents: function() {
		if (!this.rendered) {
			this.on('afterrender', this.initEvents, this, {
				single: true
			});
			return;
		}
		this.mon(Ext.getBody(), 'click', this.checkCloseClick, this);
	},

	checkCloseClick: function(event) {
		var cx = event.getX(),
			cy = event.getY(),
			box = this.getBox();

		if (cx < box.x || cx > box.x + box.width || cy < box.y || cy > box.y + box.height) {
			//clean up listener
			this.mun(Ext.getBody(), 'click', this.checkCloseClick, this);
			this.close();
		}
	},

	/**
	 *
	 */
	computePosition: function() {
		var heightIn = this.defaultHeight;
		if (typeof(heightIn) == 'string' && heightIn.indexOf('%') > -1) {
			heightIn = Ext.getBody().getViewSize().height * (parseInt(this.defaultHeight.replace('%', ''))) / 100
		}
		this.setSize(Ext.getBody().getViewSize().width, heightIn);

		if (this.dockAt == 'north') {
			this.setPosition(0, this.dockPadding);
		} else {
			this.setPosition(0, Ext.getBody().getViewSize().height - heightIn - this.dockPadding);
		}


	}

});

Ext.define('Buildit.ux.ModalEditor', {
	extend: 'Buildit.ux.Popup',
	alias: 'buildit-ModalEditor',
	
	forms: [],
	
  defaultHeight: '80%',

  bodyPadding: '10 80 10 80',
	
  record: undefined,

  store: undefined,
	
	initComponent:function(){
		var me = this;
		
		var newForms = [];
		
		Ext.each(this.forms, function(form, idx, ref){
			newForms.push(Ext.apply(form, {record: me.record}));
		});
		
		var saveButton = Ext.create('Ext.button.Button', {
	    text: 'Save',
	    handler: me.saveRecord,
	    scope: me
    });

    newForms.push(saveButton);

		Ext.apply(this, {
			items: newForms
		});
		
		Ext.apply(this, {
			store: me.record.store
		});
		
		this.callParent();
		
	},
	
	saveRecord:function(btn, e){
		
		var nf  = this.down('buildit-Form');
		var rec = nf.getRecord();
		
		rec.set(nf.getForm().getFieldValues());
		this.store.add(rec);
		this.store.sync({
			success: function(){console.log('All Good')},
			failure: function(){console.log('All Bad')},
			scope: this
		});
		this.close();
		
	}
});
Ext.define('Buildit.ux.PopupForm', {
  extend   : 'Ext.form.Panel',
  alias    : 'buildit-PopupForm',

  floating : true,

  shadow   : false,

  header   : false,

  border   : false,

  cls      : 'popup-form',

  bodyCls  : 'form-body',

  height : 300,

  width  : 600,

  initComponent : function(){
    var me = this;

    

    Ext.applyIf(this, {
			header           : false,
			fieldDefaults    : {
				labelAlign       : 'right',
				labelWidth       : 220,
				msgTarget        : 'under',
				labelSeparator   : '',
				anchor           : '100%',
				labelAttrTpl     : new Ext.XTemplate('<tpl if="allowBlank === false">class="required x-form-item-label x-unselectable x-form-item-label-right"</tpl>', {
				  disableFormats  : true,
				  compiled        : true
				})

			}
		});

		me.actionGroup = Ext.create('Ext.container.Container', {
      layout    : 'hbox',
      cls       : 'action-group',
      defaults  : {
        ui      : 'plain'
      },
      items     : [
        {
					xtype    : 'button',
					action   : 'save',
					iconCls  : 'icon-ok',
					cls      : 'ok-action',
					handler  : me.saveForm,
					scope    : me,
					tooltip  : 'Save this record'
				},
        {
					xtype    : 'button',
					action   : 'cancel',
					iconCls  : 'icon-remove',
					handler  : me.closeForm,
					scope    : me,
					tooltip  : 'Cancel'
				}
      ]
    });


    me.callParent();

    me.addDocked({
          xtype        : 'toolbar',
          height       : 64,
          ui           : 'plain',
          cls          : 'banner',
          items        : [
            {
            	xtype      : 'tbtext',
            	text       : 'Quick Customer',
            	cls        : 'title'
            },
            '->',
            me.actionGroup,
            {
            	xtype      : 'tbspacer',
            	width      : 24
            }
          ]
        });

    me.on('render', function(){
		  me.getForm().isValid();
		});
  }, // initComponent

  closeForm : function(){
    this.close();
  }, // closeForm

  saveForm : function(){

  	var me      = this,
        form    = me.getForm(),
        record  = me.record
    
    record.set(form.getFieldValues());

    // establish the exception handler prior to the save
    record.getProxy().on('exception', this.onProxyException, this);

    record.save({
      success: function(record, operation){
        me.fireEvent('recordsaved',    me, record);
	    },
	    failure : function(record, operation) {
	      
      }
	  });

  }, // saveForm


  onProxyException : function (proxy, response, operation) {
	  var me      = this,
        form    = me.getForm();

    form.clearInvalid();
    var resp = Ext.JSON.decode(response.xhr.responseText).result;
    if(resp.errors)
      me.form.markInvalid(resp.errors);

    var error_message = 'An error occurred trying to save this record';
    if(resp.message)
      error_message = resp.message;

    if(resp.errors)
      error_message = error_message + '. Please fix the highlighted fields and try again.'

    Buildit.errorMsg(error_message);

  }


}); // Ext.define
;
/**
 * @author Jason Ihaia
 */

Ext.define('Buildit.ux.RestrictedCheckpoint', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.buildit-RestrictedCheckpoint',


  /**
   * @cfg {String} The user_id of the last user to sign in
   */
  previousUser     : undefined,


  /**
   * @cfg {Boolean} Indicates if the STANDARD sockets should be initialized
   *                upon successful sign-in of the user.
   */
  activateSockets  : true,


  /**
   * @cfg {String} permittedApplication
   * Provide the one application that is permitted through this checkpoint.
   */
  permittedApplication : undefined,


  /**
   * @cfg {String} buttonCls
   * The css class to be applied to the login button on the form.
   */
  buttonCls        : 'btn-standard light-green',


  // inherit docs
  initComponent:function(){

  	var me          = this;

    var requiredConfigs = ['permittedApplication'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.RestrictedCheckpoint is undefined: ' + cfg);
      }
    });

    /**
     * @event loginsuccess
     * Fired when a Model instance has been added to this Store.
     * @param {Ext.data.Store} store The store
     * @param {Ext.data.Model[]} records The Model instances that were added
     * @param {Number} index The index at which the instances were inserted
     * @since 1.1.0
     */

    /**
     * @event loginfailure
     * Fired when a Model instance has been added to this Store.
     * @param {Ext.data.Store} store The store
     * @param {Ext.data.Model[]} records The Model instances that were added
     * @param {Number} index The index at which the instances were inserted
     * @since 1.1.0
     */

    this.addEvents(['loginsuccess', 'loginfailure']);


  	this.previousUser = Ext.util.Cookies.get('buildit-secure-user');


  	this.username =  Ext.create('widget.textfield', {
			emptyText  : 'email address',
			cls        : 'username',
      name       : 'username',
			value      : this.previousUser,
      listeners  : {
        specialkey : {
          fn       : me.onEnter,
          scope    : me
        }
      }
		});


  	this.password = Ext.create('widget.textfield', {
  		inputType  : 'password',
  		name       : 'password',
  		emptyText  : 'password',
  		listeners  : {
  			specialkey : {
  				fn       : me.onEnter,
  				scope    : me
  			}
  		}
  	});

    this.applications = Ext.create('widget.textfield', {
      hidden     : true,
      name       : 'applications',
      value      : me.permittedApplication
    });


  	this.submitButton = Ext.create('widget.button', {
  		text       : 'Sign In',
  		scale      : 'medium',
      ui         : 'plain',
      cls        : me.buttonCls,
  		handler    : me.submitLogin,
  		scope      : me
  	})


  	Ext.apply(this, {
  		cls: 'securityCheck',
  		layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
			},
      border   : 0,
			height: 300,
  		items: [{
  			height: 200,
  			width: '100%',
  			border: false,
  			cls: 'login-banner',
  			bodyStyle: 'background-color: transparent !important'
  		},
  		{
  			bodyStyle : 'background-color: transparent !important',
  			width     : 300,
        border    : 0,
  			layout    : {
  				type      : 'hbox'
  			},
  			items:[
  				{
		  			xtype: 'form',
		  			url: '/app/login/create',
		  			height: 300,
		  			width: 300,
		  			defaults: {
			  			anchor: '100%'
		  		  },
		  			bodyStyle: 'background-color: transparent !important',
		  			border: false,
		  			items: [this.username, this.password, this.applications, this.submitButton]
		  		}
  			]
  		}],

  		//listeners: {
  			//afterrender: this.setUsernameFocus
  		//}
  	});

  	this.callParent();

  }, // initComponent


  setUsernameFocus:function(){
  	this.username.focus(false,100);
  }, // setUsernameFocus


  onEnter:function(field, e) {
		if (e.getKey() == e.ENTER) {
		  this.submitLogin();
		}
	}, // onEnter

	submitLogin:function(){

    var me = this;

    var form = this.down('form').getForm();
		form.submit({
			method:'POST',

			success : function (form, action) {
				obj = Ext.JSON.decode(action.response.responseText);

        // ensure all subsequent requests to the server are coupled
        // with the token of the current user.
				Ext.Ajax.defaultHeaders = {'X-API-TOKEN': obj.api_token};

				// set the context to be used throughout the application
				delete obj.api_token
				delete obj.success
				Buildit.context = obj;

        var hub = Ext.createWidget(me.applications.getValue());
				var canvas = Ext.getCmp('canvas');
        canvas.add(hub);
        canvas.setActiveTab(hub);
        Ext.util.Cookies.set('buildit-secure-user', me.username.getValue());

        me.fireEvent("loginsuccess");
			},

			failure:function (form, action) {
				obj = Ext.JSON.decode(action.response.responseText);
				Ext.create('Buildit.ux.Notification', {
	    		bodyCls: 'ux-notification-error',
					html: obj.error
		    }).show();

        me.fireEvent("loginfailure");
			}
		});
	} // submitLogin


}); // Ext.define('Buildit.ux.RestrictedCheckpoint'
;
Ext.define('Buildit.ux.Section', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.buildit-Section',

  tiles: [],

  tileSize: 120,

  tileSpacing: 0,

  columns: 4,

  rows: 3,

  bodyStyle: 'background: transparent',

  border: false,

  header: false,

  cls: 'section',

  enableTitle: true,

  titleHeight: 40,

  initComponent: function(){
    var me = this;

    this.width  = this.tileSize * this.columns + 30;
    this.height = this.tileSize * this.rows + 30;
    if(this.enableTitle){
      this.height = this.height + this.titleHeight;
    }

    Ext.apply(this, {
      defaults: {
        width: this.tileSize,
        height: this.tileSize,
        padding: '0 ' + this.tileSpacing + ' ' + this.tileSpacing + ' 0',
        xtype: 'buildit-Tile'
      }
    });

    this.layout = {
      type: 'table',
      columns: this.columns
    };

    // the following will set prepare the tiles into the items collection
    this.prepareTiles();

    // build the title
    this.prepareTitle();

    this.callParent();
  },

  prepareTitle: function(){
    var section = this;

    if(section.enableTitle){
      Ext.apply(section, {
        dockedItems: [
          {
            xtype: 'toolbar',
            border: false,
            items: [
              {xtype: 'tbtext', text: section.title, cls: 'sectionTitle'}
            ]
          }
        ]
      });
    }
  },

  prepareTiles: function(){

    var section = this;

    Ext.each(this.tiles, function(tile,idx,tiles){
      var rowSpan = tile.rowspan || 1;
      var colSpan = tile.colspan || 1;

      var height = rowSpan * section.tileSize;
      var width  = colSpan * section.tileSize;

      Ext.applyIf(tile, {
        height : height,
        width  : width
      });
    });

    this.items = this.tiles;
  }

});
/**
 * @author Jason Ihaia
 */

Ext.define('Buildit.ux.SecurityCheckpoint', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.buildit-SecurityCheckpoint',


  /**
   * @cfg {String} The user_id of the last user to sign in
   */
  previousUser     : undefined,


  /**
   * @cfg {Boolean} Indicates if the STANDARD sockets should be initialized
   *                upon successful sign-in of the user.
   */
  activateSockets  : true,

  // inherit docs
  initComponent:function(){

  	var me          = this;

    /**
     * @event loginsuccess
     * Fired when a Model instance has been added to this Store.
     * @param {Ext.data.Store} store The store
     * @param {Ext.data.Model[]} records The Model instances that were added
     * @param {Number} index The index at which the instances were inserted
     * @since 1.1.0
     */

    /**
     * @event loginfailure
     * Fired when a Model instance has been added to this Store.
     * @param {Ext.data.Store} store The store
     * @param {Ext.data.Model[]} records The Model instances that were added
     * @param {Number} index The index at which the instances were inserted
     * @since 1.1.0
     */

    this.addEvents(['loginsuccess', 'loginfailure']);


  	this.previousUser = Ext.util.Cookies.get('buildit-secure-user');


  	this.username =  Ext.create('widget.triggerfield', {
			emptyText  : 'username',
			cls        : 'username',
			value      : this.previousUser,
			selectOnFocus : false,
			name       : 'username',
			listeners  : {
				specialkey : {
					fn       : me.submitUsername,
					scope    : me
				}
			},
			onTriggerClick : function(){
				me.clickedUsernameTrigger();
			}
		});


  	this.password = Ext.create('widget.textfield', {
  		inputType  : 'password',
  		hidden     : true,
  		name       : 'password',
  		emptyText  : 'password',
  		listeners  : {
  			specialkey : {
  				fn       : me.onEnter,
  				scope    : me
  			}
  		}
  	});



  	this.applications = Ext.create('widget.combo', {
  		emptyText:        'application',
  		hidden:           true,
  		store:            undefined,
  		queryMode:        'local',
      displayField:     'application_name',
      valueField:       'hub_xtype',
      autoSelect:       true,
      forceSelection:   true,
      typeAhead:        false,
      editable:         false,
      name:             'applications',
      id:               'applications'
  	});

  	this.submitButton = Ext.create('widget.button', {
  		text    : 'Sign In',
  		hidden  : true,
  		scale   : 'medium',
      ui      : 'plain',
      cls     : 'btn-standard light-blue',
  		handler : me.submitLogin,
  		scope   : me
  	})




  	Ext.apply(this, {
  		cls: 'securityCheck',
  		layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
			},
      border   : 0,
			height: 300,
  		items: [{
  			height: 200,
  			width: '100%',
  			border: false,
  			cls: 'login-banner',
  			bodyStyle: 'background-color: transparent !important'
  		},
  		{
  			bodyStyle : 'background-color: transparent !important',
  			width     : 300,
        border    : 0,
  			layout    : {
  				type      : 'hbox'
  			},
  			items:[
  				{
		  			xtype: 'form',
		  			url: '/app/login/create',
		  			height: 300,
		  			width: 300,
		  			defaults: {
			  			anchor: '100%'
		  		  },
		  			bodyStyle: 'background-color: transparent !important',
		  			border: false,
		  			items: [this.username, this.password, this.applications, this.submitButton]
		  		}
  			]
  		}],

  		//listeners: {
  			//afterrender: this.setUsernameFocus
  		//}
  	});

  	this.callParent();

  }, // initComponent


  /**
   * Handler for when the username trigger fields trigger is selected.
   * The result of clicking this is to to perform an initial check against the
   * the security service to determine if this is a valid user. If the supplied
   * user credential (which may be either the users email or username) is valid,
   * the system will return an appropriate response to indicate if the matched user
   * has one or more applications available.
   */
  clickedUsernameTrigger:function(){
  	var me = this;

  	Ext.Ajax.request({
      url: '/app/login/identifyUser?username=' + encodeURIComponent(this.username.getValue()),
      method: 'POST',
      success: function(response){
      	obj = Ext.JSON.decode(response.responseText);
      	me.password.show();
      	me.password.focus(false, 100);
      	me.username.addCls('grouped');
      	me.submitButton.show();

      	Ext.util.Cookies.set('buildit-secure-user', me.username.getValue());

        if(obj.applications.length > 0){
        	me.prepareApplications(obj.applications);
        } else {
          me.validateUserFailed('You have not been granted access to an application!');
        }


      },
      failure: function(response){
      	var response = Ext.JSON.decode(response.responseText);
        me.validateUserFailed(response.error);
      }
    });

  }, // clickedUsernameTrigger

  validateUserFailed:function(errorMessage){
    var me = this;

    me.password.hide();
    me.applications.hide();
    me.submitButton.hide();

    me.username.removeCls('grouped');

    Ext.create('Buildit.ux.Notification', {
      bodyCls: 'ux-notification-error',
      html: errorMessage
    }).show();
  },

  prepareApplications:function(applications){
  	store = Ext.create('Ext.data.Store', {fields: ['application_name', 'hub_xtype']});
  	store.loadRawData(applications);
  	this.applications.bindStore(store);

    // get the last used application and set as default
    var lastUsed     = Ext.util.Cookies.get('buildit-last-application');
    var application  = store.findRecord('hub_xtype', lastUsed);
    if(application){
      this.applications.setValue(application.get('hub_xtype'));
    } else {
      this.applications.setValue(store.first().get('hub_xtype'));
    }
  	this.applications.show();
  }, // prepareApplications


  setUsernameFocus:function(){
  	this.username.focus(false,100);
  }, // setUsernameFocus

  submitUsername:function(field,e){
  	if (e.getKey() == e.ENTER) {
		  this.clickedUsernameTrigger();
		}
  }, // submitUsername

  onEnter:function(field, e) {
		if (e.getKey() == e.ENTER) {
		  this.submitLogin();
		}
	}, // onEnter

	submitLogin:function(){

    var me = this;

    var form = this.down('form').getForm();
		form.submit({
			method:'POST',

			success : function (form, action) {
				obj = Ext.JSON.decode(action.response.responseText);

        // ensure all subsequent requests to the server are coupled
        // with the token of the current user.
				Ext.Ajax.defaultHeaders = {'X-API-TOKEN': obj.api_token};

				// set the context to be used throughout the application
				delete obj.api_token
				delete obj.success
				Buildit.context = obj;


        var hubXtype = form.getFields().get('applications').getValue();
        var hub = Ext.createWidget(hubXtype);
				var canvas = Ext.getCmp('canvas');
        canvas.add(hub);
        canvas.setActiveTab(hub);
        Ext.util.Cookies.set('buildit-last-application', hubXtype);

        me.fireEvent("loginsuccess");
			},

			failure:function (form, action) {
				obj = Ext.JSON.decode(action.response.responseText);
				Ext.create('Buildit.ux.Notification', {
	    		bodyCls: 'ux-notification-error',
					html: obj.error
		    }).show();

        me.fireEvent("loginfailure");
			}
		});
	} // initComponent


}); // Ext.define('Buildit.ux.SecurityCheck'
;
Ext.define('Buildit.ux.SettingsButton', {
	extend     : 'Ext.button.Button',
	alias      : 'widget.buildit-SettingsButton',

  iconCls    : 'icon-cogs',
  tooltip    : 'Modify settings',
  action     : 'settings',
  

	initComponent : function(){
    var me = this;


    me.callParent();
    me.on('click',   Buildit.logic.context.Settings.click, me);

	} // initComponent


}); // Ext.define
;
Ext.define('Buildit.ux.Socket', {
  extend: 'Ext.util.Observable',

  channels    : undefined,

	constructor : function(config){

		options = config.options || {};
		this.channels  = config.channels || [];
		this.socket = new io.connect(config.host, {port: config.port});

		var me = this;

		this.socket.on('connect', function(){
			me.onConnect();
		});

    Ext.each(me.channels, function(channel){
      me.socket.on(channel, function(data){
        me.onMessage(channel, data);
 		  });
    });

		this.callParent(arguments);

	}, // constructor


	connect: function() {
		this.socket.connect();
	},
	disconnect: function(){
		this.socket.disconnect();
	},

	send: function(message) {
		this.socket.send(message);
	},
	emit: function(name, message) {
		this.socket.emit(name,message);
	},
	onUpdate: function(data){
		// fire the update event
		console.log(data);
		this.fireEvent('update', data);
	},
	onConnect: function() {
		console.log('Connected to the Server');
		this.fireEvent('connect');
	},
	onDisconnect: function() {
		this.fireEvent('disconnect');
	},

	onClose: function() {
		this.fireEvent('close');
	},

	onMessage: function(channel, data) {
		this.fireEvent(channel, data);
	}

});
Ext.define('Buildit.ux.TimePicker', {
  extend: 'Ext.form.field.ComboBox',
  alias: 'widget.buildit-TimePicker',

  initComponent: function(){
    var me = this;


    this.hourField = Ext.create('Ext.form.field.Text', {
      emptyText   : '12',
      itemId      : 'hour',
      submitValue : false,
      fieldCls    : 'one_third'
    })

    this.minuteField = Ext.create('Ext.form.field.Text', {
      emptyText   : '30',
      itemId      : 'minute',
      submitValue : false,
      fieldCls    : 'one_third'
    });

    this.meridianField = Ext.create('Ext.form.field.ComboBox', {
      itemId      : 'merdian',
      submitValue : false,
      data        : ['AM', 'FM'],
      fieldCls    : 'one_third'
    });

    Ext.apply(this, {
      combineErrors: true,

      msgTarget : 'side',

      layout: 'hbox',

      defaults: {
        flex: 1,
        hideLabel: true
      },

      items: [
        this.hourField,
        this.minuteField,
        this.merdianField
      ]
    })


    this.callParent();

  }

});
Ext.define('Buildit.ux.Viewport', {
  extend: 'Ext.container.Viewport',
  alias: 'widget.buildit-Viewport',

  cls: 'viewport',
  
  style: 'background: transparent',
  
  initComponent: function() {
    var me = this;
    
    Ext.apply(this, {

      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      border: 0
    }); 
    
    me.callParent(arguments);

  }
  
});
Ext.define('Buildit.ux.Workspace', {

	extend:'Ext.panel.Panel',
	alias:'widget.buildit-Workspace',
	
	layout:'border',

	defaults: {
		border: 0
	},

  navigator : undefined,

	initComponent:function () {
		var me = this;

		me.callParent(arguments);

	} // initComponent

}); // Ext.define
;
Ext.define('Buildit.ux.bulk.NumberEditor', {
  extend : 'Ext.panel.Panel',
  alias  : 'widget.buildit-bulk-NumberEditor',


  layout : {
    type   : 'anchor'
  },

  initComponent : function(){
    var me = this;

    Ext.apply(me, {
      operators : [
        [ 'ADD',             'Add'         ],
        [ 'SUBTRACT',        'Subtract'    ],
        [ 'MULTIPLY',        'Multiply'    ],
        [ 'DIVIDE',          'Divide'      ],
        [ 'SET',             'Set to'      ]
      ],
      rounders : [
        [ 'UP',              'Round Up'    ],
        [ 'DOWN',            'Round Down'  ],
        [ 'NONE',            'No Rounding' ]
      ]
    });

    Ext.apply(me, {
    	items : [
    	  me.operatorOpt = Ext.create('Ext.form.field.ComboBox', {
	        store          : Ext.create('Ext.data.ArrayStore', {
	        fields         : ['value', 'display'],
	        data           : me.operators
		      }),
	      flex           : 1,
	      submitValue    : false,
	      displayField   : 'display',
	      valueField     : 'value',
	      forceSelection : true,
	      value          : 'ADD',
	      editable       : false,
	      allowBlank     : me.allowBlank
	      }),
    	  me.valueField = Ext.create('Ext.form.field.Text', {
    	  	value        : 0
    	  }),
        me.roundingField = Ext.create('Ext.form.field.ComboBox', {
          store          : Ext.create('Ext.data.ArrayStore', {
          fields         : ['value', 'display'],
          data           : me.rounders
          }),
        flex           : 1,
        submitValue    : false,
        displayField   : 'display',
        valueField     : 'value',
        forceSelection : true,
        value          : 'NONE',
        editable       : false,
        allowBlank     : me.allowBlank
        })
    	]
    });


    me.callParent();

  }, // initComponent


  getTreatment : function(){
    var me         = this,
        treatment  = {handler: 'number', type: me.operatorOpt.getValue(), value: me.valueField.getValue(), rounding: me.roundingField.getValue()};
    
    return treatment;
  }

}); // Ext.define
;
/**
 *
 */

Ext.define('Buildit.ux.bulk.Panel', {
  extend   : 'Ext.window.Window',
  alias    : 'buildit-bulk-Panel',

  /**
   * @cfg {Integer} width
   * The width of the Bulk Editor panel
   */
  width    : 400,

  maxHeight: 600,

  ui       : 'plain',

  bodyPadding : 15,

  header   : false,

  style    : 'background: #144BA3',

  defaultAlign : 'tr-br',

  explorer : undefined,

  attributes : [],

  attributeEditors : [],

  initComponent : function() {
    var me = this;

    me.prepareAttributes();

    var states = Ext.create('Ext.data.Store', {
    fields: ['field', 'label'],
    data : me.attributes
    });

    me.attributeLookup = Ext.create('Ext.form.field.ComboBox', {
    	store         : states,
      queryMode     : 'local',
      displayField  : 'label',
      valueField    : 'field',
      listeners     : {
        change      : me.changeAttribute,
        scope       : me
      }
    })

    Ext.apply(me, {
      items     : [
        me.attributeLookup,
        me.editorContainer = Ext.create('Ext.container.Container'),
        {
          xtype     : 'button',
          text      : 'Update',
          handler   : me.performUpdate,
          scope     : me
        }
      ]
    })

    me.callParent();

  },  // initComponent


  prepareAttributes : function(){
    var me = this;

    Ext.each(me.explorer.columns, function(column){
      if(column.bulkEditable){
      	me.attributes.push({field: column.dataIndex, label: column.header})
        me.attributeEditors.push({field: column.dataIndex, editor: 'buildit-bulk-NumberEditor'});
      }

    });

  }, // prepareAttributes


  changeAttribute : function(combo, newValue, oldValue, eOpts){

    var me = this;

    // set the field editor
    var fieldEditor = undefined;

    Ext.each(me.attributeEditors, function(editorDefn){
      if(editorDefn.field === newValue){
        fieldEditor = editorDefn.editor;
      }
    });
    
    if(Ext.isDefined(fieldEditor)){
      var editor = fieldEditor;
      if(typeof fieldEditor === 'string'){
        editor = { 
          xtype      : fieldEditor,
          itemId     : 'fieldEditor'
        };
      }

      Ext.apply(editor, {
        itemId     : 'fieldEditor'
      });

      me.setEditor(editor);
    };

  }, // changeAttribute

 
  /**
   * @param {Ext.Component/Object/String} editor
   */
  setEditor : function(editor){
    var me = this;
    me.editorContainer.removeAll();
    me.editorContainer.add(editor);
  }, // setEditor


  performUpdate : function(btn, e){
    var me = this;

    if(typeof me.explorer.store.proxy.api.update === 'function'){
      me.explorer.store.proxy.api.update({
        bulk     : true,
        field    : me.attributeLookup.getValue(),
        search   : me.explorer.store.proxy.extraParams.search,
        value    : me.getBulkValue()
      },function(response){
        console.log(response);
      });

    }
    
  }, // performUpdate

  getBulkValue : function(){
    var me = this;
    
    return me.editorContainer.getComponent('fieldEditor').getTreatment();

  } // getBulkValue

}); // Ext.define
;
Ext.define('Buildit.ux.dashboard.Column', {
  extend      : 'Ext.container.Container',
  alias       : 'widget.dashboardcolumn',


  layout      : 'anchor',
  defaultType : 'dashlet',
  cls         : 'x-dashboard-column'

    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
});
Ext.define('Buildit.ux.dashboard.Dashlet', {
    extend       : 'Ext.panel.Panel',
    alias        : 'widget.dashlet',
    layout       : 'fit',
    anchor       : '100%',
    frame        : false,
    closable     : true,
    collapsible  : true,
    animCollapse : true,
    border       : 0,
    draggable: {
        moveOnDrag: false    
    },
    cls: 'x-dashlet',
    bodyCls: 'x-dashlet-body',

    initComponent : function(){
      var me = this;



      me.callParent();

      me.on('render', function(main){
        main.header.on('render', function(cmp){
          cmp.addClass('x-dashlet-header');
        });
      });
    }, // initComponent

    // Override Panel's default doClose to provide a custom fade out effect
    // when a dashlet is removed from the portal
    doClose: function() {
        if (!this.closing) {
            this.closing = true;
            this.el.animate({
                opacity: 0,
                callback: function(){
                    var closeAction = this.closeAction;
                    this.closing = false;
                    this.fireEvent('close', this);
                    this[closeAction]();
                    if (closeAction == 'hide') {
                        this.el.setOpacity(1);
                    }
                },
                scope: this
            });
        }
    }
});
Ext.define('Buildit.ux.dashboard.DropZone', {
    extend: 'Ext.dd.DropTarget',

    constructor: function(dashboard, cfg) {
        this.dashboard = dashboard;
        Ext.dd.ScrollManager.register(dashboard.body);
        Buildit.ux.dashboard.DropZone.superclass.constructor.call(this, dashboard.body, cfg);
        dashboard.body.ddScrollConfig = this.ddScrollConfig;
    },

    ddScrollConfig: {
        vthresh: 50,
        hthresh: -1,
        animate: true,
        increment: 200
    },

    createEvent: function(dd, e, data, col, c, pos) {
        return {
            dashboard: this.dashboard,
            panel: data.panel,
            columnIndex: col,
            column: c,
            position: pos,
            data: data,
            source: dd,
            rawEvent: e,
            status: this.dropAllowed
        };
    },

    notifyOver: function(dd, e, data) {
        var xy = e.getXY(),
            dashboard = this.dashboard,
            proxy = dd.proxy;

        // case column widths
        if (!this.grid) {
            this.grid = this.getGrid();
        }

        // handle case scroll where scrollbars appear during drag
        var cw = dashboard.body.dom.clientWidth;
        if (!this.lastCW) {
            // set initial client width
            this.lastCW = cw;
        } else if (this.lastCW != cw) {
            // client width has changed, so refresh layout & grid calcs
            this.lastCW = cw;
            //dashboard.doLayout();
            this.grid = this.getGrid();
        }

        // determine column
        var colIndex = 0,
            colRight = 0,
            cols = this.grid.columnX,
            len = cols.length,
            cmatch = false;

        for (len; colIndex < len; colIndex++) {
            colRight = cols[colIndex].x + cols[colIndex].w;
            if (xy[0] < colRight) {
                cmatch = true;
                break;
            }
        }
        // no match, fix last index
        if (!cmatch) {
            colIndex--;
        }

        // find insert position
        var overDashlet, pos = 0,
            h = 0,
            match = false,
            overColumn = dashboard.items.getAt(colIndex),
            portlets = overColumn.items.items,
            overSelf = false;

        len = portlets.length;

        for (len; pos < len; pos++) {
            overDashlet = portlets[pos];
            h = overDashlet.el.getHeight();
            if (h === 0) {
                overSelf = true;
            } else if ((overDashlet.el.getY() + (h / 2)) > xy[1]) {
                match = true;
                break;
            }
        }

        pos = (match && overDashlet ? pos : overColumn.items.getCount()) + (overSelf ? -1 : 0);
        var overEvent = this.createEvent(dd, e, data, colIndex, overColumn, pos);

        if (dashboard.fireEvent('validatedrop', overEvent) !== false && dashboard.fireEvent('beforedragover', overEvent) !== false) {

            // make sure proxy width is fluid in different width columns
            proxy.getProxy().setWidth('auto');
            if (overDashlet) {
                dd.panelProxy.moveProxy(overDashlet.el.dom.parentNode, match ? overDashlet.el.dom : null);
            } else {
                dd.panelProxy.moveProxy(overColumn.el.dom, null);
            }

            this.lastPos = {
                c: overColumn,
                col: colIndex,
                p: overSelf || (match && overDashlet) ? pos : false
            };
            this.scrollPos = dashboard.body.getScroll();

            dashboard.fireEvent('dragover', overEvent);
            return overEvent.status;
        } else {
            return overEvent.status;
        }

    },

    notifyOut: function() {
        delete this.grid;
    },

    notifyDrop: function(dd, e, data) {
        delete this.grid;
        if (!this.lastPos) {
            return;
        }
        var c = this.lastPos.c,
            col = this.lastPos.col,
            pos = this.lastPos.p,
            panel = dd.panel,
            dropEvent = this.createEvent(dd, e, data, col, c, pos !== false ? pos : c.items.getCount());

        if (this.dashboard.fireEvent('validatedrop', dropEvent) !== false && 
            this.dashboard.fireEvent('beforedrop', dropEvent) !== false) {

            Ext.suspendLayouts();
            
            // make sure panel is visible prior to inserting so that the layout doesn't ignore it
            panel.el.dom.style.display = '';
            dd.panelProxy.hide();
            dd.proxy.hide();

            if (pos !== false) {
                c.insert(pos, panel);
            } else {
                c.add(panel);
            }

            Ext.resumeLayouts(true);

            this.dashboard.fireEvent('drop', dropEvent);

            // scroll position is lost on drop, fix it
            var st = this.scrollPos.top;
            if (st) {
                var d = this.dashboard.body.dom;
                setTimeout(function() {
                    d.scrollTop = st;
                },
                10);
            }
        }
        
        delete this.lastPos;
        return true;
    },

    // internal cache of body and column coords
    getGrid: function() {
        var box = this.dashboard.body.getBox();
        box.columnX = [];
        this.dashboard.items.each(function(c) {
            box.columnX.push({
                x: c.el.getX(),
                w: c.el.getWidth()
            });
        });
        return box;
    },

    // unregister the dropzone from ScrollManager
    unreg: function() {
        Ext.dd.ScrollManager.unregister(this.dashboard.body);
        Buildit.ux.dashboard.DropZone.superclass.unreg.call(this);
    }
});
Ext.define('Buildit.ux.dashboard.Panel', {
  extend      : 'Ext.panel.Panel',
  alias       : 'widget.dashboard',


  cls         : 'x-dashboard',
  bodyCls     : 'x-dashboard-body',
  defaultType : 'dashboardcolumn',
  autoScroll  : true,

  manageHeight: false,

  initComponent : function() {
    var me = this;

        // Implement a Container beforeLayout call from the layout to this Container
        this.layout = {
            type : 'column'
        };

    Ext.apply(me, {
      dockedItems : [
        {
          xtype   : 'toolbar',
          dock    : 'right',
          width   : 40,
          cls     : 'x-dashboard-toolbar',
          items   : [{
            tooltip    : 'Top',
            iconCls    : 'icon-remove'
        }]
        }
      ]
    });

        this.callParent();

        this.addEvents({
            validatedrop   : true,
            beforedragover : true,
            dragover       : true,
            beforedrop     : true,
            drop           : true
        });
    },

    // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
    beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length,
            firstAndLast = ['x-dashboard-column-first', 'x-dashboard-column-last'],
            i, item, last;

        for (i = 0; i < len; i++) {
            item = items[i];
            item.columnWidth = 1 / len;
            last = (i == len-1);

            if (!i) { // if (first)
                if (last) {
                    item.addCls(firstAndLast);
                } else {
                    item.addCls('x-dashboard-column-first');
                    item.removeCls('x-dashboard-column-last');
                }
            } else if (last) {
                item.addCls('x-dashboard-column-last');
                item.removeCls('x-dashboard-column-first');
            } else {
                item.removeCls(firstAndLast);
            }
        }

        return this.callParent(arguments);
    },

    // private
    initEvents : function(){
        this.callParent();
        this.dd = Ext.create('Buildit.ux.dashboard.DropZone', this, this.dropConfig);
    },

    // private
    beforeDestroy : function() {
        if (this.dd) {
            this.dd.unreg();
        }
        this.callParent();
    }
});
Ext.define('Buildit.ux.dashboard.SampleDashlet', {
    //extend: 'Ext.grid.Panel',
    extend : 'Buildit.ux.dashboard.Dashlet',
    alias: 'widget.sampledashlet',
    uses: [
        'Ext.data.ArrayStore'
    ],
    height: 300,
    myData: [
        ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
        ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
        ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
        ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
        ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
        ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am'],
        ['Exxon Mobil Corp',                    68.1,  -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company',            34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation',          30.27, 1.09,  3.74,  '9/1 12:00am'],
        ['Hewlett-Packard Co.',                 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc',                  38.77, 0.05,  0.13,  '9/1 12:00am'],
        ['Intel Corporation',                   19.88, 0.31,  1.58,  '9/1 12:00am'],
        ['International Business Machines',     81.41, 0.44,  0.54,  '9/1 12:00am'],
        ['Johnson & Johnson',                   64.72, 0.06,  0.09,  '9/1 12:00am'],
        ['JP Morgan & Chase & Co',              45.73, 0.07,  0.15,  '9/1 12:00am'],
        ['McDonald\'s Corporation',             36.76, 0.86,  2.40,  '9/1 12:00am'],
        ['Merck & Co., Inc.',                   40.96, 0.41,  1.01,  '9/1 12:00am'],
        ['Microsoft Corporation',               25.84, 0.14,  0.54,  '9/1 12:00am'],
        ['Pfizer Inc',                          27.96, 0.4,   1.45,  '9/1 12:00am'],
        ['The Coca-Cola Company',               45.07, 0.26,  0.58,  '9/1 12:00am'],
        ['The Home Depot, Inc.',                34.64, 0.35,  1.02,  '9/1 12:00am'],
        ['The Procter & Gamble Company',        61.91, 0.01,  0.02,  '9/1 12:00am'],
        ['United Technologies Corporation',     63.26, 0.55,  0.88,  '9/1 12:00am'],
        ['Verizon Communications',              35.57, 0.39,  1.11,  '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.',               45.45, 0.73,  1.63,  '9/1 12:00am']
    ],

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    },

    initComponent: function(){

        var store = Ext.create('Ext.data.ArrayStore', {
            fields: [
               {name: 'company'},
               {name: 'change',     type: 'float'},
               {name: 'pctChange',  type: 'float'}
            ],
            data: this.myData
        });

        Ext.apply(this, {
          items: [{
            xtype : 'grid',
            //height: 300,
            height: this.height,
            store: store,
            stripeRows: true,
            columnLines: true,
            border: false,
            columns: [{
                id       :'company',
                text   : 'Company',
                //width: 120,
                flex: 1,
                sortable : true,
                dataIndex: 'company'
            },{
                text   : 'Change',
                width    : 75,
                sortable : true,
                renderer : this.change,
                dataIndex: 'change'
            },{
                text   : '% Change',
                width    : 75,
                sortable : true,
                renderer : this.pctChange,
                dataIndex: 'pctChange'
            }]
          }]
        });

        this.callParent(arguments);
    }
});
/**
 * @private
 */

Ext.define('Buildit.ux.explorer.Banner', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.buildit-explorer-Banner',


  /**
   * @cfg {Integer} backTabIndex
   * The index of the tab in the canvas to which this component will navigate too.
   *
   * All primary components are added to the canvas when initiated. It is a tabbed component
   * yet all references to the tab strip have been hidden. In order to navigate between tabs,
   * it must be done programmatically, such as the outcome of the back button.
   */
   backTabIndex: undefined,


  /**
   * @cfg {Buildit.ux.explorer.Panel} explorer (required)
   * This is a reference to the explorer panel that has initialized the new banner.
   *
   * This is necessary to allow the banner and any of its nested items to access the explorer
   * in order to reference any of the configuration or runtime settings on the explorer itself. This
   * eliminates the need to pass settings from one component to another.
   */
  explorer: undefined,


  header: false,

  filterHidden : true,

  bulkHidden : true,


  initComponent:function(){
    var me = this;

    var requiredConfigs = ['explorer'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.explorer.Banner is undefined: ' + cfg);
      }
    });

    // Add custom events
    this.addEvents('newaction');

    Ext.applyIf(this, {
      height   : 120,
      cls      : 'banner',
      defaults : {
        ui       : 'plain'
      }
    });

    me.callParent();
    this.setup();
    this.mapKeys();

  },


  buildToolbar:function(){

  },

  /**
   * Establishes the primary actions and filters on the banner.
   */
  setup:function(){

    var me = this;

    if(this.explorer.association != undefined){
      this.add({xtype: 'tbspacer', width: 60})
    } else {
      this.add([
        {
          cls      : 'back',
          handler  : this.navigateBack,
          scope    : this,
          tooltip  : 'Back'
        },{
          xtype    : 'tbspacer',
          width    : 38
        }
      ]);
    };


    this.add([
      { xtype: 'panel', cls: 'title-block',
        data: {title: this.explorer.title, subtitle: this.explorer.subtitle},
        tpl: new Ext.XTemplate(
          '<h2>{subtitle}</h2>' +
          '<h1>{title}</h1>'
        )
      },
    ]);

    this.add(['->']);

    if( this.explorer.filters !== undefined && this.explorer.filters.length > 0 ){
      this.prepareFilter();
      this.add([
        {
          itemId    : 'filteraction',
          handler   : me.onToggleFilter,
          scope     : this,
          iconCls   : 'icon-filter',
          tooltip   : 'Apply filters',
          cls       : 'filter-action'
        }
      ]);

    }


	  Ext.Array.each(this.explorer.bannerActions, function(action){
	    me.add([action]);
	  });

	  // setup find if enabled
	  if(this.explorer.allowFind){
		  this.add([
	      {handler: this.launchFind, scope: this, iconCls : 'icon-search', tooltip: 'Find'}
	    ]);
	  }

    // setup bulk update if enabled
    if(this.explorer.allowBulkUpdate){
      this.prepareBulk();
      this.add([
        {
          handler     : this.onToggleBulkEditor,
          scope       : this,
          itemId      : 'bulkaction',
          iconCls     : 'icon-pencil',
          tooltip     : 'Bulk Update'
        }
      ]);
    }

    // setup new if enabled
    if(this.explorer.allowNew){
      this.add([{
        handler     : this.launchNew,
        scope       : this,
        iconCls     : 'icon-plus',
        tooltip     : 'New'
      }]);
    }

    if(this.explorer.allowInlineEdit || this.explorer.allowSave){
      this.add([{
        handler    : this.saveExplorer,
        scope      : this,
        iconCls    : 'icon-ok',
        cls        : 'ok-action'
      }]);
    }

	  this.add([
  		{xtype: 'tbspacer', width: 60}
  	]);
	},

  prepareFilter : function(){
    var me           = this; 


    me.filterWindow = Ext.create('Buildit.ux.explorer.Filter', {
      filterConfig : me.filterConfig,
      filters      : me.explorer.filters,
      explorer     : me.explorer,
      listeners    : {
        collapse : function(cmp){
          cmp.hide();
        },
        show : function(cmp){
          Ext.Function.defer(function(){
            cmp.expand();
          }, 100);
        }
      }
    });
  },


  onToggleFilter : function(btn, eOpts){
    var me           = this;

    me.filterHidden = !me.filterHidden;

    if(me.filterHidden){
      me.filterWindow.hide();
    } else {
      me.filterWindow.showBy(btn);
    }

  }, // onToggleFilter


  /**
   *
   */
	mapKeys:function(){

	  // Define CTRL+B for BACK
	  var backKey = new Ext.util.KeyMap(Ext.getDoc(), {
        key       : Ext.EventObject.B,
        ctrl      : true,
        shift     : true,
        handler   : this.navigateBack,
        scope     : this
    });

	  // Define CTRL+F for FIND
	  if(this.explorer.allowFind){
	    var findKey = new Ext.util.KeyMap(Ext.getDoc(), {
        key       : Ext.EventObject.F,
        ctrl      : true,
        shift     : true,
        handler   : this.launchFind,
        scope     : this
      });
    }
    // Define CTRL+N for NEW
	  var newKey = new Ext.util.KeyMap(Ext.getDoc(), {
        key       : Ext.EventObject.N,
        ctrl      : true,
        shift     : true,
        handler   : this.launchNew,
        scope     : this
    });
	}, // mapKeys

	navigateBack:function(btn, e){
	  e.stopPropagation();
    this.explorer.close();
	},

	manageColumns:function(btn, e){
		if(this.up('buildit-Canvas').activeTab == this.explorer){
	  e.stopPropagation();
	  var columnsPopup = Ext.create('Buildit.ux.Popup', {
	    defaultHeight: '70%',
	    title: 'Columns'
	  });
    Buildit.util.ComponentManager.register(this.explorer, columnsPopup);
	  columnsPopup.show();
    }
	},

  performExport:function(btn, e){
    var search    = this.explorer.store.proxy.extraParams.search;
    var criteria  = '';

    var params = {};
    var sorters = [];

    Ext.merge(params, this.explorer.store.proxy.extraParams);
    Ext.merge(params, {export: {filename: 'export.csv'}});

    this.explorer.store.proxy.api.read(params, function(response, e){
      Ext.getDom('export-iframe').src = response.url;
    });


  },

  /**
   * Responsible for handling the filter selection of one or more combo filters
   * on the banner. Each time a filter is selected, the proxies extra params must
   * be updated to accomodate the new selection. In addition to adding the newForm
   * filter, this must also be responsible for removing any other keys from the same
   * combo.
   */
  selectFilter:function(combo, records, eOpts){
    var filters = [];
    if(this.explorer.store.proxy.extraParams.search){
      if(this.explorer.store.proxy.extraParams.search.filters){
        filters = this.explorer.store.proxy.extraParams.search.filters;
      }
    }

    // set the new filter
    var filter  = records[0].raw[0];

    // remove any options from the current combo if the new filter is zero
    combo.store.each(function(record, index, count){
      Ext.Array.remove(filters, record.data.field1);
    });

    filters.push(filter);

    Ext.merge(this.explorer.store.proxy.extraParams, {
      search: {
        filters: filters
      }
    });
    this.explorer.store.load();
  },

  /**
   * ONLY Process if the active tab on the canvas is this explorer
   */
	launchFind:function(btn, e){
    if(Buildit.getTargetSlot().activeTab == this.explorer){
	  e.stopPropagation();
	  var searchPopup = Ext.create('Buildit.ux.explorer.Find', {
      explorer: this.explorer,
      contextOwner: this
    });

    Buildit.util.ComponentManager.register(this.explorer, searchPopup);
	  searchPopup.show();
    }
	}, // launchFind


  prepareBulk : function(){
    var me           = this; 

    me.bulkWindow = Ext.create('Buildit.ux.bulk.Panel', {
      explorer : me.explorer
    });

    Buildit.util.ComponentManager.register(me.explorer, me.bulkWindow);
  }, // prepareBulk


  onToggleBulkEditor : function(btn, e){

    var me           = this;
    me.bulkHidden    = !me.bulkHidden;

    if(me.bulkHidden){
      me.bulkWindow.hide();
    } else {
      me.bulkWindow.showBy(btn);
    }

  }, // onToggleBulkEditor



	launchViews:function(btn, e){

    e.stopPropagation();
	  var viewsPopup = Ext.create('Buildit.ux.Popup', {
	    defaultHeight: '70%'
	  });

	  Buildit.util.ComponentManager.register(this.explorer, viewsPopup);
	  viewsPopup.show();
	},

  saveExplorer:function(){
    this.explorer.store.sync({
      success: function(){
        Ext.create('Buildit.ux.Notification', {
	    		bodyCls: 'ux-notification-information',
					html: 'Record(s) Saved Successfully'
		    }).show();
      }
    });
  },

	launchNew:function(btn, e){
    e.stopPropagation();

    // define the new record to bind to the form
    var rec = new this.explorer.store.model;

    // set the defaultFilter properties on the explorer to the new record
    if(Ext.isDefined(this.explorer.defaultFilter)){
      Ext.each(this.explorer.defaultFilter, function(filter){
        rec.set(filter.property, filter.value);
      });
    };

    if(Ext.isDefined(this.explorer.defaultSearch)){
      var searchFilter = Buildit.util.Data.search_to_object(this.explorer.defaultSearch);
      Ext.each(Object.keys(searchFilter), function(key){
        rec.set(key, searchFilter[key]);
      });
    };

    rec.store = this.explorer.store;
    var newForm = this.explorer.newForm || this.explorer.newForms[0];


    if(Ext.isDefined(newForm)){
      var canvas  = Buildit.getTargetSlot();
      var popup   = canvas.add(Ext.apply(newForm, {
        record        : rec,
        cls           : 'popup',
        association   : this.explorer.association,
        mode          : 'popup',
        explorer      : this.explorer,
        bannerConfig  : {
          title       : this.explorer.title,
          subtitle    : this.explorer.subtitle
        }
      }));
      canvas.setActiveTab(popup);
    } else {
      this.explorer.fireEvent('newaction', this.explorer);
    }

  },


});
Ext.define('Buildit.ux.explorer.ContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.buildit-explorer-ContextMenu',

  
  initComponent: function() {
    var me             = this,
        hideBookmarks  = true;

    if(me.explorer.allowBookmarking && !Ext.isDefined(me.explorer.association)){
      hideBookmarks = false;
    }

    Ext.apply(me, {

      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-remove',
          tooltip    : 'Delete selected items',
          action     : 'delete',
          confirm    : true,
          multi      : true,
          privileges : [],
          listeners  : {
            click      : {
              fn         : me.clickDelete,
              scope      : me
            }
          }
        },

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls     : 'icon-download-alt',
          tooltip     : 'Export',
          action      : 'export',
          confirm     : true,
          multi       : true,
          privileges  : [],
          listeners   : {
            click       : {
              fn: this.clickExport,
              scope: me
            }
          }
        },


        /**
         * SELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-check',
          tooltip    : 'Select all',
          action     : 'select-all',
          confirm    : true,
          multi      : true,
          privileges : [],
          listeners  : {
            click      : {
              fn: this.clickSelectAll,
              scope: me
            }
          }
        },


        /**
         * DESELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-check-empty',
          tooltip    : 'Deselect all',
          action     : 'deselect-all',
          confirm    : true,
          privileges : [],
          listeners  : {
            click      : {
              fn: this.clickDeselectAll,
              scope: me
            }
          }
        }

        // RIGHT ACTIONS (End)

      ],


      leftActions: [

        // LEFT ACTIONS (Start) =================================================================
        
        /**
         * BOOKMARKS
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls     : 'icon-bookmark',
          tooltip     : 'View Bookmarked Items',
          action      : 'bookmarks',
          hidden      : hideBookmarks,
          listeners   : {
            click       : {
              fn          : Ext.emptyFn,
              scope       : me
            }
          }
        }

        // LEFT ACTIONS (End)

      ]

    });

    this.callParent();
  },



  // ACTION HANDLERS (Start) ====================================================================

  clickDelete : function(btn, e, eOpts){
    Buildit.logic.explorer.action.Delete.click(btn);
  },

  clickExport : function(btn, e, eOpts){
    Buildit.logic.explorer.action.Export.click(btn);
  },

  clickSelectAll : function(btn, e, eOpts){
    Buildit.logic.explorer.action.SelectAll.click(btn);
  },

  clickDeselectAll : function(btn, e, eOpts){
    Buildit.logic.explorer.action.DeselectAll.click(btn);
  }

  // ACTION HANDLERS (End)

});
/**
 *
 */

Ext.define('Buildit.ux.explorer.Filter', {
  extend: 'Ext.window.Window',
  alias: ['widget.buildit-explorer-Filter', 'widget.explorerfilter'],


  /**
   * @cfg {Integer} width
   * The width of the filter popup panel
   */
  width    : 280,


  /**
   * @cfg {Object} filterConfig
   */
  filterConfig : undefined,

  /**
   * @cfg {Object} filters
   */
  filters      : undefined,

  /**
   * 
   */
  bodyPadding  : 15,

  categories   : [],

  header       : false,


  /**
   * @cfg {Buildit.ux.explorer.Panel} explorer (required)
   * The instance of the explorer to which this find panel will be bound.
   *
   */
  explorer     : undefined,

  /**
   * @cfg {Buildit.ux.explorer.Banner} banner
   */
  banner       : undefined,


  closable     : false,
  
  title        : 'Filter',
  
  collapsed    : true,
  
  draggable    : false,
  
  resizable    : false,
  
  ui           : 'plain',
  
  style        : 'background: #2c3e50',
  
  defaultAlign : 'tr-br',
  
  shadow       : false,

  layout       : {
    type         : 'vbox',
    align        : 'stretch'
  },

  maxHeight    : 500,

  autoScroll   : true,


  initComponent : function(){
    var me = this;

    Ext.applyIf(this, {
      filters: []
    });

    me.callParent();

    Buildit.util.ComponentManager.register(me.explorer, me);

    me.prepareFilterOptions();
  }, // initComponent


  /**
   * Takes the filterConfig and builds each of the options for the
   * supplied categories. In addition 
   */
  prepareFilterOptions : function(){

    var me = this;

    Ext.each(this.filters, function(filter, index){
      var category = filter.category || filter.showAll;
      me.categories.push(category);
      me.add([{xtype: 'label', text: category, cls: 'category'}]);
      var items = filter.items || [];
      Ext.each(items, function(item){
        me.add([{
          xtype       : 'checkbox',
          ui          : 'plain',
          boxLabel    : item[1],
          inputValue  : item[0],
          category    : category,
          cls         : 'filter-item',
          handler     : me.onSelectFilter,
          scope       : me
        }]);
      });
    });

  }, // prepareFilterOptions

  onSelectFilter : function(box, newValue, oldValue, eOpts){
    var me       = this,
        filters  = [];

    Ext.each(me.categories, function(category){
      var selector  = "checkbox[value=true][category=" + category + "]",
          selected  = me.query(selector),
          catFilter = [];
      
      Ext.each(selected, function(item){
        catFilter.push(item.getSubmitValue());
      });

      filters.push(catFilter);
    });
  
    Ext.merge(me.explorer.store.proxy.extraParams, {
      search: {
        filters: filters
      }
    });
    me.explorer.store.load();

    
  } // onSelectFilter

  
});
/**
 * Find is a specialized component utilized exclusively by the explorer for the purpose of
 * delegating the search/find funcationality of the explorer for better encapsulation. It is not
 * recommended that this class be instantiated directly given its dependency on the esplorer as a
 * host component.
 * @private
 */

Ext.define('Buildit.ux.explorer.Find', {
  extend: 'Buildit.ux.Popup',
  alias: ['widget.buildit-explorer-Find', 'widget.explorerfind'],


  /**
   * @cfg {String} findDescription
   * The text you wish to display under the find textbox on the explorer find panel.
   *
   * If you do not supply a value, this will be left empty.
   */
  findDescription : undefined,


  /**
   * @cfg {String} findEmptyText
   * The emptyText (watermark) applied to the find text box on the find panel.
   */
  findEmptyText   : undefined,


  /**
   * @cfg {Buildit.ux.explorer.Panel} explorer (required)
   * The instance of the explorer to which this find panel will be bound.
   *
   */
  explorer : undefined,

  bodyCls  :                'explorer-find',



  initComponent : function(){
    var me = this;

    var requiredConfigs = ['explorer'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.explorer.Find is undefined: ' + cfg);
      }
    });

    // set defaults if not provided
    Ext.apply(this, {
      defaultHeight    : 100,
      dockAt           : 'north',
      dockPadding      : 0,
      modal            : false
    });


    var searchCriteria = this.explorer.store.getProxy().extraParams.search;
    if(searchCriteria != undefined){
      searchCriteria = searchCriteria.criteria;
    }


    // add a textbox to the panel to receive the input
    Ext.apply(this, {
      layout: {
        type          : 'hbox',
        pack          : 'center',
        align         : 'middle'
      },
      defaultFocus    : 'searchbox',
      items: [
        {
          itemId        : 'searchbox',
          width         : 400,
          tabIndex      : 0,
          fieldLabel    : 'Find',
          labelSeparator: undefined,
          labelAlign    : 'left',
          labelWidth    : 70,
          xtype         : 'textfield',
          value         : searchCriteria,
          emptyText     : 'Enter 2 characters or more',
          name          : 'find',
          listeners     : {
            change        : function(field) {
              me.explorer.store.currentPage = 1;
              me.processFind(field);
            },
            specialkey    : function(field, e) {
              if (e.getKey() == e.ENTER) {
                me.processFind(field);
              }
            },
            afterrender   : function(cmp, e){
              Ext.defer(function(){
                cmp.focus();  
              },
              100
              )
              
            }
          }
        }
      ]
    });

    me.callParent();

  }, // initComponent


  /**
   *
   */
  processFind : function(field){
    var store = this.explorer.store;
    if(store.getProxy().extraParams.search == undefined){
      store.getProxy().extraParams.search = {criteria: ''};
    };
    if(field.value.length != 1){
      store.getProxy().extraParams.search.criteria = field.value;
      store.load();
    }
    //this.close();
  }
});
/**
 * Charts provide a flexible way to achieve a wide range of data visualization capablitities.
 * Each Chart gets its data directly from a {@link Ext.data.Store Store}, and automatically
 * updates its display whenever data in the Store changes. In addition, the look and feel
 * of a Chart can be customized using {@link Ext.chart.theme.Theme Theme}s.
 * 
 * ## Creating a Simple Explorer
 * 
 * Every Chart has three key parts - a {@link Ext.data.Store Store} that contains the data,
 * an array of {@link Ext.chart.axis.Axis Axes} which define the boundaries of the Chart,
 * and one or more {@link Ext.chart.series.Series Series} to handle the visual rendering of the data points.
 * 
 * ### 1. Creating a Store
 * 
 * The first step is to create a {@link Ext.data.Model Model} that represents the type of
 * data that will be displayed in the Chart. For example the data for a chart that displays
 * a weather forecast could be represented as a series of "WeatherPoint" data points with
 * two fields - "temperature", and "date":
 * 
 *     Ext.define('WeatherPoint', {
 *         extend: 'Ext.data.Model',
 *         fields: ['temperature', 'date']
 *     });
 * 
 * Next a {@link Ext.data.Store Store} must be created.  The store contains a collection of "WeatherPoint" Model instances.
 * The data could be loaded dynamically, but for sake of ease this example uses inline data:
 * 
 *     var store = Ext.create('Ext.data.Store', {
 *         model: 'WeatherPoint',
 *         data: [
 *             { temperature: 58, date: new Date(2011, 1, 1, 8) },
 *             { temperature: 63, date: new Date(2011, 1, 1, 9) },
 *             { temperature: 73, date: new Date(2011, 1, 1, 10) },
 *             { temperature: 78, date: new Date(2011, 1, 1, 11) },
 *             { temperature: 81, date: new Date(2011, 1, 1, 12) }
 *         ]
 *     });
 *    
 * For additional information on Models and Stores please refer to the [Data Guide](#/guide/data).
 * 
 * ### 2. Creating the Chart object
 * 
 * Now that a Store has been created it can be used in a Chart:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *        renderTo: Ext.getBody(),
 *        width: 400,
 *        height: 300,
 *        store: store
 *     });
 *    
 * That's all it takes to create a Chart instance that is backed by a Store.
 * However, if the above code is run in a browser, a blank screen will be displayed.
 * This is because the two pieces that are responsible for the visual display,
 * the Chart's {@link #cfg-axes axes} and {@link #cfg-series series}, have not yet been defined.
 * 
 * ### 3. Configuring the Axes
 * 
 * {@link Ext.chart.axis.Axis Axes} are the lines that define the boundaries of the data points that a Chart can display.
 * This example uses one of the most common Axes configurations - a horizontal "x" axis, and a vertical "y" axis:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             {
 *                 title: 'Temperature',
 *                 type: 'Numeric',
 *                 position: 'left',
 *                 fields: ['temperature'],
 *                 minimum: 0,
 *                 maximum: 100
 *             },
 *             {
 *                 title: 'Time',
 *                 type: 'Time',
 *                 position: 'bottom',
 *                 fields: ['date'],
 *                 dateFormat: 'ga'
 *             }
 *         ]
 *     });
 *    
 * The "Temperature" axis is a vertical {@link Ext.chart.axis.Numeric Numeric Axis} and is positioned on the left edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "temperature" field that was
 * defined above. The minimum value for this axis is "0", and the maximum is "100".
 * 
 * The horizontal axis is a {@link Ext.chart.axis.Time Time Axis} and is positioned on the bottom edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "date" field.
 * The {@link Ext.chart.axis.Time#cfg-dateFormat dateFormat}
 * configuration tells the Time Axis how to format it's labels.
 * 
 * Here's what the Chart looks like now that it has its Axes configured:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart1.png Chart Axes}
 * 
 * ### 4. Configuring the Series
 * 
 * The final step in creating a simple Chart is to configure one or more {@link Ext.chart.series.Series Series}.
 * Series are responsible for the visual representation of the data points contained in the Store.
 * This example only has one Series:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             ...
 *         ],
 *         series: [
 *             {
 *                 type: 'line',
 *                 xField: 'date',
 *                 yField: 'temperature'
 *             }
 *         ]
 *     });
 *     
 * This Series is a {@link Ext.chart.series.Line Line Series}, and it uses the "date" and "temperature" fields
 * from the "WeatherPoint" Models in the Store to plot its data points:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart2.png Line Series}
 * 
 * See the [Line Charts Example](#!/example/charts/Charts.html) for a live demo.
 * 
 * ## Themes
 * 
 * The color scheme for a Chart can be easily changed using the {@link #cfg-theme theme} configuration option:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         theme: 'Green',
 *         ...
 *     });
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart3.png Green Theme}
 * 
 * For more information on Charts please refer to the [Charting Guide](#/guide/charting).
 */

Ext.define('Buildit.ux.explorer.Panel', {
  extend:'Ext.panel.Panel',
  alias:['widget.buildit-Explorer', 'widget.explorer'],

  /**
   * @cfg {String} cls
   * The css class to be applied to the explorer panel outer element.
   */
  cls: 'explorer',


  /**
   * @cfg {String} bodyCls
   * The css class to be applied to the explorer panel body element.
   */
  bodyCls: 'explorer-body',



  /**
   * @cfg {Array} columns (required)
   * The collection of column definitions to be applied to the explorers nested grid.
   */
  columns: undefined,


  /**
   * @cfg {Ext.data.Store} store (required)
   * The data store bound to the explorer for fetching data from the server.
   */
  store: undefined,


  /**
   * @cfg {"standard"/"association"} mode
   * Indicates if the explorer will be stand-alone (standard) or nested on an explorer (association).
   */
  mode: 'standard',


  header: false,


  /**
   *
   */
  defaultSort:[],


  /**
   *
   */
  defaultFilter:undefined,


  /**
   *
   */
  defaultSearch:undefined,



  /**
   *
   */
  multiSelect:true,


  /**
   *
   */
  columnLines:false,


  /**
   * @cfg {Boolean}
   */
  allowInlineEdit : false,


  allowSave       : false,


  beforeEdit      : Ext.emptyFn,


  allowNew        : true,


  allowViews      : false,



  allowFileDrop   : false,



  allowColumnChanger: true,


  /**
   * @cfg {Boolean} allowFind
   * Indicates if the explorer will provide the option to the end user to launch the find panel.
   */
  allowFind : false,


  /**
   * @cfg {String} findDescription
   * The text you wish to display under the find textbox on the explorer find panel.
   *
   * If you do not supply a value, this will be left empty.
   */
  findDescription: undefined,


  /**
   * @cfg {String} findEmptyText
   * The emptyText (watermark) applied to the find text box on the find panel.
   */
  findEmptyText: undefined,


  /**
   * @cfg {String} title
   * The primary title to be prominently displayed on the explorer panel.
   */
  title:undefined,


  /**
   * @cfg {String} subtitle
   * The secondary title that will be displayed in relation to the primary title in a lesser capacity.
   */
  subtitle:undefined,


  /**
   *
   */
  gridBorder : false,


  /**
   *
   */
  gridPadding : 4,


  /**
   *
   */
  allowDelete : true,


  /**
   *
   */
  backTabIndex : 1,


  /**
   *
   */
  contextMenu : undefined,

  /**
   *
   */
  contextMenuConfig : {},


  /**
   *
   */
  hiddenColumns : undefined,


  /**
   *
   */
  formConfig : {},


  /**
   *
   */
  inspectorConfig : {},

  /**
   *
   */
  filters : undefined,


  /**
   *
   */
  filterConfig : undefined,

  defaults: {
    bodyStyle: {
      background: 'transparent'
    }
  },


  ui         : 'plain',


  gridConfig : undefined,


  bannerActions : [],

  stateEnabled : true,

  allowInspect : true,


  allowBookmarking : false,


  /**
   *
   */
  initComponent:function () {

    var me = this;

    var requiredConfigs = ['columns', 'store'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.Explorer is undefined: ' + cfg);
      }
    });

    // Process each column to disable the column menu
    this.prepareColumns();


    // Add custom events
    this.addEvents([


      /**
       * @event
       * Triggered when the user selects the inspect action from the grid.
       */
      'iteminspect', 

      /**
       * @event 
       * Triggered after the New action on the toolbar is selected.
       */
      'newaction',


      /**
       * @event
       * Fired when a file is dropped onto the grid of the panel and allowFileDrop enabled
       */
      'filesdropped'

    ]);

    if(Ext.isDefined(this.defaultFilter)){
      this.store.filter(this.defaultFilter);
    }else{
      this.store.clearFilter();
    }

    if(Ext.isDefined(this.defaultSearch)){
      this.store.proxy.extraParams.search = this.defaultSearch;
      this.store.load();
    }else{
      Ext.destroyMembers(this.store.proxy.extraParams, 'search');
      this.store.load();
    }


    Ext.applyIf(this, {
      gridPanelConfig : {},
      plugins         : []
    });


    if(this.allowInspect){
      if(this.inspectorConfig){
        this.columns = Ext.Array.merge([{
          xtype    : 'actioncolumn',
          menuText : 'Inspect',
          width    : 30,
          handler  : function(view, rowIndex, colIndex, item, e, record, row){
            me.fireEvent('inspectitem', me, record, item, rowIndex);
            me.launchInspector(record);
          },
          iconCls    : 'action-inspect',
          tooltip    : 'Inspect row'
        }], this.columns);
      }
    }

    var stateId = (me.stateEnabled ? this.xtype + '-State' : undefined);

    this.gridPanelConfig = {
      xtype       : 'grid',
      itemId      : 'grid',
      flex        : 1,
      autoScroll  : true,
      store       : this.store,
      columns     : this.columns,
      columnLines : false,
      rowLines    : false,
      border      : this.gridBorder,
      stateId     : stateId,
      stateful    : me.stateEnabled,
      bodyCls     : 'explorer-grid',
      padding     : '0 60 20 60',
      fieldBodyCls: "align-top",
      dockedItems : [
        {
          itemId      : 'pagingtoolbar',
          cls         : 'paging-toolbar',
          xtype       : 'pagingtoolbar',
          store       : this.store,
          dock        : 'bottom',
          displayInfo :true,
          items       : [
            {
              text      : 'Reset',
              handler   : me.resetData,
              scope     : me
            }
          ]
        }],
      plugins     : [],
      features    : [],
      region      : 'center',
      multiSelect : this.multiSelect,
      columnLines : this.columnLines,
      viewConfig  : {
        stripeRows  : false,
        loadMask    : false
      },
      listeners   : {
        sortchange  : function (cmp) {
          me.getGrid().store.load();
        }
      }
    };

    this.gridPanelConfig = Ext.merge(this.gridPanelConfig, this.gridConfig)

    Ext.applyIf(this, {
      filters   : [],
      toolbar   : {
        xtype     : 'toolbar',
        items     : []
      }
		});

		//this.store.sort(this.defaultSort);

    this.grid = Ext.create('Ext.grid.Panel', this.gridPanelConfig);

    Ext.apply(this, {
      layout         : 'border',
      border         : false,
      bodyStyle      : {
        background     : 'transparent'
      },
      items          : [this.grid],
      dockedItems    :[{
        xtype          : 'buildit-explorer-Banner',
        backTabIndex   : this.backTabIndex,
        explorer       : me
      }]
    });

		if(this.allowInlineEdit == true){
		  this.grid.initPlugin(
        Ext.create('Ext.grid.plugin.RowEditing', {
          clicksToMoveEditor  : 1,
          autoCancel          : false,
          clicksToEdit        : 0,
          pluginId            : 'editplugin',
          listeners           : {
            'beforeedit'      : me.beforeEdit
          }
        })
      );

      Ext.defer(function(){
        me.grid.getView().refresh();
      }, 1000);

		}


		me.callParent(arguments);

    // setup file drop if enabled
    if(me.allowFileDrop){
      me.setupFileDrop();
    }

	  // prepares the explorer and grid actions
    this.prepareActions();
    this.mapKeys();

  }, // initComponent

  setupFileDrop : function(){
    var me = this;

    me.grid.on('render', function(){
      var dropZone = document.getElementById(me.grid.getEl().id);

      dropZone.addEventListener("dragover",  me.fileDragHover, false);
      dropZone.addEventListener("dragleave", me.fileDragHover, false);
      dropZone.addEventListener("drop", function(e){
          e.stopPropagation();
          e.preventDefault();
          me.fileDropHandler(e);
        },
        false
      );

    });

  }, // setupFileDrop

  fileDropHandler : function(e) {
    var files = e.target.files || e.dataTransfer.files;
    this.fireEvent('filesdropped', this, files);
  }, // fileDropHandler

  /**
   *
   */
  fileDragHover : function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, // fileDragHover

  launchInspector : function(record){

    var me              = this,
        canvas          = Buildit.getTargetSlot(),
        additionalConf  = {
          record        : record,
          backTabIndex  : me.id
        };

    if(!Ext.Object.isEmpty(this.inspectorConfig)){
      var inspector = Ext.createWidget(Ext.merge(additionalConf, me.inspectorConfig));
      canvas.add(inspector);
      inspector.show();
      canvas.setActive(inspector);
    }

  }, // launchInspector


  mapKeys:function(){

    // Define CTRL+B for BACK
    var resetKey = new Ext.util.KeyMap(Ext.getDoc(), {
        key: Ext.EventObject.R,
        ctrl: true,
        handler: this.resetData,
        scope: this
    });
  },

	/**
	 * Gets the grid
	 * @return {Ext.grid.Panel} The grid panel
	 */
	getGrid:function () {
		return this.down('#grid');
	},

	/**
	 * @return {Ext.panel.Panel} The advanced panel
	 */
	getAdvanced:function () {
		return this.down('advanced');
	},


	/**
	 * Iterates over the default filters array and returns a hash
	 * of key/value pairs
	 * @return {Object}
	 */
	getDefaultFiltersAsFields:function () {
		var result = {};

		Ext.Array.each(this.defaultFilter, function (filter, index, defaultFilterItSelf) {
			var queryString = filter.property + '=' + filter.value;
			result = Ext.Object.merge(result, Ext.Object.fromQueryString(queryString));
		});
		return result;
	},

	prepareActions:function(){

    var ecmXtype = this.contextMenuConfig.xtype;
    var me = this;

    if(Ext.isDefined(ecmXtype)){
      var config = Ext.clone(this.contextMenuConfig);
      Ext.destroyMembers(config, 'xtype');

      // set the context menu for the explorer
      this.contextMenu = Ext.createWidget(ecmXtype, Ext.merge(config, {
        contextOwner : this,
        explorer     : me
      }));

      // register the event click
      this.on('render', function(c){
        c.getEl().on('contextmenu', function(e, t){
          e.stopEvent();
          Buildit.util.ComponentManager.register(this, this.contextMenu);
          this.contextMenu.show();
        }, this);

        c.getEl().on('click', function(e,t){
          this.contextMenu.hide();
        }, this);
      });

      me.grid.on('render', function(c){
        c.on('containercontextmenu', function(cmp, e, t){
          e.stopEvent();
          Buildit.util.ComponentManager.register(me, me.contextMenu);
          me.contextMenu.show();
        }, me);

        c.on('click', function(e,t){
          me.contextMenu.hide();
        }, me);
      });


    };

	},


  resetData:function(){
	  if(this.store.proxy.extraParams.search)
      this.store.proxy.extraParams.search.criteria = '';

    this.store.sorters.clear();
    this.store.load();
  },


  prepareColumns:function(){
    var columns = [];

    var hiddenColumns = this.hiddenColumns;


    Ext.each(this.columns, function(column){
      var hidden = false;

      if(Ext.Array.contains(hiddenColumns || [], column.dataIndex)){
        hidden = true;
      }

      columns.push(Ext.apply(column, {menuDisabled: this.allowColumnChanger, hidden: hidden}));

    });

    this.columns = columns;
  }, // prepareColumns


  /**
   * A simple helper method designed to return the search criteria currently applied to the 
   * explorer. This would include any text search criteria along with field specific filters.
   */
  getSearchCriteria : function(){
    return this.store.proxy.extraParams.search;

  } // getSearchCriteria


});
/**
 * @private
 */

Ext.define('Buildit.ux.inspector.Banner', {
  extend    : 'Ext.toolbar.Toolbar',
  alias     : 'widget.buildit-inspector-Banner',


  /**
   * @cfg {Buildit.ux.inspector.Panel} inspector
   * The index of the tab in the canvas to which this component will navigate too.
   *
   * All primary components are added to the canvas when initiated. It is a tabbed component
   * yet all references to the tab strip have been hidden. In order to navigate between tabs,
   * it must be done programmatically, such as the outcome of the back button.
   */
  inspector : undefined,


  backTabIndex : undefined,

  header    : false,

  initComponent : function(){
    var me = this;

    Ext.applyIf(this, {
      height    : 120,
      cls       : 'banner',
      defaults  : {
        ui        : 'plain',
        margin    : 0
      }
    });

    var template = Ext.XTemplate('<h2>{subtitle}</h2><h1>{title}</h1>', {compiled: true});


    var backConfig = {
      cls      : 'back',
      handler  : me.navigateBack,
      scope    : this,
      tooltip  : 'Back'
    };

    var collapseConfig = {
      cls      : 'collapse',
      handler  : me.collapseSidebar,
      scope    : this,
      tooltip  : 'Collapse sidebar'
    };

    
    if(Buildit.uiMode == 'workspace'){
      me.westConfig = collapseConfig;
      me.eastConfig = backConfig;
    } else {
      me.westConfig = backConfig;
      me.eastConfig = collapseConfig;
    }




    Ext.apply(this, {
	    bodyStyle: 'background: transparent',
      items: [
        me.westConfig,
        {
          xtype    : 'tbspacer',
          width    : 20
        },{
          xtype: 'panel', cls: 'title-block',
          data: {title: this.bannerTitle, subtitle: this.bannerSubtitle},
          tpl: template
        },
        '->',
        me.eastConfig
      ]
    });

    this.callParent();

  },

  collapseSidebar : function() {
    this.inspector.sidebar.toggleCollapse();
  },


  navigateBack:function(btn, e){
	  e.stopPropagation();
	  this.inspector.close();
	}
});
/**
 * Charts provide a flexible way to achieve a wide range of data visualization capablitities.
 * Each Chart gets its data directly from a {@link Ext.data.Store Store}, and automatically
 * updates its display whenever data in the Store changes. In addition, the look and feel
 * of a Chart can be customized using {@link Ext.chart.theme.Theme Theme}s.
 * 
 * ## Creating a Simple Explorer
 * 
 * Every Chart has three key parts - a {@link Ext.data.Store Store} that contains the data,
 * an array of {@link Ext.chart.axis.Axis Axes} which define the boundaries of the Chart,
 * and one or more {@link Ext.chart.series.Series Series} to handle the visual rendering of the data points.
 * 
 * ### 1. Creating a Store
 * 
 * The first step is to create a {@link Ext.data.Model Model} that represents the type of
 * data that will be displayed in the Chart. For example the data for a chart that displays
 * a weather forecast could be represented as a series of "WeatherPoint" data points with
 * two fields - "temperature", and "date":
 * 
 *     Ext.define('WeatherPoint', {
 *         extend: 'Ext.data.Model',
 *         fields: ['temperature', 'date']
 *     });
 * 
 * Next a {@link Ext.data.Store Store} must be created.  The store contains a collection of "WeatherPoint" Model instances.
 * The data could be loaded dynamically, but for sake of ease this example uses inline data:
 * 
 *     var store = Ext.create('Ext.data.Store', {
 *         model: 'WeatherPoint',
 *         data: [
 *             { temperature: 58, date: new Date(2011, 1, 1, 8) },
 *             { temperature: 63, date: new Date(2011, 1, 1, 9) },
 *             { temperature: 73, date: new Date(2011, 1, 1, 10) },
 *             { temperature: 78, date: new Date(2011, 1, 1, 11) },
 *             { temperature: 81, date: new Date(2011, 1, 1, 12) }
 *         ]
 *     });
 *    
 * For additional information on Models and Stores please refer to the [Data Guide](#/guide/data).
 * 
 * ### 2. Creating the Chart object
 * 
 * Now that a Store has been created it can be used in a Chart:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *        renderTo: Ext.getBody(),
 *        width: 400,
 *        height: 300,
 *        store: store
 *     });
 *    
 * That's all it takes to create a Chart instance that is backed by a Store.
 * However, if the above code is run in a browser, a blank screen will be displayed.
 * This is because the two pieces that are responsible for the visual display,
 * the Chart's {@link #cfg-axes axes} and {@link #cfg-series series}, have not yet been defined.
 * 
 * ### 3. Configuring the Axes
 * 
 * {@link Ext.chart.axis.Axis Axes} are the lines that define the boundaries of the data points that a Chart can display.
 * This example uses one of the most common Axes configurations - a horizontal "x" axis, and a vertical "y" axis:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             {
 *                 title: 'Temperature',
 *                 type: 'Numeric',
 *                 position: 'left',
 *                 fields: ['temperature'],
 *                 minimum: 0,
 *                 maximum: 100
 *             },
 *             {
 *                 title: 'Time',
 *                 type: 'Time',
 *                 position: 'bottom',
 *                 fields: ['date'],
 *                 dateFormat: 'ga'
 *             }
 *         ]
 *     });
 *    
 * The "Temperature" axis is a vertical {@link Ext.chart.axis.Numeric Numeric Axis} and is positioned on the left edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "temperature" field that was
 * defined above. The minimum value for this axis is "0", and the maximum is "100".
 * 
 * The horizontal axis is a {@link Ext.chart.axis.Time Time Axis} and is positioned on the bottom edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "date" field.
 * The {@link Ext.chart.axis.Time#cfg-dateFormat dateFormat}
 * configuration tells the Time Axis how to format it's labels.
 * 
 * Here's what the Chart looks like now that it has its Axes configured:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart1.png Chart Axes}
 * 
 * ### 4. Configuring the Series
 * 
 * The final step in creating a simple Chart is to configure one or more {@link Ext.chart.series.Series Series}.
 * Series are responsible for the visual representation of the data points contained in the Store.
 * This example only has one Series:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             ...
 *         ],
 *         series: [
 *             {
 *                 type: 'line',
 *                 xField: 'date',
 *                 yField: 'temperature'
 *             }
 *         ]
 *     });
 *     
 * This Series is a {@link Ext.chart.series.Line Line Series}, and it uses the "date" and "temperature" fields
 * from the "WeatherPoint" Models in the Store to plot its data points:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart2.png Line Series}
 * 
 * See the [Line Charts Example](#!/example/charts/Charts.html) for a live demo.
 * 
 * ## Themes
 * 
 * The color scheme for a Chart can be easily changed using the {@link #cfg-theme theme} configuration option:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         theme: 'Green',
 *         ...
 *     });
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart3.png Green Theme}
 * 
 * For more information on Charts please refer to the [Charting Guide](#/guide/charting).
 */

Ext.define('Buildit.ux.inspector.Card', {
	extend:'Ext.panel.Panel',
	alias:'widget.buildit-inspector-Card',

  /**
   * @cfg {Boolean} showBadge
   */
	showBadge : false,

	card : undefined,


	group : undefined,

  /**
   * @cfg {String} badge
   * Represents the text that will appear in the badge
   */
	badge : undefined,

	module : 'default',


  inspector : undefined,

	initComponent : function(){

	  var me = this;
	  var cls = (me.group ? 'subtab ' : 'tab ');

    if(me.group != undefined)
      me.module = me.group.module;

	  Ext.apply(me, {
	  	ui        : 'plain',
	    header    : false,
	    height    : 52,
	    flex      : 1,
	    border    : 0,
	    hidden    : (me.group != undefined),
	    listeners : {
	      'render'  : function(panel) {
          panel.getEl().on('click', function() {
            me.fireEvent('click', panel);
          },panel);
        }
	    },
	    cls       : cls + me.module,
	    html      : ''
	  });

	  me.tpl = new Ext.XTemplate('<div class="logo"></div><div class="title">{title}</div>', {compiled: true});

	  me.data = {title: me.title, badge: me.badge};

	  me.callParent();



    if(me.showBadge===true){
      if(Ext.isDefined(me.card.store)){
        me.tpl = new Ext.XTemplate('<div class="badge">{badge}</div><div class="logo"></div><div class="title">{title}</div>', {compiled: true});

        me.card.store.on('load', function(store, records, successful, e){
          me.badge = store.getTotalCount() || '';
          me.update({module: me.module, title: me.title, badge: me.badge});
        });
      }
    }


	}
});
/**
 * Charts provide a flexible way to achieve a wide range of data visualization capablitities.
 * Each Chart gets its data directly from a {@link Ext.data.Store Store}, and automatically
 * updates its display whenever data in the Store changes. In addition, the look and feel
 * of a Chart can be customized using {@link Ext.chart.theme.Theme Theme}s.
 * 
 * ## Creating a Simple Explorer
 * 
 * Every Chart has three key parts - a {@link Ext.data.Store Store} that contains the data,
 * an array of {@link Ext.chart.axis.Axis Axes} which define the boundaries of the Chart,
 * and one or more {@link Ext.chart.series.Series Series} to handle the visual rendering of the data points.
 * 
 * ### 1. Creating a Store
 * 
 * The first step is to create a {@link Ext.data.Model Model} that represents the type of
 * data that will be displayed in the Chart. For example the data for a chart that displays
 * a weather forecast could be represented as a series of "WeatherPoint" data points with
 * two fields - "temperature", and "date":
 * 
 *     Ext.define('WeatherPoint', {
 *         extend: 'Ext.data.Model',
 *         fields: ['temperature', 'date']
 *     });
 * 
 * Next a {@link Ext.data.Store Store} must be created.  The store contains a collection of "WeatherPoint" Model instances.
 * The data could be loaded dynamically, but for sake of ease this example uses inline data:
 * 
 *     var store = Ext.create('Ext.data.Store', {
 *         model: 'WeatherPoint',
 *         data: [
 *             { temperature: 58, date: new Date(2011, 1, 1, 8) },
 *             { temperature: 63, date: new Date(2011, 1, 1, 9) },
 *             { temperature: 73, date: new Date(2011, 1, 1, 10) },
 *             { temperature: 78, date: new Date(2011, 1, 1, 11) },
 *             { temperature: 81, date: new Date(2011, 1, 1, 12) }
 *         ]
 *     });
 *    
 * For additional information on Models and Stores please refer to the [Data Guide](#/guide/data).
 * 
 * ### 2. Creating the Chart object
 * 
 * Now that a Store has been created it can be used in a Chart:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *        renderTo: Ext.getBody(),
 *        width: 400,
 *        height: 300,
 *        store: store
 *     });
 *    
 * That's all it takes to create a Chart instance that is backed by a Store.
 * However, if the above code is run in a browser, a blank screen will be displayed.
 * This is because the two pieces that are responsible for the visual display,
 * the Chart's {@link #cfg-axes axes} and {@link #cfg-series series}, have not yet been defined.
 * 
 * ### 3. Configuring the Axes
 * 
 * {@link Ext.chart.axis.Axis Axes} are the lines that define the boundaries of the data points that a Chart can display.
 * This example uses one of the most common Axes configurations - a horizontal "x" axis, and a vertical "y" axis:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             {
 *                 title: 'Temperature',
 *                 type: 'Numeric',
 *                 position: 'left',
 *                 fields: ['temperature'],
 *                 minimum: 0,
 *                 maximum: 100
 *             },
 *             {
 *                 title: 'Time',
 *                 type: 'Time',
 *                 position: 'bottom',
 *                 fields: ['date'],
 *                 dateFormat: 'ga'
 *             }
 *         ]
 *     });
 *    
 * The "Temperature" axis is a vertical {@link Ext.chart.axis.Numeric Numeric Axis} and is positioned on the left edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "temperature" field that was
 * defined above. The minimum value for this axis is "0", and the maximum is "100".
 * 
 * The horizontal axis is a {@link Ext.chart.axis.Time Time Axis} and is positioned on the bottom edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "date" field.
 * The {@link Ext.chart.axis.Time#cfg-dateFormat dateFormat}
 * configuration tells the Time Axis how to format it's labels.
 * 
 * Here's what the Chart looks like now that it has its Axes configured:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart1.png Chart Axes}
 * 
 * ### 4. Configuring the Series
 * 
 * The final step in creating a simple Chart is to configure one or more {@link Ext.chart.series.Series Series}.
 * Series are responsible for the visual representation of the data points contained in the Store.
 * This example only has one Series:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             ...
 *         ],
 *         series: [
 *             {
 *                 type: 'line',
 *                 xField: 'date',
 *                 yField: 'temperature'
 *             }
 *         ]
 *     });
 *     
 * This Series is a {@link Ext.chart.series.Line Line Series}, and it uses the "date" and "temperature" fields
 * from the "WeatherPoint" Models in the Store to plot its data points:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart2.png Line Series}
 * 
 * See the [Line Charts Example](#!/example/charts/Charts.html) for a live demo.
 * 
 * ## Themes
 * 
 * The color scheme for a Chart can be easily changed using the {@link #cfg-theme theme} configuration option:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         theme: 'Green',
 *         ...
 *     });
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart3.png Green Theme}
 * 
 * For more information on Charts please refer to the [Charting Guide](#/guide/charting).
 */


Ext.define('Buildit.ux.inspector.CardGroup', {
	extend: 'Ext.panel.Panel',
	alias:  'buildit-CardGroup',

	module : 'default',

	inspector : undefined,

	initComponent:function(){
		var me = this;

	  Ext.apply(this, {
	  	ui        : 'plain',
	    header    : false,
	    height    : 52,
	    flex      : 1,
	    border    : 0,
	    cards     : [],
	    listeners : {
	      'render'  : function(panel) {
          panel.getEl().on('click', function() {
            this.fireEvent('click', panel);
          },panel);
        }
	    },
	    cls       : 'tab cardGroup ' + this.module,
	    html      : ''
	  });

    this.tpl = new Ext.XTemplate('<div class="logo"></div><div class="title">{title}</div>', {compiled: true});
	  this.data = {title: this.title};


		me.callParent();
	}, // initComponent

  /**
   *
   */
	closeGroup : function() {
    Ext.each(this.cards, function(card){ card.hide() });
	},

	toggle : function(){
	  var me = this;

    // toggle the cards on this cardGroup
    Ext.each(this.cards, function(card){
      card.isHidden() ? card.show() : card.hide();
    });

    // close all other cardGroups
    Ext.each(this.inspector.cardGroups, function(group){
      if(group != me)
        group.closeGroup();
    });
	}
});
/**
 * Charts provide a flexible way to achieve a wide range of data visualization capablitities.
 * Each Chart gets its data directly from a {@link Ext.data.Store Store}, and automatically
 * updates its display whenever data in the Store changes. In addition, the look and feel
 * of a Chart can be customized using {@link Ext.chart.theme.Theme Theme}s.
 * 
 * ## Creating a Simple Explorer
 * 
 * Every Chart has three key parts - a {@link Ext.data.Store Store} that contains the data,
 * an array of {@link Ext.chart.axis.Axis Axes} which define the boundaries of the Chart,
 * and one or more {@link Ext.chart.series.Series Series} to handle the visual rendering of the data points.
 * 
 * ### 1. Creating a Store
 * 
 * The first step is to create a {@link Ext.data.Model Model} that represents the type of
 * data that will be displayed in the Chart. For example the data for a chart that displays
 * a weather forecast could be represented as a series of "WeatherPoint" data points with
 * two fields - "temperature", and "date":
 * 
 *     Ext.define('WeatherPoint', {
 *         extend: 'Ext.data.Model',
 *         fields: ['temperature', 'date']
 *     });
 * 
 * Next a {@link Ext.data.Store Store} must be created.  The store contains a collection of "WeatherPoint" Model instances.
 * The data could be loaded dynamically, but for sake of ease this example uses inline data:
 * 
 *     var store = Ext.create('Ext.data.Store', {
 *         model: 'WeatherPoint',
 *         data: [
 *             { temperature: 58, date: new Date(2011, 1, 1, 8) },
 *             { temperature: 63, date: new Date(2011, 1, 1, 9) },
 *             { temperature: 73, date: new Date(2011, 1, 1, 10) },
 *             { temperature: 78, date: new Date(2011, 1, 1, 11) },
 *             { temperature: 81, date: new Date(2011, 1, 1, 12) }
 *         ]
 *     });
 *    
 * For additional information on Models and Stores please refer to the [Data Guide](#/guide/data).
 * 
 * ### 2. Creating the Chart object
 * 
 * Now that a Store has been created it can be used in a Chart:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *        renderTo: Ext.getBody(),
 *        width: 400,
 *        height: 300,
 *        store: store
 *     });
 *    
 * That's all it takes to create a Chart instance that is backed by a Store.
 * However, if the above code is run in a browser, a blank screen will be displayed.
 * This is because the two pieces that are responsible for the visual display,
 * the Chart's {@link #cfg-axes axes} and {@link #cfg-series series}, have not yet been defined.
 * 
 * ### 3. Configuring the Axes
 * 
 * {@link Ext.chart.axis.Axis Axes} are the lines that define the boundaries of the data points that a Chart can display.
 * This example uses one of the most common Axes configurations - a horizontal "x" axis, and a vertical "y" axis:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             {
 *                 title: 'Temperature',
 *                 type: 'Numeric',
 *                 position: 'left',
 *                 fields: ['temperature'],
 *                 minimum: 0,
 *                 maximum: 100
 *             },
 *             {
 *                 title: 'Time',
 *                 type: 'Time',
 *                 position: 'bottom',
 *                 fields: ['date'],
 *                 dateFormat: 'ga'
 *             }
 *         ]
 *     });
 *    
 * The "Temperature" axis is a vertical {@link Ext.chart.axis.Numeric Numeric Axis} and is positioned on the left edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "temperature" field that was
 * defined above. The minimum value for this axis is "0", and the maximum is "100".
 * 
 * The horizontal axis is a {@link Ext.chart.axis.Time Time Axis} and is positioned on the bottom edge of the Chart.
 * It represents the bounds of the data contained in the "WeatherPoint" Model's "date" field.
 * The {@link Ext.chart.axis.Time#cfg-dateFormat dateFormat}
 * configuration tells the Time Axis how to format it's labels.
 * 
 * Here's what the Chart looks like now that it has its Axes configured:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart1.png Chart Axes}
 * 
 * ### 4. Configuring the Series
 * 
 * The final step in creating a simple Chart is to configure one or more {@link Ext.chart.series.Series Series}.
 * Series are responsible for the visual representation of the data points contained in the Store.
 * This example only has one Series:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         axes: [
 *             ...
 *         ],
 *         series: [
 *             {
 *                 type: 'line',
 *                 xField: 'date',
 *                 yField: 'temperature'
 *             }
 *         ]
 *     });
 *     
 * This Series is a {@link Ext.chart.series.Line Line Series}, and it uses the "date" and "temperature" fields
 * from the "WeatherPoint" Models in the Store to plot its data points:
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart2.png Line Series}
 * 
 * See the [Line Charts Example](#!/example/charts/Charts.html) for a live demo.
 * 
 * ## Themes
 * 
 * The color scheme for a Chart can be easily changed using the {@link #cfg-theme theme} configuration option:
 * 
 *     Ext.create('Ext.chart.Chart', {
 *         ...
 *         theme: 'Green',
 *         ...
 *     });
 * 
 * {@img Ext.chart.Chart/Ext.chart.Chart3.png Green Theme}
 * 
 * For more information on Charts please refer to the [Charting Guide](#/guide/charting).
 */

Ext.define('Buildit.ux.inspector.Panel', {

	extend:'Ext.panel.Panel',
	alias:'widget.buildit-inspector-Panel',



	/**
   * @cfg {Ext.data.Model} record
   */
	record: undefined,

  /**
   * @cfg {Array} cards
   */
	cards: [],

  /*
   * @cfg {Object} associativeFilter
   */
  associativeFilter: undefined,

  /*
   * @cfg {Object} associativeCriteria
   */
  associativeCriteria: undefined,

  bodyStyle : 'background:transparent',


  // inherit docs
	initComponent:function () {
		var me = this;

		Ext.applyIf(this, {
			layout     : 'border',
	    border     : false,
      cls        : 'inspector',
      cardTabs   : [],
      cardGroups : []
    });

		// REQUIRED CONFIG
    var requiredConfigs = ['record'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.inspector.Panel is undefined: ' + cfg);
      }
    });

		me.callParent(arguments);
		me.prepareComponents();

	}, // initComponent


	/**
	 * @protected
	 *
	 *
	 */
	prepareComponents : function(){
		var me = this;

		this.sidebar = Ext.create('widget.panel', {
      region      : (Buildit.uiMode == 'workspace' ? 'east' : 'west'),
      width       : 260,
      border      : 0,
      padding     : 0,
      collapsedCls: 'collapsed-sidebar',
      ui          : 'plain',
      cls         : 'sidebar',
      layout      : {
        type      : 'vbox',
        align     : 'stretch'
      }
    });

		this.toolbar = Ext.create('Ext.panel.Panel', {
      overflowY   : 'auto',
      //cls         : 'sidebar',
      ui          : 'plain',
      border      : 0,
      flex        : 1,
      width       : 300
    });

    this.banner = Ext.create('widget.buildit-inspector-Banner', {
      backTabIndex   : this.backTabIndex,
      bannerTitle    : me.title,
      bannerSubtitle : me.subtitle,
      inspector      : me
    });

    this.deck   = Ext.create('Ext.panel.Panel', {
      layout         : 'card',
      border         : 0,
      bodyCls        : 'cards',
      region         : 'center',
      cardTabs       : [],
      flex           : 1
    });

    this.sidebar.add([this.banner, this.toolbar]);

    //Ext.suspendLayouts();
		Ext.each(this.cards, function (item) {
      if(item.xtype == 'buildit-CardGroup'){
        me.processCardGroup(me.deck, item, me.toolbar);
      } else {
			  me.processCard(me.deck, item, me.toolbar);
			}
		});
		Ext.resumeLayouts(true);

    me.add(this.sidebar, this.deck);

	}, // prepareComponents


	processCardGroup : function(workspace, group, toolbar) {
    var me = this;
	  var assignedId = Ext.id(group.xtype),
      options = {
        border       : false,
        flex         : 1,
        association  : this.record,
        record       : this.record,
        autoScroll   : true,
        id           : assignedId
      },
      iconCls = group.iconCls,
      title   = group.title;

	  var module = group.module || 'default';

	  var tabGroup = Ext.create('Buildit.ux.inspector.CardGroup', {
      title         : title,
      ui            : 'plain',
      module        : module,
      inspector     : me
		});

    tabGroup.on('click', function(){
      me.toggleCardGroup(tabGroup);
    });
    toolbar.add(tabGroup);

    this.cardGroups.push(tabGroup);
    this.cardTabs.push(tabGroup);
    this.cardTabs.length == 1 ? tabGroup.addCls('active') : tabGroup.addCls('inactive');

    Ext.each(group.cards, function (item) {
		  me.processCard(me.deck, item, me.toolbar, tabGroup);
		});

	},


  /**
   * @protected
   * Processes each of the supplied cards and creates a tab on the sidebar and a card
   * in the main container, setting the first one as active.
   * @param {Buildit.ux.inspector.Panel} workspace
   * @param {Object} card
   * @param {Ext.panel.Panel} toolbar
   */
	processCard : function (workspace, card, toolbar, group) {

    var assignedId = Ext.id(card.xtype),
        options = {
		      border       : false,
		      flex         : 1,
		      association  : this.record,
		      record       : this.record,
		      autoScroll   : true,
		      id           : assignedId
		    },
        iconCls = card.iconCls,
		    title   = card.title;

    var targetConfig = card.targetConfig || {};

		Ext.destroyMembers(card, 'iconCls', 'title', 'targetConfig');
    Ext.merge(options, targetConfig);

		var newCard = workspace.add(Ext.merge(card, options));

		var module = card.module || 'default';

    var tab = Ext.create('Buildit.ux.inspector.Card', {
      title         : title,
      ui            : 'plain',
      cardId        : assignedId,
      showBadge     : card.showBadge,
      card          : newCard,
      group         : group,
      module        : module,
      inspector     : this,
      targetConfig  : (card.targetConfig || {})
		});

		toolbar.add(tab);

	  tab.on('click', this.selectCard ,  this);

    if(group){
      group.cards.push(tab);
    }

    this.cardTabs.push(tab);
		this.cardTabs.length == 1 ? tab.addCls('active') : tab.addCls('inactive');

	}, // processCard


	/**
	 * Provides the implementation to toggle the visibility of the tabgroup. This refers to
	 * showing or hiding the related subtabs for a given tab group. The toggle function will
	 * determine the current state and flip it to the alternate one automatically.
	 * @param {Buildit.ux.inspector.CardGroup} tabGroup The TabGroup you wish to toggle
	 */
	toggleCardGroup: function(cardGroup){
		// close all other cardGroups
		Ext.each(this.cardGroups, function(group, idx){
		  if(group !== cardGroup){
		    // TODO - not sure this is required anymore
		  }
		});

    cardGroup.toggle();

		this.toggleStyles(cardGroup);
	}, // toggleTabGroup


	/**
	 * The handler for reacting to a tab select (click) action on the inspector. Once a tab is selected,
	 * it will ensure all related tabs are set to inactive before setting the requested tab as active.
	 * Additional to setting the CSS classes to ensure they tabs in the sidebar render correctly,
	 * this function will set the corresponding card in the main view are of the inspector is active.
	 * @param {Buildit.ux.inspector.Tab} tab the tab that has been selected
	 */
	selectCard : function(tab){
	  var me          = this,
	      workspace   = this.deck;

	  this.toggleStyles(tab);

	  // close all cardGroups
	  Ext.each(this.cardGroups, function(group){
	    if(tab.group == undefined)
	      group.closeGroup();

	    if(tab.group != undefined && tab.group != group)
	      group.closeGroup();
	  });

		workspace.getLayout().setActiveItem(tab.cardId);
	}, // selectCard 
 

  /**
   * TODO - Complete comment
   */
	toggleStyles : function(item){

		Ext.each(this.cardTabs, function(tab, idx){
      tab.removeCls('active');
      tab.addCls('inactive');
		});

    if(item.group)
      item.group.addCls('active');
    item.addCls('active');
    item.removeCls('inactive');

	}, // toggleStyles


  /**
   *
   */
	refresh : function(){
    var me = this;


    fireEvent('refresh', me);


	} // refresh


});
Ext.define('Buildit.ux.workspace.Header', {
  extend: 'Ext.toolbar.Toolbar',
  alias: 'widget.buildit-workspace-Header',

  style : "background: rgba(189, 195, 199, 0.1)",

  height : 60,

  padding : 0,

  margin : 0,

  cls : 'workspace-header',

  initComponent : function(){
  	var me = this;

  	Ext.apply(me, {
  		items : [
  		  {
  		  	ui         : 'plain',
  		  	style      : "background:#2980b9;border-radius:0;border:none;border-bottom: 1px solid #3498db;color:white",
  		  	width      : 60,
  		  	height     : 60
  		  }
  		]
  	});

  	me.callParent();
  }
});
Ext.define('Buildit.ux.workspace.MenuPanel', {
  extend  : 'Ext.panel.Panel',
  alias   : 'widget.buildit-workspace-MenuPanel',

  initComponent : function() {
  	this.callParent();
  }
});
Ext.define('Buildit.ux.workspace.Navigator', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.buildit-workspace-Navigator',

  bodyStyle : "background : #1B577F; ",

  dock      : 'left',

  width     : 60,

  border    : 0,

  layout    : {
    type      : 'vbox',
    align     : 'stretch'
  },

  initComponent : function(){
  	var me = this;

    Ext.apply(me, {
      defaults : {
        ui     : 'plain',
        xtype  : 'buildit-workspace-Option',
        border : 0
      },
      items : [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    })

  	me.callParent();
  }
});
Ext.define('Buildit.ux.workspace.Option', {
  extend  : 'Ext.panel.Panel',
  alias   : 'widget.buildit-workspace-Option',

  height  : 80,

  width   : 120,

  style   : 'background: transparent',

  cls     : 'navigator-option',

  initComponent : function() {
    var me = this;


    me.callParent();

  } // initComponent


});
Ext.define('Buildit.ux.workspace.Panel', {
  extend  : 'Ext.tab.Panel',
  alias   : 'widget.buildit-workspace-Panel',


  bodyStyle : 'background: transparent;border-width: 0 !important;',
  

  cls     : 'desktop',

  
  id      : 'workspace',


  border  : false,



  header  : false,

  /**
   * @cfg {Object} headerConfig
   * Configuration supported by the workspace header.
   */  
  headerConfig : undefined,

  /**
   * @cfg {Object} footerConfig
   * Configuration supported by the workspace footer.
   */
  footerConfig : undefined,


  /**
   * @cfg {Buildit.ux.workspace.Navigator} navigator required
   */
  navigator : undefined,

 
  initComponent : function(){
    
    var me = this;

    var requiredConfigs = ['navigator'];
    Ext.each(requiredConfigs, function (cfg) {
      if (!Ext.isDefined(me[cfg])) {
        throw new Error('Required config parameter to Buildit.ux.workspace.Panel is undefined: ' + cfg);
      }
    });


    me.setupHeader();
    me.setupFooter();

    Ext.apply(me, {
    	layout      : 'fit',
      dockedItems : [
        me.navigator,
        me.header
      ]
    });

    me.callParent();
    me.tabBar.hide();

    Buildit.uiMode = 'workspace';
    console.log(Buildit.uiMode);

  }, // initComponent

  setupHeader :function() {
    var me = this;

    var config = me.headerConfig || {};
    me.header = Ext.create('Buildit.ux.workspace.Header', config);

  }, // setupHeader

  setupFooter : function() {

  }, // setupFooter

  onDestroy : function(){
    this.callParent();
    Buildit.uiMode = undefined;

  }


});
Ext.define('Buildit.view.app.SuperHub', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.buildit-app-SuperHub',

	bodyStyle: 'background: transparent',

  cls: 'desktop',

	initComponent: function(){
		var me = this;

		Ext.apply(this, {
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'buildit-app-SuperHubContextMenu'
      },
      sections: [
        {
          title: 'General',
          columns: 4,
          rows: 3,
          tiles: [
            {colspan: 2, rowspan: 1, title: 'Users',            cls: 'users',                   target: { xtype: 'buildit-users-Explorer'} },
            {colspan: 2, rowspan: 1, title: 'Roles',            cls: 'roles',                   target: { xtype: 'buildit-roles-Explorer'} },
            {colspan: 2, rowspan: 1, title: 'Applications',     cls: 'applications',            target: { xtype: 'buildit-applications-Explorer'} },
            {colspan: 2, rowspan: 1, title: 'Privileges',                                       target: { xtype: 'buildit-privileges-Explorer'} }
          ]
        },
        {
          title: 'Services',
          columns: 4,
          rows: 3,
          tiles: [
            {colspan: 2, rowspan: 1, title: 'Web Hooks',        cls: 'web_hooks',               target: { xtype: 'buildit-web_hooks-Explorer',  allowSave: true} }
          ]
        }
      ]
    });

    this.callParent();
  }
});
Ext.define('Buildit.view.app.SuperHubContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.buildit-app-SuperHubContextMenu',

  
  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        /**
         * SETTINGS
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          xtype      : 'buildit-SettingsButton',
          target     : {
            xtype      : 'buildit-settings-Inspector'
          }
        },

        /**
         * APPLICATIONS
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-desktop',
          tooltip    : 'Change application',
          action     : 'applications',
          confirm    : true,
          multi      : true,
          privileges : [],
          listeners  : {
            click      : {
              fn: Ext.emptyFn,
              scope: me
            }
          }
        }

      ],


      leftActions: [

        /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.

        {
          text: 'New',
          cls: 'icon-new'
        }
        */
      ]

    });

    this.callParent();
  }

});
Ext.define('Buildit.view.app.UserHub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.buildit-app-UserHub',
  
  bodyStyle: 'background: transparent',
  
  cls: 'desktop',
  
  initComponent: function(){
    var me = this;
    
    Ext.apply(this, { 
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'buildit-app-SuperHubContextMenu'
      },
      sections: [
        {
          title: 'General',
          columns: 2,
          rows: 3,
          tiles: [
            {colspan: 2, rowspan: 1, title: 'Users',            cls: 'users',                   target: { xtype: 'buildit-users-Explorer'} }
          ]
        }
      ]
    });
    
    this.callParent();
  }
});
Ext.define('Buildit.view.application_roles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-application_roles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowInlineEdit : true,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-application_roles-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-application_roles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  application_role_idLabel:               Buildit.i18n.model.ApplicationRole.application_role_id,
  application_idLabel:                    Buildit.i18n.model.ApplicationRole.application_id,
  role_idLabel:                           Buildit.i18n.model.ApplicationRole.role_id,
  is_enabledLabel:                        Buildit.i18n.model.ApplicationRole.is_enabled,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Application Roles',
  subtitle:  'Maintain Application Roles',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.ApplicationRole')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.application_idLabel,                dataIndex: 'application_code',              flex: 3 },    
        { header: this.role_idLabel,                       dataIndex: 'role_code',                     flex: 3 },    
        { header: this.is_enabledLabel,                    dataIndex: 'is_enabled',                    flex: 1, xtype : 'checkcolumn' }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.application_roles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-application_roles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'application_role_id',
      value:      this.record.get('application_role_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      application_role_idLabel:               Buildit.i18n.model.ApplicationRole.application_role_id,    
      application_idLabel:                    Buildit.i18n.model.ApplicationRole.application_id,    
      role_idLabel:                           Buildit.i18n.model.ApplicationRole.role_id,    
      is_enabledLabel:                        Buildit.i18n.model.ApplicationRole.is_enabled    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'application_role_id',            fieldLabel: this.application_role_idLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'application_id',                 fieldLabel: this.application_idLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'role_id',                        fieldLabel: this.role_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'is_enabled',                     fieldLabel: this.is_enabledLabel                  , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ApplicationRoles',
      newTitle: 'New Application Role',
      newSubtitle: 'Complete the following to create a new Application Role'
    });
    // TITLES (End)

    this.callParent();
    
  }

});
Ext.define('Buildit.view.application_roles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-application_roles-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'application_role_id',
        value:      this.record.get('application_role_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-application_roles-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Application Role',
      subtitle:  this.record.get('application_role_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.applications.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-applications-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-applications-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-applications-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  application_idLabel:                    Buildit.i18n.model.Application.application_id,
  application_codeLabel:                  Buildit.i18n.model.Application.application_code,
  hub_xtypeLabel:                         Buildit.i18n.model.Application.hub_xtype,
  application_nameLabel:                  Buildit.i18n.model.Application.application_name,
  descriptionLabel:                       Buildit.i18n.model.Application.description,
  is_enabledLabel:                        Buildit.i18n.model.Application.is_enabled,
  is_destroyedLabel:                      Buildit.i18n.model.Application.is_destroyed,
  revision_numberLabel:                   Buildit.i18n.model.Application.revision_number,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Applications',
  subtitle:  'Create and maintain Applications',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Application')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.application_codeLabel,              dataIndex: 'application_code',            flex: 2 },
        { header: this.application_nameLabel,              dataIndex: 'application_name',            flex: 2 },
        { header: this.hub_xtypeLabel,                     dataIndex: 'hub_xtype',                   flex: 4 },
        //{ header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },
        { header: this.is_enabledLabel,                    dataIndex: 'is_enabled',                  flex: 1, xtype: 'checkcolumn' }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.applications.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-applications-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'application_id',
      value:      this.record.get('application_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      application_idLabel:                    Buildit.i18n.model.Application.application_id,    
      application_codeLabel:                  Buildit.i18n.model.Application.application_code,    
      hub_xtypeLabel:                         Buildit.i18n.model.Application.hub_xtype,    
      application_nameLabel:                  Buildit.i18n.model.Application.application_name,    
      descriptionLabel:                       Buildit.i18n.model.Application.description,    
      is_enabledLabel:                        Buildit.i18n.model.Application.is_enabled,    
      is_destroyedLabel:                      Buildit.i18n.model.Application.is_destroyed,    
      revision_numberLabel:                   Buildit.i18n.model.Application.revision_number    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
            { xtype: 'textfield', name: 'application_code',               fieldLabel: this.application_codeLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'application_name',               fieldLabel: this.application_nameLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },
            { xtype: 'textfield', name: 'hub_xtype',                      fieldLabel: this.hub_xtypeLabel                   , allowBlank: false },    
            { xtype: 'checkbox',  name: 'is_enabled',                     fieldLabel: this.is_enabledLabel                  , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Applications',
      newTitle: 'New Application',
      newSubtitle: 'Complete the following to create a new Application'
    });
    // TITLES (End)

    this.callParent();
    
  }

});
Ext.define('Buildit.view.applications.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-applications-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'application_id',
        value:      this.record.get('application_id')
      },
      associativeSearch: {
          with: {
            application_id: {
              equal_to: this.record.get('application_id')
            }
          }
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title         : 'Profile',
          xtype         : 'buildit-applications-Form',
          module        : 'applications',
        },
        {
          title         : 'Roles',
          xtype         : 'buildit-application_roles-Explorer',
          module        : 'roles',
          defaultSearch : me.associativeSearch,
          targetConfig  : {
            title           : 'Roles',
            hiddenColumns   : ['application_code'],
            allowNew        : false,
            allowInlineEdit : true
          }
        },
        {
          title         : 'Audit',
          xtype         : 'buildit-audits-Explorer',
          model         : 'Buildit::Application',
          model_id      :  me.record.get('application_id')
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title             : 'Application',
      subtitle          : this.record.get('application_name')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.attachments.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-attachments-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFileDrop    : true,
  allowInlineEdit  : true,
  allowSave        : true,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[],

  inspectorConfig: {},
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  attachment_idLabel:                     Buildit.i18n.model.Attachment.attachment_id,
  attachable_typeLabel:                   Buildit.i18n.model.Attachment.attachable_type,
  attachable_idLabel:                     Buildit.i18n.model.Attachment.attachable_id,
  content_idLabel:                        Buildit.i18n.model.Attachment.content_id,
  file_nameLabel:                         Buildit.i18n.model.Attachment.file_name,
  mime_typeLabel:                         Buildit.i18n.model.Attachment.mime_type,
  byte_sizeLabel:                         Buildit.i18n.model.Attachment.byte_size,
  localeLabel:                            Buildit.i18n.model.Attachment.locale,
  is_enabledLabel:                        Buildit.i18n.model.Attachment.is_enabled,
  is_destroyedLabel:                      Buildit.i18n.model.Attachment.is_destroyed,
  revision_numberLabel:                   Buildit.i18n.model.Attachment.revision_number,
  attachment_typeLabel:                   Buildit.i18n.model.Attachment.attachment_type,
  is_internalLabel:                       Buildit.i18n.model.Attachment.is_internal,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Attachments',
  subtitle:  'Create and maintain Attachments',
  // TITLES (End)


  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Attachment')
    });
    // CONFIG (End)

    Ext.apply(me, {
      listeners: {
        newaction:   me.onNewAction,
        inspectitem: me.downloadAttachment
      }
    });

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        { header: me.file_nameLabel,                     dataIndex: 'file_name',                   flex: 2 },
        { header: me.mime_typeLabel,                     dataIndex: 'mime_type',                   flex: 2 },
        { header: me.byte_sizeLabel,                     dataIndex: 'byte_size',                   flex: 1 },
        { 
          header        : me.is_internalLabel,
          dataIndex     : 'is_internal',
          flex          : 1,
          xtype         : 'checkcolumn'
        },
        { 
          header        : me.attachment_typeLabel,
          dataIndex     : 'attachment_type',
          flex          : 2,
          renderer      : Buildit.util.Format.lookupRenderer('ATTACHMENT_TYPE'),
          editor        : {
            xtype         : 'buildit-Lookup',
            allowBlank    : true,
            category      : 'ATTACHMENT_TYPE'
          }
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();

    me.on('filesdropped', me.handleFilesDropped);
    
  },

  handleFilesDropped : function(cmp, fileList){
    
    

  }, // handleFilesDropped

  downloadAttachment:function(explorer, record, item, index){

    console.log(record);

    var url = "/app/content/download/" + record.get('content_id');
    Ext.getDom('download-iframe').src = url;
  },

  onNewAction:function(explorer){

    // define the new record to bind to the form
    var rec = new explorer.store.model;

    // set the defaultFilter properties on the explorer to the new record
    if(Ext.isDefined(explorer.defaultFilter)){
      Ext.each(explorer.defaultFilter, function(filter){
        rec.set(filter.property, filter.value);
      });
    };

    if(Ext.isDefined(explorer.defaultSearch)){
      var searchFilter = Buildit.util.Data.search_to_object(explorer.defaultSearch);
      Ext.each(Object.keys(searchFilter), function(key){
        rec.set(key, searchFilter[key]);
      });
    };

    rec.store = explorer.store;


    var searchPopup = Ext.create('Buildit.ux.Popup', {
      bodyCls:            'blue',
      defaultHeight:      240,
      dockAt:             'north',
      dockPadding:        100,
      modal:              true,
      items: [
        {xtype: 'buildit-attachments-UploadForm', record: rec, mode: 'popup', explorer: explorer, bannerConfig: {title: 'Add Attachment', subtitle: 'Select a file to upload.'}, 	allowToggleFieldset: false, allowErrorFinder: false,}
      ]
    });

    Buildit.util.ComponentManager.register(explorer, searchPopup);
	  searchPopup.show();
  }

});
Ext.define('Buildit.view.attachments.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-attachments-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'attachment_id',
      value:      this.record.get('attachment_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      attachment_idLabel:                     Buildit.i18n.model.Attachment.attachment_id,    
      attachable_typeLabel:                   Buildit.i18n.model.Attachment.attachable_type,    
      attachable_idLabel:                     Buildit.i18n.model.Attachment.attachable_id,    
      content_idLabel:                        Buildit.i18n.model.Attachment.content_id,    
      file_nameLabel:                         Buildit.i18n.model.Attachment.file_name,    
      mime_typeLabel:                         Buildit.i18n.model.Attachment.mime_type,    
      byte_sizeLabel:                         Buildit.i18n.model.Attachment.byte_size,    
      localeLabel:                            Buildit.i18n.model.Attachment.locale,    
      is_enabledLabel:                        Buildit.i18n.model.Attachment.is_enabled,    
      is_destroyedLabel:                      Buildit.i18n.model.Attachment.is_destroyed,    
      revision_numberLabel:                   Buildit.i18n.model.Attachment.revision_number,
      attachment_typeLabel:                   Buildit.i18n.model.Attachment.attachment_type,
      is_internalLabel:                       Buildit.i18n.model.Attachment.is_internal
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        { xtype: 'filefield', name: 'content_id',                     fieldLabel: 'File'                  , allowBlank: false }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Attachment',
      subtitle: 'Edit Attachments',
      newTitle: 'New Attachment',
      newSubtitle: 'Complete the following to create a new Attachment'
    });
    // TITLES (End)

    this.callParent();
    
  }

});
Ext.define('Buildit.view.attachments.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-attachments-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'attachment_id',
        value:      this.record.get('attachment_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-attachments-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Attachment',
      subtitle:  this.record.get('attachment_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.attachments.UploadForm', {
  extend:'Ext.form.Panel',
	alias:'widget.buildit-attachments-UploadForm',
	
	bannerConfig: {},
	
	actions: undefined,
	
	record: undefined,
	
	bodyCls: 'form-body',

	ui: 'plain',
	
	initComponent:function(){
	  var me = this;
	  
	  
	  var actions = [];
    
    

		Ext.Array.include(actions, {
			xtype        : 'button',
			action       : 'save',
			iconCls      : 'icon-ok',
			cls          : 'ok',
			tooltip      : 'Save',
			handler      : me.saveForm,
			scope        : me
		});

		Ext.Array.include(actions, {
			xtype        : 'button',
			action       : 'cancel',
			iconCls      : 'icon-remove',
			cls          : 'close',
			tooltip      : 'Cancel',
			handler      : me.closeForm,
			scope        : me
		});
		
		this.actions = actions;
		
		Ext.apply(this, {
			dockedItems: [
				Ext.merge({xtype: 'buildit-Banner', parent: me}, this.bannerConfig)
			]
		});
		
		Ext.apply(this, {
		  items: [
		    { xtype: 'filefield', name: 'file',                     fieldLabel: 'File',  width: 400                  , allowBlank: false }
		  ]
		});

	  
	  this.callParent();
	},
	
	saveForm:function(){
	  var me = this;
	  var form = this.getForm();
	  if(form.isValid()){
        form.submit({
        url: '/app/content/upload',
        success: function(fp, o) {
          
          me.record.set({
            content_id     : o.result.content_id,
            tmp_content_id : o.result.content_id,
            file_name      : o.result.file_name,
            mime_type      : o.result.mime_type,
            byte_size      : o.result.byte_size
          });

          me.record.save({
            success:function(r,o){
              me.record.store.load();
              Ext.destroy(me.up('buildit-Popup'));
            }
          });
        }
      });
    }
	},


  


	closeForm:function(){
    Ext.destroy(this.up('buildit-Popup'));
	}
});
Ext.define('Buildit.view.audits.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-audits-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,
  
  allowNew: false,
  
  allowViews: false,
  
  allowColumnChanger: false,
  
  contextMenuConfig: {
    xtype: 'buildit-audits-ExplorerContextMenu'
  },

  newForms:[],

  inspectorConfig: undefined,
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  detailLabel: Buildit.i18n.model.Note.detail,
  categoryLabel: Buildit.i18n.model.Note.category,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title: 'Audit History',
  subtitle: 'A list of all changes made to this record',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Audit')
    });
    // CONFIG (End)
    
    me.store.proxy.extraParams.model    = me.model;
    me.store.proxy.extraParams.model_id = me.model_id;
    me.store.load();

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        { header: 'Performed', dataIndex: 'action',        flex: 2 },
        { header: 'At',        dataIndex: 'audited_at',    flex: 1, renderer:Ext.util.Format.dateRenderer('h:iA') },
        { header: 'On',        dataIndex: 'audited_at',    flex: 2, renderer:Ext.util.Format.dateRenderer('l, M d, Y') },
        { header: 'By',        dataIndex: 'user_name',     flex: 2 }
      ]
    });
    // COLUMNS (End)
 
    me.callParent();
  }

});
Ext.define('Buildit.view.audits.ExplorerContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.buildit-audits-ExplorerContextMenu',

  
  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        // RIGHT ACTIONS (Start) ================================================================

        /**
         * EXPORT
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls     : 'icon-download-alt',
          tooltip     : 'Export',
          action      : 'export',
          confirm     : true,
          multi       : true,
          privileges  : [],
          listeners   : {
            click       : {
              fn: this.clickExport,
              scope: me
            }
          }
        },


        /**
         * SELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-check',
          tooltip    : 'Select all',
          action     : 'select-all',
          confirm    : true,
          multi      : true,
          privileges : [],
          listeners  : {
            click      : {
              fn: this.clickSelectAll,
              scope: me
            }
          }
        },


        /**
         * DESELECT ALL
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are deleted.
         */
        {
          iconCls    : 'icon-check-empty',
          tooltip    : 'Deselect all',
          action     : 'deselect-all',
          confirm    : true,
          privileges : [],
          listeners  : {
            click      : {
              fn: this.clickDeselectAll,
              scope: me
            }
          }
        }

        // RIGHT ACTIONS (End)

      ],


      leftActions: [

        // LEFT ACTIONS (Start) =================================================================


        // LEFT ACTIONS (End)

      ]

    });

    this.callParent();
  },



  // ACTION HANDLERS (Start) ====================================================================

  clickDelete: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Delete.click(btn);
  },

  clickExport: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Export.click(btn);
  },

  clickSelectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.SelectAll.click(btn);
  },

  clickDeselectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.DeselectAll.click(btn);
  },

  clickNew: function(btn, e, eOpts){
    // TODO
  },

  clickImport: function(btn, e, eOpts){
    // TODO
  }

  // ACTION HANDLERS (End)

});
Ext.define('Buildit.view.bookmarks.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.buildit-bookmarks-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'buildit-bookmarks-Form'
  }],

  inspectorConfig : {},

  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  display_asLabel                         : Buildit.i18n.model.Bookmark.display_as,
  bookmark_idLabel                        : Buildit.i18n.model.Bookmark.bookmark_id,
  bookmarkable_typeLabel                  : Buildit.i18n.model.Bookmark.bookmarkable_type,
  bookmarkable_idLabel                    : Buildit.i18n.model.Bookmark.bookmarkable_id,
  user_idLabel                            : Buildit.i18n.model.Bookmark.user_id,
  is_enabledLabel                         : Buildit.i18n.model.Bookmark.is_enabled,
  is_destroyedLabel                       : Buildit.i18n.model.Bookmark.is_destroyed,
  revision_numberLabel                    : Buildit.i18n.model.Bookmark.revision_number,
  audit_created_byLabel                   : Buildit.i18n.model.Bookmark.audit_created_by,
  audit_updated_byLabel                   : Buildit.i18n.model.Bookmark.audit_updated_by,
  audit_created_atLabel                   : Buildit.i18n.model.Bookmark.audit_created_at,
  audit_updated_atLabel                   : Buildit.i18n.model.Bookmark.audit_updated_at,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Bookmarks',
  subtitle : 'Create and maintain Bookmarks',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Bookmark')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.bookmarkable_typeLabel,
          dataIndex    : 'bookmarkable_type',
          flex         : 1,
          renderer     : Buildit.util.Format.modelRenderer()
        },
        {
          header       : me.bookmarkable_idLabel,
          dataIndex    : 'display_as',
          flex         : 3
        },
        {
          header       : me.user_idLabel,
          dataIndex    : 'user_full_name',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_enabledLabel,
          dataIndex    : 'is_enabled',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();

    me.on('inspectitem', me.resolveNavigation, me);
  }, // initComponent

  resolveNavigation : function(cmp, record, item, rowIndex){
    Buildit.util.Bookmark.resolveNavigation(record);
  } // resolveNavigation

});
Ext.define('Buildit.view.bookmarks.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.buildit-bookmarks-Form',


  // LABELS (Start) =======================================================================
  bookmark_idLabel                        : Buildit.i18n.model.Bookmark.bookmark_id,
  bookmarkable_typeLabel                  : Buildit.i18n.model.Bookmark.bookmarkable_type,
  bookmarkable_idLabel                    : Buildit.i18n.model.Bookmark.bookmarkable_id,
  user_idLabel                            : Buildit.i18n.model.Bookmark.user_id,
  is_enabledLabel                         : Buildit.i18n.model.Bookmark.is_enabled,
  is_destroyedLabel                       : Buildit.i18n.model.Bookmark.is_destroyed,
  revision_numberLabel                    : Buildit.i18n.model.Bookmark.revision_number,
  audit_created_byLabel                   : Buildit.i18n.model.Bookmark.audit_created_by,
  audit_updated_byLabel                   : Buildit.i18n.model.Bookmark.audit_updated_by,
  audit_created_atLabel                   : Buildit.i18n.model.Bookmark.audit_created_at,
  audit_updated_atLabel                   : Buildit.i18n.model.Bookmark.audit_updated_at,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'bookmark_id',
      value       : this.record.get('bookmark_id')
    };
    // FILTER (End)

    

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'bookmarkable_type',
              fieldLabel   : me.bookmarkable_typeLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'bookmarkable_id',
              fieldLabel   : me.bookmarkable_idLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'buildit-Locator', 
              store        : Ext.create('Buildit.store.User',{pageSize: 10}), 
              displayField : 'user_id',
              itemTpl      : '{user_id}',
              name         : 'user_id', 
              fieldLabel   : me.user_idLabel,
              initialValue : me.user_id, 
              allowBlank   : false 
            },
            {
              xtype        : 'checkbox',
              name         : 'is_enabled',
              fieldLabel   : me.is_enabledLabel
            }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/          
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Bookmark',
      subtitle    : 'Edit Bookmark'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Buildit.view.bookmarks.Form'
;
Ext.define('Buildit.view.bookmarks.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.buildit-bookmarks-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'bookmark_id',
        value     : this.record.get('bookmark_id')
      },

      associativeSearch : {
        with: {
          bookmark_id : {
            equal_to : this.record.get('bookmark_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'buildit-bookmarks-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Bookmark',
      subtitle  : this.record.get('bookmark_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.dashboard.Portlet', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.buildit-dashboard-Portlet',
    layout: 'fit',
    anchor: '100%',
    frame: true,
    closable: true,
    collapsible: true,
    animCollapse: true,
		resizable: true,
		resizeHandles: 's',
    draggable: {
        moveOnDrag: false    
    },
    cls: 'x-portlet',

    // Override Panel's default doClose to provide a custom fade out effect
    // when a portlet is removed from the portal
    doClose: function() {
        if (!this.closing) {
            this.closing = true;
            this.el.animate({
                opacity: 0,
                callback: function(){
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        }
    }
});

Ext.define('Buildit.view.dashboard.ChartPortlet', {

    extend: 'Buildit.view.dashboard.Portlet',
    alias: 'widget.chartportlet',

    generateData: function(){
        var data = [{
                name: 0,
                djia: 10000,
                sp500: 1100
            }],
            i;
        for (i = 1; i < 50; i++) {
            data.push({
                name: i,
                sp500: data[i - 1].sp500 + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7),
                djia: data[i - 1].djia + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7)
            });
        }
        return data;
    },

    initComponent: function(){

        Ext.apply(this, {
						title: 'Example Chart',
            layout: 'fit',
            height: 300,
            items: {
                xtype: 'chart',
                animate: false,
                shadow: false,
                store: Ext.create('Ext.data.JsonStore', {
                    fields: ['name', 'sp500', 'djia'],
                    data: this.generateData()
                }),
                legend: {
                    position: 'bottom'
                },
                axes: [{
                    type: 'Numeric',
                    position: 'left',
                    fields: ['djia'],
                    title: 'Dow Jones Average',
                    label: {
                        font: '11px Arial'
                    }
                }, {
                    type: 'Numeric',
                    position: 'right',
                    grid: false,
                    fields: ['sp500'],
                    title: 'S&P 500',
                    label: {
                            font: '11px Arial'
                        }
                }],
                series: [{
                    type: 'line',
                    lineWidth: 1,
                    showMarkers: false,
                    fill: true,
                    axis: 'left',
                    xField: 'name',
                    yField: 'djia',
                    style: {
                        'stroke-width': 1,
                        stroke: 'rgb(148, 174, 10)'

                    }
                }, {
                    type: 'line',
                    lineWidth: 1,
                    showMarkers: false,
                    axis: 'right',
                    xField: 'name',
                    yField: 'sp500',
                    style: {
                        'stroke-width': 1,
                         stroke: 'rgb(17, 95, 166)'

                    }
                }]
            }
        });

        this.callParent(arguments);
    }
});
Ext.define('Buildit.view.dashboard.PortalColumn', {
    extend: 'Ext.container.Container',
    alias: 'widget.buildit-dashboard-PortalColumn',

    layout: 'anchor',
    defaultType: 'buildit-dashboard-Portlet',
    cls: 'x-portal-column'

    // This is a class so that it could be easily extended
    // if necessary to provide additional behavior.
});



Ext.define('Buildit.view.dashboard.Dashboard', {
	extend:'Ext.panel.Panel',
	alias:'widget.buildit-dashboard-Dashboard',


	toolbar:undefined,
	columns:[],

  bodyStyle: {
	  background: 'transparent'
	
  },

  defaults: {
	  bodyStyle: {background: 'transparent'}
  },

	initComponent:function () {
		var me = this;
		
	


		this.toolbar = Ext.create('Ext.toolbar.Toolbar', {
			dock: 'bottom',
			items:[

						{
							xtype:'button',
							text:'Refresh All',
							action:'refreshDashboard',
							iconCls:'refresh'
						},
						{
							xtype:'button',
							text:'Add',
							action:'launchGallery',
							iconCls:'add'
						},
						{
							xtype:'button',
							action:'changeColumnLayout',
							columnCount:1,
							iconCls:'col-1',
							width:22
						},
						{
							xtype:'button',
							action:'changeColumnLayout',
							columnCount:2,
							iconCls:'col-2',
							width:22
						},
						{
							xtype:'button',
							action:'changeColumnLayout',
							columnCount:3,
							iconCls:'col-3',
							width:22
						}
			]
		});

		// create the three initial columns
		var col1 = Ext.create('Buildit.view.dashboard.PortalColumn');
		var col2 = Ext.create('Buildit.view.dashboard.PortalColumn');
		var col3 = Ext.create('Buildit.view.dashboard.PortalColumn');

		this.columns = [col1,col2,col3];

		Ext.apply(this, {
			layout:{
				type:'vbox',
				align:'stretch'
			},

			border:0,
			iconCls:'dashboard',

			items:[
				{
					xtype:'buildit-dashboard-PortalPanel',
					flex:1,
					items: this.columns
				}
			],

			dockedItems:[
				this.toolbar
			]

		});


		me.callParent(arguments);
	},

	// adds a portlet to the requested column
	addPortlet: function(columnIndex, portlet){

		var column = this.columns[columnIndex];
		column.add(portlet);
	},


	// define how many columns you wish to see
	setColumnCount: function(count){

		// determine the difference to move by
		var diff = Math.abs(this.columns.length - count);
		var portalPanel = this.down('buildit-dashboard-PortalPanel');
		console.log(portalPanel);

		// increase the number of columns
		if(count > this.columns.length){
			while(diff >  0){
				var newCol = Ext.create('Buildit.view.dashboard.PortalColumn');
				this.columns.push(newCol);  // push to the managed array
				portalPanel.add(newCol);
				diff --;
			}
		} // decrease the number of columns
		else if(count < this.columns.length){
			while(diff > 0){
				this.columns.pop();
				portalPanel.items.removeAt(portalPanel.items.length - 1);				
				diff --;
			}
		}

		// relayout the columns in order to resize the widths
		portalPanel.doLayout();
		
		// force the layout of each column as well
		Ext.each(this.columns, function(column, index){
			column.doLayout();			
		});
	}

});
Ext.define('Buildit.view.dashboard.Gallery', {

	extend:'Ext.window.Window',

	alias:'widget.buildit-dashboard-Gallery',
	title:'Dashlet Gallery',

	initComponent:function () {
		var me = this;
		me.callParent(arguments);

		var dashletStore = Ext.getStore('DashletStore');
		if (!dashletStore) {
			dashletStore = Ext.create('Buildit.store.Dashlets').load();
		}


		var grid = Ext.create('Ext.grid.Panel', {

			border:0,
			id:'dashlet-grid',
			columnLines:true,
			dockedItems:[
				{
					xtype:'pagingtoolbar',
					dock:'bottom',
					store:dashletStore,
					displayInfo:true,
					pageSize:10
				}
			],
			columns:[
				{header:'Name', dataIndex:'name', flex:2},
				{header:'Vendor', dataIndex:'vendor_code', flex:1},
				{header:'Version', dataIndex:'version', flex:1}
			],
			store:dashletStore

		});

		Ext.apply(this, {
			height:400,
			width:600,
			modal:true,
			resizable:false,

			layout:{
				type:'fit'
			}
		});

		me.add(grid);


	}


});

Ext.define('Buildit.view.dashboard.GaugePortlet', {

	extend:'Buildit.view.dashboard.Portlet',


	generateData:function (n, floor) {
		var data = [],
			p = (Math.random() * 11) + 1,
			i;

		floor = (!floor && floor !== 0) ? 20 : floor;

		for (i = 0; i < (n || 12); i++) {
			data.push({
				name:Ext.Date.monthNames[i % 12],
				data1:Math.floor(Math.max((Math.random() * 100), floor)),
				data2:Math.floor(Math.max((Math.random() * 100), floor)),
				data3:Math.floor(Math.max((Math.random() * 100), floor)),
				data4:Math.floor(Math.max((Math.random() * 100), floor)),
				data5:Math.floor(Math.max((Math.random() * 100), floor)),
				data6:Math.floor(Math.max((Math.random() * 100), floor)),
				data7:Math.floor(Math.max((Math.random() * 100), floor)),
				data8:Math.floor(Math.max((Math.random() * 100), floor)),
				data9:Math.floor(Math.max((Math.random() * 100), floor))
			});
		}
		return data;
	},


	initComponent:function () {
		var me = this;


		var store4 = Ext.create('Ext.data.JsonStore', {
			fields:['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
			data:this.generateData()
		});
		Ext.apply(this, {

			title:'Example Gauge',
			layout:'fit',
			height:300,

			items:[

				{
					xtype:'chart',
					style:'background:#fff',
					animate:{
						easing:'bounceOut',
						duration:500
					},
					store:store4,
					insetPadding:25,
					flex:1,
					axes:[
						{
							type:'gauge',
							position:'gauge',
							minimum:0,
							maximum:100,
							steps:10,
							margin:7
						}
					],
					series:[
						{
							type:'gauge',
							field:'data1',
							donut:40,
							colorSet:['#3AA8CB', '#ddd']
						}
					]
				}


			]



		});


		this.callParent();

	}

});
Ext.define('Buildit.view.dashboard.GridPortlet', {
    extend: 'Buildit.view.dashboard.Portlet',
    alias: 'widget.gridportlet',
    uses: [
        'Ext.data.ArrayStore'
    ],
    height: 300,
	  title: 'Corporate Tracker',
    myData: [
        ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
        ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
        ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
        ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
        ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
        ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am'],
        ['Exxon Mobil Corp',                    68.1,  -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company',            34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation',          30.27, 1.09,  3.74,  '9/1 12:00am'],
        ['Hewlett-Packard Co.',                 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc',                  38.77, 0.05,  0.13,  '9/1 12:00am'],
        ['Intel Corporation',                   19.88, 0.31,  1.58,  '9/1 12:00am'],
        ['International Business Machines',     81.41, 0.44,  0.54,  '9/1 12:00am'],
        ['Johnson & Johnson',                   64.72, 0.06,  0.09,  '9/1 12:00am'],
        ['JP Morgan & Chase & Co',              45.73, 0.07,  0.15,  '9/1 12:00am'],
        ['McDonald\'s Corporation',             36.76, 0.86,  2.40,  '9/1 12:00am'],
        ['Merck & Co., Inc.',                   40.96, 0.41,  1.01,  '9/1 12:00am'],
        ['Microsoft Corporation',               25.84, 0.14,  0.54,  '9/1 12:00am'],
        ['Pfizer Inc',                          27.96, 0.4,   1.45,  '9/1 12:00am'],
        ['The Coca-Cola Company',               45.07, 0.26,  0.58,  '9/1 12:00am'],
        ['The Home Depot, Inc.',                34.64, 0.35,  1.02,  '9/1 12:00am'],
        ['The Procter & Gamble Company',        61.91, 0.01,  0.02,  '9/1 12:00am'],
        ['United Technologies Corporation',     63.26, 0.55,  0.88,  '9/1 12:00am'],
        ['Verizon Communications',              35.57, 0.39,  1.11,  '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.',               45.45, 0.73,  1.63,  '9/1 12:00am']
    ],

    initComponent: function(){

        var store = Ext.create('Ext.data.ArrayStore', {
            fields: [
               {name: 'company'},
               {name: 'change',     type: 'float'},
               {name: 'pctChange',  type: 'float'}
            ],
            data: this.myData
        });

        Ext.apply(this, {
	        items: [{
		        xtype: 'gridpanel',
            //height: 300,
            height: this.height,
            store: store,
            stripeRows: true,
            columnLines: true,
            columns: [{
                id       :'company',
                text   : 'Company',
                //width: 120,
                flex: 1,
                sortable : true,
                dataIndex: 'company'
            },{
                text   : 'Change',
                width    : 75,
                sortable : true,
                renderer : this.change,
                dataIndex: 'change'
            },{
                text   : '% Change',
                width    : 75,
                sortable : true,
                renderer : this.pctChange,
                dataIndex: 'pctChange'
            }]
	        }]
        });

        this.callParent(arguments);
    },

		/**
     * Custom function used for column renderer
     * @param {Object} val
     */
    change: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    pctChange: function(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }
});
Ext.define('Buildit.view.dashboard.PortalDropZone', {
    extend: 'Ext.dd.DropTarget',

    constructor: function(portal, cfg) {
        this.portal = portal;
        Ext.dd.ScrollManager.register(portal.body);
	      Buildit.view.dashboard.PortalDropZone.superclass.constructor.call(this, portal.body, cfg);
        portal.body.ddScrollConfig = this.ddScrollConfig;
    },

    ddScrollConfig: {
        vthresh: 50,
        hthresh: -1,
        animate: true,
        increment: 200
    },

    createEvent: function(dd, e, data, col, c, pos) {
        return {
            portal: this.portal,
            panel: data.panel,
            columnIndex: col,
            column: c,
            position: pos,
            data: data,
            source: dd,
            rawEvent: e,
            status: this.dropAllowed
        };
    },

    notifyOver: function(dd, e, data) {
        var xy = e.getXY(),
            portal = this.portal,
            proxy = dd.proxy;

        // case column widths
        if (!this.grid) {
            this.grid = this.getGrid();
        }

        // handle case scroll where scrollbars appear during drag
        var cw = portal.body.dom.clientWidth;
        if (!this.lastCW) {
            // set initial client width
            this.lastCW = cw;
        } else if (this.lastCW != cw) {
            // client width has changed, so refresh layout & grid calcs
            this.lastCW = cw;
            //portal.doLayout();
            this.grid = this.getGrid();
        }

        // determine column
        var colIndex = 0,
            colRight = 0,
            cols = this.grid.columnX,
            len = cols.length,
            cmatch = false;

        for (len; colIndex < len; colIndex++) {
            colRight = cols[colIndex].x + cols[colIndex].w;
            if (xy[0] < colRight) {
                cmatch = true;
                break;
            }
        }
        // no match, fix last index
        if (!cmatch) {
            colIndex--;
        }

        // find insert position
        var overPortlet, pos = 0,
            h = 0,
            match = false,
            overColumn = portal.items.getAt(colIndex),
            portlets = overColumn.items.items,
            overSelf = false;

        len = portlets.length;

        for (len; pos < len; pos++) {
            overPortlet = portlets[pos];
            h = overPortlet.el.getHeight();
            if (h === 0) {
                overSelf = true;
            } else if ((overPortlet.el.getY() + (h / 2)) > xy[1]) {
                match = true;
                break;
            }
        }

        pos = (match && overPortlet ? pos : overColumn.items.getCount()) + (overSelf ? -1 : 0);
        var overEvent = this.createEvent(dd, e, data, colIndex, overColumn, pos);

        if (portal.fireEvent('validatedrop', overEvent) !== false && portal.fireEvent('beforedragover', overEvent) !== false) {

            // make sure proxy width is fluid in different width columns
            proxy.getProxy().setWidth('auto');
            if (overPortlet) {
                dd.panelProxy.moveProxy(overPortlet.el.dom.parentNode, match ? overPortlet.el.dom : null);
            } else {
                dd.panelProxy.moveProxy(overColumn.el.dom, null);
            }

            this.lastPos = {
                c: overColumn,
                col: colIndex,
                p: overSelf || (match && overPortlet) ? pos : false
            };
            this.scrollPos = portal.body.getScroll();

            portal.fireEvent('dragover', overEvent);
            return overEvent.status;
        } else {
            return overEvent.status;
        }

    },

    notifyOut: function() {
        delete this.grid;
    },

    notifyDrop: function(dd, e, data) {
        delete this.grid;
        if (!this.lastPos) {
            return;
        }
        var c = this.lastPos.c,
            col = this.lastPos.col,
            pos = this.lastPos.p,
            panel = dd.panel,
            dropEvent = this.createEvent(dd, e, data, col, c, pos !== false ? pos : c.items.getCount());

        if (this.portal.fireEvent('validatedrop', dropEvent) !== false && 
            this.portal.fireEvent('beforedrop', dropEvent) !== false) {

            Ext.suspendLayouts();
            
            // make sure panel is visible prior to inserting so that the layout doesn't ignore it
            panel.el.dom.style.display = '';
            dd.panelProxy.hide();
            dd.proxy.hide();

            if (pos !== false) {
                c.insert(pos, panel);
            } else {
                c.add(panel);
            }

            Ext.resumeLayouts(true);

            this.portal.fireEvent('drop', dropEvent);

            // scroll position is lost on drop, fix it
            var st = this.scrollPos.top;
            if (st) {
                var d = this.portal.body.dom;
                setTimeout(function() {
                    d.scrollTop = st;
                },
                10);
            }
        }
        
        delete this.lastPos;
        return true;
    },

    // internal cache of body and column coords
    getGrid: function() {
        var box = this.portal.body.getBox();
        box.columnX = [];
        this.portal.items.each(function(c) {
            box.columnX.push({
                x: c.el.getX(),
                w: c.el.getWidth()
            });
        });
        return box;
    },

    // unregister the dropzone from ScrollManager
    unreg: function() {
        Ext.dd.ScrollManager.unregister(this.portal.body);
	      Buildit.view.dashboard.PortalDropZone.superclass.unreg.call(this);
    }
});
Ext.define('Buildit.view.dashboard.PortalPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.buildit-dashboard-PortalPanel',

    cls: 'x-portal',
	  border: 0,
    bodyCls: 'x-portal-body',
    defaultType: 'buildit-dashboard-PortalColumn',
    autoScroll: true,

    manageHeight: false,

    initComponent : function() {
        var me = this;

        // Implement a Container beforeLayout call from the layout to this Container
        this.layout = {
            type : 'column'
        };
        this.callParent();

        this.addEvents({
            validatedrop: true,
            beforedragover: true,
            dragover: true,
            beforedrop: true,
            drop: true
        });
    },

    // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
    beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length,
            firstAndLast = ['x-portal-column-first', 'x-portal-column-last'],
            i, item, last;

        for (i = 0; i < len; i++) {
            item = items[i];
            item.columnWidth = 1 / len;
            last = (i == len-1);

            if (!i) { // if (first)
                if (last) {
                    item.addCls(firstAndLast);
                } else {
                    item.addCls('x-portal-column-first');
                    item.removeCls('x-portal-column-last');
                }
            } else if (last) {
                item.addCls('x-portal-column-last');
                item.removeCls('x-portal-column-first');
            } else {
                item.removeCls(firstAndLast);
            }
        }

        return this.callParent(arguments);
    },

    // private
    initEvents : function(){
        this.callParent();
        this.dd = Ext.create('Buildit.view.dashboard.PortalDropZone', this, this.dropConfig);
    },

    // private
    beforeDestroy : function() {
        if (this.dd) {
            this.dd.unreg();
        }
        this.callParent();
    }
});
Ext.define('Buildit.view.dashlets.Explorer', {

	extend:'Buildit.ux.explorer.Panel',
	alias:'widget.buildit-dashlets-Explorer',

	initComponent:function () {

		var me = this;

		// Establish the i18n field strings
		Ext.apply(this, {
		  dashlet_codeFieldLabel:                 Buildit.i18n.model.Dashlet.dashlet_codeFieldLabel,
		  componentFieldLabel:                    Buildit.i18n.model.Dashlet.componentFieldLabel,
		  nameFieldLabel:                         Buildit.i18n.model.Dashlet.nameFieldLabel,
		  summaryFieldLabel:                      Buildit.i18n.model.Dashlet.summaryFieldLabel,
		  detailFieldLabel:                       Buildit.i18n.model.Dashlet.detailFieldLabel,
		  vendor_codeFieldLabel:                  Buildit.i18n.model.Dashlet.vendor_codeFieldLabel,
		  versionFieldLabel:                      Buildit.i18n.model.Dashlet.versionFieldLabel,
		  released_onFieldLabel:                  Buildit.i18n.model.Dashlet.released_onFieldLabel,
		  logo_pathFieldLabel:                    Buildit.i18n.model.Dashlet.logo_pathFieldLabel,
		  is_destroyedFieldLabel:                 Buildit.i18n.model.Dashlet.is_destroyedFieldLabel
		  
    });

		// Define the columns available to the explorer grid
		Ext.apply(this, {
		  columns: [
        { header: me.componentFieldLabel,                   dataIndex: 'component',                 flex: 1,   editor: { allowBlank: false,  xtype: 'textfield'   } },
        { header: me.nameFieldLabel,                        dataIndex: 'name',                      flex: 1,   editor: { allowBlank: false,  xtype: 'textfield'   } },
        { header: me.summaryFieldLabel,                     dataIndex: 'summary',                   flex: 1,   editor: { allowBlank: false,  xtype: 'textfield'   } },
        { header: me.detailFieldLabel,                      dataIndex: 'detail',                    flex: 1,   editor: { allowBlank: true,   xtype: 'textarea'    } },
        { header: me.vendor_codeFieldLabel,                 dataIndex: 'vendor_code',               flex: 1,   editor: { allowBlank: false,  xtype: 'textfield'   } },
        { header: me.versionFieldLabel,                     dataIndex: 'version',                   flex: 1,   editor: { allowBlank: false,  xtype: 'textfield'   } },
        { header: me.released_onFieldLabel,                 dataIndex: 'released_on',               flex: 1,   editor: { allowBlank: true,   xtype: 'datefield'   } },
        { header: me.logo_pathFieldLabel,                   dataIndex: 'logo_path',                 flex: 1,   editor: { allowBlank: true,   xtype: 'textfield'   } },

			]			
		});
				
		Ext.apply(this, {

			store:Ext.create('Buildit.store.Dashlet'),

			newForm:{
				xtype:'buildit-dashlets-Form',
				windowConfig: {
          height:  400,
          width:   600
				}
			},

			inspector: {
				xtype: 'buildit-dashlets-Inspector'
			}

		});
				

		this.callParent();
	}

});
/*

# DESKTOP FIELDS (Start) ======================================================
#
# { name: 'dashlet_code',                 fieldLabel: me.dashlet_codeFieldLabel,                      allowBlank: false,  xtype: 'textfield' },
# { name: 'component',                    fieldLabel: me.componentFieldLabel,                         allowBlank: false,  xtype: 'textfield' },
# { name: 'name',                         fieldLabel: me.nameFieldLabel,                              allowBlank: false,  xtype: 'textfield' },
# { name: 'summary',                      fieldLabel: me.summaryFieldLabel,                           allowBlank: false,  xtype: 'textfield' },
# { name: 'detail',                       fieldLabel: me.detailFieldLabel,                            allowBlank: true,   xtype: 'textarea'  },
# { name: 'vendor_code',                  fieldLabel: me.vendor_codeFieldLabel,                       allowBlank: false,  xtype: 'textfield' },
# { name: 'version',                      fieldLabel: me.versionFieldLabel,                           allowBlank: false,  xtype: 'textfield' },
# { name: 'released_on',                  fieldLabel: me.released_onFieldLabel,                       allowBlank: true,   xtype: 'datefield' },
# { name: 'logo_path',                    fieldLabel: me.logo_pathFieldLabel,                         allowBlank: true,   xtype: 'textfield' },

#
# DESKTOP FIELDS (End) ========================================================

*/


Ext.define('Buildit.view.dashlets.Form', {

	extend:'Buildit.ux.Form',
	alias:'widget.buildit-dashlets-Form',
	
	border: false,

	initComponent:function () {

		var me = this;

		// Establish the i18n field strings
		Ext.apply(this, {
      dashlet_codeFieldLabel:                  Buildit.i18n.model.Dashlet.dashlet_codeFieldLabel,
      componentFieldLabel:                     Buildit.i18n.model.Dashlet.componentFieldLabel,
      nameFieldLabel:                          Buildit.i18n.model.Dashlet.nameFieldLabel,
      summaryFieldLabel:                       Buildit.i18n.model.Dashlet.summaryFieldLabel,
      detailFieldLabel:                        Buildit.i18n.model.Dashlet.detailFieldLabel,
      vendor_codeFieldLabel:                   Buildit.i18n.model.Dashlet.vendor_codeFieldLabel,
      versionFieldLabel:                       Buildit.i18n.model.Dashlet.versionFieldLabel,
      released_onFieldLabel:                   Buildit.i18n.model.Dashlet.released_onFieldLabel,
      logo_pathFieldLabel:                     Buildit.i18n.model.Dashlet.logo_pathFieldLabel,
      is_destroyedFieldLabel:                  Buildit.i18n.model.Dashlet.is_destroyedFieldLabel
		  
		});
			
		// Establish the i18n view strings
		Ext.apply(this, {
      general_informationFieldsetLabel:        Buildit.i18n.view.dashlets.Form.general_informationFieldsetLabel 
		});

		Ext.apply(this, {
			items:[
        {
          xtype:       'fieldset',
	        title:       me.general_informationFieldsetLabel,
	        collapsible: true,
	        defaultType: 'textfield',
	        defaults:    {anchor:'100%'},
	        layout:      'anchor',
	        items:[
            { name: 'dashlet_code',                 fieldLabel: me.dashlet_codeFieldLabel,                      allowBlank: false,  xtype: 'textfield' },
            { name: 'component',                    fieldLabel: me.componentFieldLabel,                         allowBlank: false,  xtype: 'textfield' },
            { name: 'name',                         fieldLabel: me.nameFieldLabel,                              allowBlank: false,  xtype: 'textfield' },
            {
              xtype: 'buildit-Locator',
			        store: Ext.create('Buildit.store.Vendor'),
			        pageSize: 10,
			        displayField: 'vendor_name',
			        queryField: 'column.name',
			        valueField: 'column.name',
			        fieldLabel: 'Site',
			        allowBlank: false,
			        itemTpl:'XTemplate Cool Stuff here'
            },
            { name: 'vendor_code',                  fieldLabel: me.vendor_codeFieldLabel,                       allowBlank: false,  xtype: 'textfield' },
            { name: 'version',                      fieldLabel: me.versionFieldLabel,                           allowBlank: false,  xtype: 'textfield' },
            { name: 'released_on',                  fieldLabel: me.released_onFieldLabel,                       allowBlank: true,   xtype: 'datefield' },
            { name: 'logo_path',                    fieldLabel: me.logo_pathFieldLabel,                         allowBlank: true,   xtype: 'textfield' }
					]
				}
			]
		});


		this.callParent();
	}
});
/*

# INSPECTOR (Start) ===========================================================
#
#
#
# INSPECTOR (End) =============================================================

*/


Ext.define('Buildit.view.dashlets.Inspector', {

	extend:'Buildit.ux.inspector.Panel',
	alias:'widget.buildit-dashlets-Inspector',



	initComponent:function () {

		var me = this;

		var tabTitle = "Dashlet";

    // define the filter that will be applied to subforms
		var associativeFilter = [
			{
				property:'dashlet_code',
				value:this.record.get('dashlet_code')
			}
		];

		Ext.apply(this, {
			
			title: tabTitle,
			iconCls: 'dashlets',

			// declare all subforms here
			associations:[

				
			]

		});

		this.callParent();
	}
});
Ext.define('Buildit.view.events.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-events-Explorer',

  allowFind : true,

  allowNew : false,


  // LABELS (Start) =====================================================================
  event_idLabel:                           Buildit.i18n.model.Event.event_id,
  titleLabel:                              Buildit.i18n.model.Event.title,
  messageLabel:                            Buildit.i18n.model.Event.message,
  eventable_typeLabel:                     Buildit.i18n.model.Event.eventable_type,
  eventable_idLabel:                       Buildit.i18n.model.Event.eventable_id,
  event_typeLabel:                         Buildit.i18n.model.Event.event_type,
  occurred_atLabel:                        Buildit.i18n.model.Event.occurred_at,
  user_idLabel:                            Buildit.i18n.model.Event.user_id,
  // LABELS (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Event')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [        
        { header: this.titleLabel,                         dataIndex: 'title',                       flex: 1   },
        { header: this.messageLabel,                       dataIndex: 'message',                     flex: 3   },
        { header: this.occurred_atLabel,                   dataIndex: 'occurred_at',                 flex: 1, renderer:Ext.util.Format.dateRenderer('m/d/y H:i'),   },
        { header: this.user_idLabel,                       dataIndex: 'full_name',                   flex: 1   }
      ]
    });
    // COLUMNS (End)


    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'All Events',
      subtitle: 'View Historic Events'
    });
    // TITLES (End)


    this.callParent();

    this.on('inspectitem', me.resolveNavigation);
  }, // initComponent


  resolveNavigation : function(explorer, record, item, index){

    Buildit.util.EventNavigator.resolveNavigation(record);

  } // resolveNavigation

});
Ext.define('Buildit.view.events.LiveTile', {
  extend  : 'Ext.panel.Panel',
  alias   : 'widget.buildit-events-LiveTile',

  socket    : undefined,

  header    : false,

  border    : false,

  contents  : '',

  cls       : 'tile events',

  bodyStyle : {
    backgroundColor : '#2c3e50'
  },

  initComponent : function(){

    var me = this;

    // use the standard socket for the application
    me.socket     = Buildit.lib.SocketManager.get('STANDARD');

    me.store      = Ext.create('Buildit.store.Event');

    me.itemTpl    = new Ext.XTemplate(
      '<tpl for=".">',
          '<div class="event-summary">',
            '<div style="color: #ffffff;font-size: 16px;font-weight:300;">{title}<span style="float: right;font-size: 12px;">{full_name}</span></div>',
            '<div style="color: #ffffff;font-size: 10px;">{message}</div>',
          '</div>',
      '</tpl>'
    );

    me.dataView = Ext.create('Ext.view.View', {
      store        : me.store,
      tpl          : me.itemTpl,
      multiSelect  : false,
      autoScroll   : true,
      trackOver    : true,
      overItemCls  : 'x-item-over',
      itemSelector : 'div.event-summary',
      overflowY    : 'auto',
      flex         : 1,
      listeners    : {
        itemadd    : me.onEventAdded,
        itemclick  : me.onEventClick,
        scope      : me
      }
    });

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
      border    : false,
      dock      : 'bottom',
      cls       : 'footer',
      items     : [{ 
        xtype     : 'tbtext',
        text      : 'HAPPENING NOW',
        cls       : 'title'
      },
      '->',{
        text      : 'View All',
        ui        : 'plain',
        cls       : 'tile-tool',
        handler   : function(event, toolEl, panelHeader) {
          var canvas  = Ext.getCmp('canvas');
          var target = canvas.add({xtype: 'buildit-events-Explorer'});
          canvas.setActiveTab(target);
        }
      }]
    });

    Ext.apply(this, {
      items : [ me.dataView ]
    });

    Ext.apply(this, {
      dockedItems: [ toolbar ]
    });


    me.callParent();

    me.addCls('tile');

    Ext.defer(function(){
      Buildit.lib.SocketManager.get('STANDARD').on('newEvents', me.handleNewEvents, me);
    }, 5000);


  }, // initComponent

  onEventClick : function(event, item, options){
    Buildit.util.EventNavigator.resolveNavigation(item);
  }, // onEventClick

  handleNewEvents : function(data){
    var me = this;
    Ext.Array.each(data, function(event){
      var newEvent = Ext.create('Buildit.model.Event', event);
      console.log(newEvent);
      me.store.insert(0, newEvent);
      Buildit.infoMsg(event.message);
    });
  }, // handleNewEvents

  onEventAdded    : function(view, container, pos, eOpts) {
    var node = pos[0];
    if(node){
      var element = Ext.get(node);
      element.highlight();
    }

  } // onEventAdded

});
Ext.define('Buildit.view.lookups.Explorer', {

	extend:'Buildit.ux.explorer.Panel',
	alias:'widget.buildit-lookups-Explorer',

	initComponent:function () {

		var me = this;

		Ext.apply(this, {

			showInspectorAction: false,
			store:Ext.create('Buildit.store.Lookup'),

			columns:[
						  { header: 'Lookup', filter:{}, dataIndex: 'lookup_id', flex: 1, editor:{allowBlank: true} },
						  { header: 'Code', filter:{}, dataIndex: 'code', flex: 1, editor:{allowBlank: true} },
						  { header: 'Category', filter:{}, dataIndex: 'category', flex: 1, editor:{allowBlank: true} },
						  { header: 'Default Text', filter:{}, dataIndex: 'default_text', flex: 1, editor:{allowBlank: true} },
						  { header: 'Is Enabled', filter:{}, dataIndex: 'is_enabled', flex: 1, editor:{allowBlank: true} },
						  { header: 'Is Destroyed', filter:{}, dataIndex: 'is_destroyed', flex: 1, editor:{allowBlank: true} }
			
			]
		});


		this.callParent();
	}

});
Ext.define('Buildit.view.notes.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-notes-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-notes-Form'
  }],

  inspectorConfig : undefined,
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  detailLabel          : Buildit.i18n.model.Note.detail,
  categoryLabel        : Buildit.i18n.model.Note.category,
  is_internalLabel     : Buildit.i18n.model.Note.is_internal,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Notes',
  subtitle: 'Capture and manage freeform notes.',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Note')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        {
          header      : this.detailLabel,
          dataIndex   : 'detail',
          flex        : 5,
          sortable    : false,
          renderer    : Buildit.util.Format.stringWrapRenderer()
        },
        {
          header      : this.categoryLabel,
          dataIndex   : 'category',
          flex        : 2,
          renderer    : Buildit.util.Format.lookupRenderer('NOTE_TYPE')
        },
        {
          header      : this.is_internalLabel,
          dataIndex   : 'is_internal',
          flex        : 1,
          xtype       : 'checkcolumn'
        }
      ]
    });
    // COLUMNS (End)

    this.callParent();
  }

});
Ext.define('Buildit.view.notes.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-notes-Form',

  backOnNew: true,


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'note_id',
      value:      this.record.get('note_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      note_idLabel:                           Buildit.i18n.model.Note.note_id,
      notable_typeLabel:                      Buildit.i18n.model.Note.notable_type,
      notable_idLabel:                        Buildit.i18n.model.Note.notable_id,
      detailLabel:                            Buildit.i18n.model.Note.detail,
      categoryLabel:                          Buildit.i18n.model.Note.category,
      is_internalLabel:                       Buildit.i18n.model.Note.is_internal,
      is_destroyedLabel:                      Buildit.i18n.model.Note.is_destroyed,
      revision_numberLabel:                   Buildit.i18n.model.Note.revision_number
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          defaults     : {
            anchor       : '100%'
          },
          layout       : 'anchor',
          items        : [
            { 
              xtype        : 'textarea',
              name         : 'detail',
              fieldLabel   : this.detailLabel,
              allowBlank   : false,
              rows         : 10,
              grow         : true
            },
            { xtype: 'buildit-Lookup', name: 'category',                       fieldLabel: this.categoryLabel                    , allowBlank: true, category: 'NOTE_TYPE' },
            { xtype: 'checkbox',   name: 'is_internal',                    fieldLabel: this.is_internalLabel                   , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Note',
      subtitle: 'Edit Notes',
      newTitle: 'New Note',
      newSubtitle: 'Complete the following to create a new Note'
    });
    // TITLES (End)

    this.callParent();

  }

});
Ext.define('Buildit.view.permissions.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-permissions-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-permissions-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-permissions-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  permission_idLabel:                     Buildit.i18n.model.Permission.permission_id,
  role_idLabel:                           Buildit.i18n.model.Permission.role_id,
  privilege_idLabel:                      Buildit.i18n.model.Permission.privilege_id,
  is_enabledLabel:                        Buildit.i18n.model.Permission.is_enabled,
  is_destroyedLabel:                      Buildit.i18n.model.Permission.is_destroyed,
  revision_numberLabel:                   Buildit.i18n.model.Permission.revision_number,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Permissions',
  subtitle:  'Create and maintain Permissions',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Permission')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.role_idLabel,                       dataIndex: 'role_code',                   flex: 1 },
        { header: 'Module',                                dataIndex: 'module_code',                 flex: 2 },
        { header: this.privilege_idLabel,                  dataIndex: 'privilege_code',              flex: 3 },
        { header: this.is_enabledLabel,                    dataIndex: 'is_enabled',                  flex: 1,     xtype: 'checkcolumn' }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.permissions.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-permissions-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'permission_id',
      value:      this.record.get('permission_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      permission_idLabel:                     Buildit.i18n.model.Permission.permission_id,    
      role_idLabel:                           Buildit.i18n.model.Permission.role_id,    
      privilege_idLabel:                      Buildit.i18n.model.Permission.privilege_id,    
      is_enabledLabel:                        Buildit.i18n.model.Permission.is_enabled,    
      is_destroyedLabel:                      Buildit.i18n.model.Permission.is_destroyed,    
      revision_numberLabel:                   Buildit.i18n.model.Permission.revision_number    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'permission_id',                  fieldLabel: this.permission_idLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'role_id',                        fieldLabel: this.role_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'privilege_id',                   fieldLabel: this.privilege_idLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'is_enabled',                     fieldLabel: this.is_enabledLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'revision_number',                fieldLabel: this.revision_numberLabel             , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Permissions',
      newTitle: 'New Permission',
      newSubtitle: 'Complete the following to create a new Permission'
    });
    // TITLES (End)

    this.callParent();
    
  }

});
Ext.define('Buildit.view.permissions.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-permissions-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'permission_id',
        value:      this.record.get('permission_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-permissions-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Permission',
      subtitle:  this.record.get('permission_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.privileges.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-privileges-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind : false,

  allowNew  : false,

  contextMenuConfig: {
    xtype : 'buildit-explorer-ContextMenu'
  },

  newForms  :[{
    xtype : 'buildit-privileges-Form'
  }],

  inspectorConfig: {
    xtype : 'buildit-privileges-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  privilege_codeLabel:                    Buildit.i18n.model.Privilege.privilege_code,
  reference_codeLabel:                    Buildit.i18n.model.Privilege.reference_code,
  module_codeLabel:                       Buildit.i18n.model.Privilege.module_code,
  descriptionLabel:                       Buildit.i18n.model.Privilege.description,
  is_enabledLabel:                        Buildit.i18n.model.Privilege.is_enabled,
  is_destroyedLabel:                      Buildit.i18n.model.Privilege.is_destroyed,
  revision_numberLabel:                   Buildit.i18n.model.Privilege.revision_number,
  privilege_idLabel:                      Buildit.i18n.model.Privilege.privilege_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Privileges',
  subtitle:  'Create and maintain Privileges',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Privilege')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.privilege_codeLabel,                dataIndex: 'privilege_code',              flex: 1 },
        { header: this.module_codeLabel,                   dataIndex: 'module_code',                 flex: 1 },
        { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 3,    sortable : false }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.privileges.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-privileges-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'privilege_id',
      value:      this.record.get('privilege_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      privilege_codeLabel:                    Buildit.i18n.model.Privilege.privilege_code,    
      reference_codeLabel:                    Buildit.i18n.model.Privilege.reference_code,    
      module_codeLabel:                       Buildit.i18n.model.Privilege.module_code,    
      descriptionLabel:                       Buildit.i18n.model.Privilege.description,    
      is_enabledLabel:                        Buildit.i18n.model.Privilege.is_enabled,    
      is_destroyedLabel:                      Buildit.i18n.model.Privilege.is_destroyed,    
      revision_numberLabel:                   Buildit.i18n.model.Privilege.revision_number,    
      privilege_idLabel:                      Buildit.i18n.model.Privilege.privilege_id    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
            { xtype: 'textfield', name: 'privilege_code',                 fieldLabel: this.privilege_codeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'reference_code',                 fieldLabel: this.reference_codeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'module_code',                    fieldLabel: this.module_codeLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'is_enabled',                     fieldLabel: this.is_enabledLabel                  , allowBlank: false }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Privileges',
      newTitle: 'New Privilege',
      newSubtitle: 'Complete the following to create a new Privilege'
    });
    // TITLES (End)

    this.callParent();
    
  }

});
Ext.define('Buildit.view.privileges.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-privileges-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'privilege_id',
        value:      this.record.get('privilege_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-privileges-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Privilege',
      subtitle:  this.record.get('privilege_code')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.roles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-roles-Explorer',

  allowFind: false,

  allowInlineEdit : true,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-roles-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-roles-Inspector'
  },


  role_idLabel:                           Buildit.i18n.model.Role.role_id,    
  role_codeLabel:                         Buildit.i18n.model.Role.role_code,    
  descriptionLabel:                       Buildit.i18n.model.Role.description,    
  is_enabledLabel:                        Buildit.i18n.model.Role.is_enabled,    
  is_destroyedLabel:                      Buildit.i18n.model.Role.is_destroyed,

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.Role')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.role_codeLabel,                     dataIndex: 'role_code',                   flex: 2 },    
        { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 4 },    
        { header: this.is_enabledLabel,                    dataIndex: 'is_enabled',                  flex: 1,   xtype: 'checkcolumn' }
      ]
    });
    // COLUMNS (End)
 
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Roles',
      subtitle: 'Create and maintain Roles'
    });
    // TITLES (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.roles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-roles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'role_id',
      value:      this.record.get('role_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      role_idLabel:                           Buildit.i18n.model.Role.role_id,
      role_codeLabel:                         Buildit.i18n.model.Role.role_code,
      descriptionLabel:                       Buildit.i18n.model.Role.description,
      is_enabledLabel:                        Buildit.i18n.model.Role.is_enabled,
      is_destroyedLabel:                      Buildit.i18n.model.Role.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          scheme       : 'fieldset_scheme_2',
          collapsible  :  true,
          defaultType  :  'textfield',
          layout       : 'anchor',
          items:[

            { xtype: 'textfield', name: 'role_code',                      fieldLabel: this.role_codeLabel                   , allowBlank: false },
            { xtype: 'textarea', name: 'description',                     fieldLabel: this.descriptionLabel                 , allowBlank: false },
            { xtype: 'checkbox',  name: 'is_enabled',                     fieldLabel: this.is_enabledLabel }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Role',
      subtitle: 'Edit Roles',
      newTitle: 'New Role',
      newSubtitle: 'Complete the following to create a new Role'
    });
    // TITLES (End)

    this.callParent();

  }

});
Ext.define('Buildit.view.roles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-roles-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'role_id',
        value:      this.record.get('role_id')
      },

      associativeSearch: {
          with: {
            role_id: {
              equal_to: this.record.get('role_id')
            }
          }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'buildit-roles-Form',
          module: 'roles'
        },
        {
          title: 'Applications',
          xtype: 'buildit-application_roles-Explorer',
          module: 'applications',
          defaultSearch: this.associativeSearch,
          targetConfig: {
            title          : 'Applications',
            subtitle       : 'Manage the associated applications',
            hiddenColumns  : ['role_code'],
            allowFind      : false,
            allowNew       : false,
            allowSave      : true
          }
        },
        {
          title: 'Users',
          xtype: 'buildit-user_roles-Explorer',
          module: 'users',
          defaultSearch: this.associativeSearch,
          targetConfig: {
            title          : 'Users',
            subtitle       : 'Manage the associated users',
            allowNew       : false,
            allowSave      : true,
            hiddenColumns  : ['role_code']
          }
        },
        {
          title: 'Privileges',
          xtype: 'buildit-permissions-Explorer',
          defaultSearch: this.associativeSearch,
          targetConfig: {
            title          : 'Privileges',
            subtitle       : 'Manage the privileges associated to this role',
            allowFind      : false,
            allowNew       : false,
            allowEdit      : true,
            hiddenColumns  : ['role_code']
          }
        },
        {
          title:      'Audit',
          xtype:      'buildit-audits-Explorer',
          model:      'Buildit::Role',
          model_id:   me.record.get('role_id')
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Role',
      subtitle:  this.record.get('role_code')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.settings.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-settings-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property  : 'user_id',
        value     : this.record.get('user_id')
      },

      associativeSearch: {
        with: {
          user_id: {
            equal_to: this.record.get('user_id')
          }
        }
      }

    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title         : 'Profile',
          xtype         : 'buildit-users-Form',
          module        : 'users',
          title         : 'Personal Details'
        },
        {
          title         : 'Bookmarks',
          xtype         : 'buildit-bookmarks-Explorer',
          module        : 'bookmarks',
          defaultSearch : this.associativeSearch,
          allowNew      : false,
          allowSave     : true
        },
        {
          title         : 'Audit',
          xtype         : 'buildit-audits-Explorer',
          model         : 'Buildit::User',
          model_id      : me.record.get('user_id')
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Settings',
      subtitle    : this.record.get('full_name')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.user_roles.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-user_roles-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-user_roles-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-user_roles-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  user_role_idLabel:                      Buildit.i18n.model.UserRole.user_role_id,    
  user_idLabel:                           Buildit.i18n.model.UserRole.user_id,    
  role_idLabel:                           Buildit.i18n.model.UserRole.role_id,    
  is_enabledLabel:                        Buildit.i18n.model.UserRole.is_enabled,    
  is_destroyedLabel:                      Buildit.i18n.model.UserRole.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'User Roles',
  subtitle:  'Maintain User Roles',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.UserRole')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.role_idLabel,                       dataIndex: 'role_code',                   flex: 3 },
        { header: this.user_idLabel,                       dataIndex: 'user_full_name',              flex: 2 },
        { header: 'Email Address',                         dataIndex: 'user_email_address',          flex: 3 },
        { header: this.is_enabledLabel,                    dataIndex: 'is_enabled',                  flex: 1, xtype : 'checkcolumn' }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.user_roles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-user_roles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'user_id',
      value:      this.record.get('user_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      user_role_idLabel:                      Buildit.i18n.model.UserRole.user_role_id,
      user_idLabel:                           Buildit.i18n.model.UserRole.user_id,
      role_idLabel:                           Buildit.i18n.model.UserRole.role_id,
      is_enabledLabel:                        Buildit.i18n.model.UserRole.is_enabled,
      is_destroyedLabel:                      Buildit.i18n.model.UserRole.is_destroyed
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          layout:       'anchor',
          items:[

            {
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.Role',{pageSize: 10}),
              displayField: 'role_code',
              queryField: 'role_code',
              valueField: 'role_id',
              itemTpl:'{role_code}',
              name: 'role_id',
              fieldLabel: this.role_idLabel,
              allowBlank: false
            },
            { xtype: 'checkbox', name: 'is_enabled',                     fieldLabel: this.is_enabledLabel }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'User Role',
      subtitle: 'Edit UserRoles',
      newTitle: 'New User Role',
      newSubtitle: 'Complete the following to create a new User Role'
    });
    // TITLES (End)

    this.callParent();

  }

});
Ext.define('Buildit.view.user_roles.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-user_roles-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'user_id',
        value:      this.record.get('user_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'buildit-user_roles-Form'}
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'User Role',
      subtitle:  this.record.get('user_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.users.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-users-Explorer',

  allowInlineEdit : true,

  allowFind : true,

  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms:[{
    xtype: 'buildit-users-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-users-Inspector'
  },

  user_idLabel:                           Buildit.i18n.model.User.user_id,
  email_addressLabel:                     Buildit.i18n.model.User.email_address,
  first_nameLabel:                        Buildit.i18n.model.User.first_name,
  last_nameLabel:                         Buildit.i18n.model.User.last_name,
  secret_questionLabel:                   Buildit.i18n.model.User.secret_question,
  secret_answerLabel:                     Buildit.i18n.model.User.secret_answer,
  secret_passwordLabel:                   Buildit.i18n.model.User.secret_password,
  user_nameLabel:                         Buildit.i18n.model.User.user_name,
  encrypted_passwordLabel:                Buildit.i18n.model.User.encrypted_password,
  sso_plugin_codeLabel:                   Buildit.i18n.model.User.sso_plugin_code,
  api_tokenLabel:                         Buildit.i18n.model.User.api_token,
  is_lockedLabel:                         Buildit.i18n.model.User.is_locked,
  statusLabel:                            Buildit.i18n.model.User.status,
  is_sys_adminLabel:                      Buildit.i18n.model.User.is_sys_admin,
  is_destroyedLabel:                      Buildit.i18n.model.User.is_destroyed,
  revision_numberLabel:                   Buildit.i18n.model.User.revision_number,

  initComponent:function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.User')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.email_addressLabel,                 dataIndex: 'email_address',               flex: 3,  editor: {} },
        { header: this.first_nameLabel,                    dataIndex: 'first_name',                  flex: 2 },
        { header: this.last_nameLabel,                     dataIndex: 'last_name',                   flex: 2 },
        { header: this.statusLabel,                        dataIndex: 'status',                      flex: 2,  renderer: Buildit.util.Format.lookupRenderer('USER_STATUS'), editor: {xtype: 'buildit-Lookup', category: 'USER_STATUS'} },
        { header: this.is_lockedLabel,                     dataIndex: 'is_locked',                   flex: 1,  xtype: 'checkcolumn' },
        { header: this.is_sys_adminLabel,                  dataIndex: 'is_sys_admin',                flex: 1,  xtype: 'checkcolumn' }
      ]
    });
    // COLUMNS (End)


    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'Users',
      subtitle: 'Create and maintain Users'
    });
    // TITLES (End)


    this.callParent();
  }

});
Ext.define('Buildit.view.users.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-users-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'user_id',
      value:      this.record.get('user_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      user_idLabel:                           Buildit.i18n.model.User.user_id,
      email_addressLabel:                     Buildit.i18n.model.User.email_address,
      first_nameLabel:                        Buildit.i18n.model.User.first_name,
      last_nameLabel:                         Buildit.i18n.model.User.last_name,
      secret_questionLabel:                   Buildit.i18n.model.User.secret_question,
      secret_answerLabel:                     Buildit.i18n.model.User.secret_answer,
      secret_passwordLabel:                   Buildit.i18n.model.User.secret_password,
      user_nameLabel:                         Buildit.i18n.model.User.user_name,
      user_cnLabel:                           Buildit.i18n.model.User.user_cn,
      encrypted_passwordLabel:                Buildit.i18n.model.User.encrypted_password,
      sso_plugin_codeLabel:                   Buildit.i18n.model.User.sso_plugin_code,
      api_tokenLabel:                         Buildit.i18n.model.User.api_token,
      is_lockedLabel:                         Buildit.i18n.model.User.is_locked,
      statusLabel:                            Buildit.i18n.model.User.status,
      is_sys_adminLabel:                      Buildit.i18n.model.User.is_sys_admin,
      is_destroyedLabel:                      Buildit.i18n.model.User.is_destroyed,
      revision_numberLabel:                   Buildit.i18n.model.User.revision_number,
      passwordLabel:                          Buildit.i18n.model.User.password,
      password_confirmationLabel:             Buildit.i18n.model.User.password_confirmation
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  :  true,
          scheme       : 'fieldset_scheme_2',
          defaultType  : 'textfield',
          defaults     : {anchor: '100%'},
          layout       : 'anchor',
          items        : [
            { 
              xtype        : 'textfield',
              name         : 'first_name',
              fieldLabel   : this.first_nameLabel,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'last_name',
              fieldLabel   : this.last_nameLabel,
              allowBlank   : false
            },
            { 
              xtype        : 'textfield',
              name         : 'email_address',
              fieldLabel   : this.email_addressLabel,
              allowBlank   : false,
              disabled     : !me.record.phantom
            }
          ]
        },
        {
          xtype        : 'fieldset',
          title        : 'Security Information',
          collapsible  : true,
          defaultType  : 'textfield',
          defaults     : {anchor: '100%'},
          layout       : 'anchor',
          items        : [
            { xtype: 'textfield', name: 'user_name',                      fieldLabel: this.user_nameLabel                   , allowBlank: true },
            { xtype: 'label',                                             text: 'The user name to be passed to the external security system during authentication.'                   , cls: 'instruction' },
            { xtype: 'textfield', name: 'user_cn',                        fieldLabel: this.user_cnLabel                   , allowBlank: true },
            { xtype: 'label',                      text: 'The name that will be supplied during sign-in. This may or may not be the same as the user name.'                   , cls: 'instruction' },
            { xtype: 'buildit-Lookup', name: 'status',                    fieldLabel: this.statusLabel                      , allowBlank: false, category: 'USER_STATUS',  lkp: 'code_int' },
            { xtype: 'textfield', name: 'secret_question',                fieldLabel: this.secret_questionLabel             , allowBlank: true },
            { xtype: 'textfield', name: 'secret_answer',                  fieldLabel: this.secret_answerLabel               , allowBlank: true },
            { xtype: 'buildit-Lookup', name: 'sso_plugin_code',           fieldLabel: this.sso_plugin_codeLabel             , allowBlank: false,  category: 'SSO_PLUGIN_CODE'},
            { xtype: 'textfield', name: 'api_token',                      fieldLabel: this.api_tokenLabel                   , allowBlank: false },
            { xtype: 'label',                      text: 'This will be auto-generated if left blank.'                   , cls: 'instruction' },
            { xtype: 'checkbox',  name: 'is_locked',                      fieldLabel: this.is_lockedLabel },
            { xtype: 'checkbox',  name: 'is_sys_admin',                   fieldLabel: this.is_sys_adminLabel }
          ]
        },
        {
          xtype        : 'fieldset',
          title        : 'Set Password',
          scheme       : 'fieldset_scheme_3',
          collapsible  : true,
          defaultType  : 'textfield',
          defaults     : {anchor: '100%'},
          layout       : 'anchor',
          items        : [
            { xtype: 'label',                                             text: 'This only applies to internal SSO users. Any external (i.e. LDAP) will not be changed via this form.'                   , cls: 'instruction' },
            { xtype: 'textfield', name: 'password',                       fieldLabel: this.passwordLabel,                     allowBlank: true,  inputType: 'password' },
            { xtype: 'textfield', name: 'password_confirmation',          fieldLabel: this.password_confirmationLabel,        allowBlank: true,  inputType: 'password' }
          ],
          listeners    : {
            beforerender: function(cmp){
              if(!me.record.phantom){
                if(me.record.get('sso_plugin_code') !== 'BUILDIT'){
                  cmp.hide();  
                }
              }
            }   
          }
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title: 'User',
      subtitle: 'Edit Users',
      newTitle: 'New User',
      newSubtitle: 'Complete the following to create a new User'
    });
    // TITLES (End)

    this.callParent();

  }

});
Ext.define('Buildit.view.users.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.buildit-users-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property  : 'user_id',
        value     : this.record.get('user_id')
      },

      associativeSearch: {
        with: {
          user_id: {
            equal_to: this.record.get('user_id')
          }
        }
      }

    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title         : 'Profile',
          xtype         : 'buildit-users-Form',
          module        : 'users'
        },
        {
          title         : 'Roles',
          xtype         : 'buildit-user_roles-Explorer',
          module        : 'roles',
          defaultSearch : this.associativeSearch,
          targetConfig  : {
            title           : 'Roles',
            subtitle        : 'Manage the associated roles',
            allowNew        : false,
            allowInlineEdit : true
          }
        },
        {
          title         : 'Audit',
          xtype         : 'buildit-audits-Explorer',
          model         : 'Buildit::User',
          model_id      : me.record.get('user_id')
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'User',
      subtitle    : this.record.get('full_name')
    });
    // TITLES (End)

    this.callParent();
  }
});
Ext.define('Buildit.view.web_hooks.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.buildit-web_hooks-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'buildit-web_hooks-Form'
  }],

  inspectorConfig : {
    xtype    : 'buildit-web_hooks-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  web_hook_idLabel                        : Buildit.i18n.model.WebHook.web_hook_id,
  receive_urlLabel                        : Buildit.i18n.model.WebHook.receive_url,
  head_attributeLabel                     : Buildit.i18n.model.WebHook.head_attribute,
  head_valueLabel                         : Buildit.i18n.model.WebHook.head_value,
  post_attributeLabel                     : Buildit.i18n.model.WebHook.post_attribute,
  post_valueLabel                         : Buildit.i18n.model.WebHook.post_value,
  user_idLabel                            : Buildit.i18n.model.WebHook.user_id,
  is_destroyedLabel                       : Buildit.i18n.model.WebHook.is_destroyed,
  audit_created_byLabel                   : Buildit.i18n.model.WebHook.audit_created_by,
  audit_updated_byLabel                   : Buildit.i18n.model.WebHook.audit_updated_by,
  audit_created_atLabel                   : Buildit.i18n.model.WebHook.audit_created_at,
  audit_updated_atLabel                   : Buildit.i18n.model.WebHook.audit_updated_at,
  revision_numberLabel                    : Buildit.i18n.model.WebHook.revision_number,
  is_enabledLabel                         : Buildit.i18n.model.WebHook.is_enabled,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Web Hooks',
  subtitle : 'Create and maintain Web Hooks',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Buildit.store.WebHook')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.receive_urlLabel,
          dataIndex    : 'receive_url',
          flex         : 4,
          sortable     : false
        },
        {
          header       : me.user_idLabel,
          dataIndex    : 'user_full_name',
          flex         : 3
        },
        {
          header       : me.audit_created_atLabel,
          dataIndex    : 'audit_created_at',
          flex         : 2
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_enabledLabel,
          dataIndex    : 'is_enabled',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
Ext.define('Buildit.view.web_hooks.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.buildit-web_hooks-Form',


  // LABELS (Start) =======================================================================
  web_hook_idLabel                        : Buildit.i18n.model.WebHook.web_hook_id,
  receive_urlLabel                        : Buildit.i18n.model.WebHook.receive_url,
  head_attributeLabel                     : Buildit.i18n.model.WebHook.head_attribute,
  head_valueLabel                         : Buildit.i18n.model.WebHook.head_value,
  post_attributeLabel                     : Buildit.i18n.model.WebHook.post_attribute,
  post_valueLabel                         : Buildit.i18n.model.WebHook.post_value,
  user_idLabel                            : Buildit.i18n.model.WebHook.user_id,
  is_destroyedLabel                       : Buildit.i18n.model.WebHook.is_destroyed,
  audit_created_byLabel                   : Buildit.i18n.model.WebHook.audit_created_by,
  audit_updated_byLabel                   : Buildit.i18n.model.WebHook.audit_updated_by,
  audit_created_atLabel                   : Buildit.i18n.model.WebHook.audit_created_at,
  audit_updated_atLabel                   : Buildit.i18n.model.WebHook.audit_updated_at,
  revision_numberLabel                    : Buildit.i18n.model.WebHook.revision_number,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'web_hook_id',
      value       : this.record.get('web_hook_id')
    };
    // FILTER (End)

    

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'receive_url',
              fieldLabel   : me.receive_urlLabel,
              maxLength    : 400,
              minLength    : 0,
              allowBlank   : false,
              vtype        : 'url'
            },
            {
              xtype        : 'textfield',
              name         : 'head_attribute',
              fieldLabel   : me.head_attributeLabel,
              maxLength    : 50,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'head_value',
              fieldLabel   : me.head_valueLabel,
              maxLength    : 255,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'buildit-Locator', 
              store        : Ext.create('Buildit.store.User',{pageSize: 10}), 
              displayField : 'user_full_name',
              itemTpl      : '{user_full_name}',
              name         : 'user_id', 
              fieldLabel   : me.user_idLabel,
              initialValue : me.record.get('user_full_name'),
              allowBlank   : false,
              disabled     : me.record.phantom
            }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/          
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'WebHook',
      subtitle    : 'Edit WebHook'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Buildit.view.web_hooks.Form'
;
Ext.define('Buildit.view.web_hooks.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.buildit-web_hooks-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'web_hook_id',
        value     : this.record.get('web_hook_id')
      },

      associativeSearch : {
        with: {
          web_hook_id : {
            equal_to : this.record.get('web_hook_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'buildit-web_hooks-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Web Hook',
      subtitle  : this.record.get('web_hook_id')
    });
    // TITLES (End)

    this.callParent();
  }
});
Buildit.defineController('Buildit.controller.Application', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.ApplicationRole', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.Attachment', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.Bookmark', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

}); // Buildit.defineController('Buildit.controller.Bookmark'
;
Buildit.defineController('Buildit.controller.Dashboard', {
	extend: 'Ext.app.Controller',
	views: [],

	onLaunchGallery: function() {
		Ext.create('Buildit.view.dashboard.Gallery').show();
	},

	onChangeColumnLayout: function(btn) {
		var dashboard = Ext.ComponentQuery.query('buildit-dashboard-Dashboard')[0];
		dashboard.setColumnCount(btn.columnCount);
	},
	
	onRefreshDashboard: function(btn) {
		console.log("refreshing all dahslets");
	},
	
	onDashletSelect: function(grid, record, item, index, e, eOpts ) {
		var dashboard = Ext.ComponentQuery.query('buildit-dashboard-Dashboard')[0];
		dashboard.addPortlet(0, Ext.create(record.get('component')));
	},

	init: function() {
		this.control(
			{
			  'button[action=launchGallery]': 
			  {
				  click: this.onLaunchGallery
			  },
		
				'button[action=changeColumnLayout]': 
				{
					click: this.onChangeColumnLayout
				},
				
				'button[action=refreshDashboard]':
				{
					click: this.onRefreshDashboard
				},

				'buildit-dashboard-Gallery gridpanel':
				{
					itemdblclick: this.onDashletSelect
				}
			}
		);

	}

});
Buildit.defineController('Buildit.controller.Dashlet', {
	extend: 'Ext.app.Controller',
	views: [],

	handleAction: function() {
		// todo - add your controller logic here
	},

	init: function() {
		this.control(
			{
			  'button[criteria=undefined]':
			  {
				  click: this.handleAction
			  }
			}
		);

	}

});
Buildit.defineController('Buildit.controller.Navigator', {
	extend: 'Ext.app.Controller',
	views: [],

  navigateHome: function() {
    var canvas = Ext.getCmp('canvas');
    canvas.setActiveTab(0);
  },

  showOpenItems: function(){
	 console.log('! Show Open Items');
  },

  init: function() {
    this.control(
      {
      'button[action=home]':
			  {
				  click: this.navigateHome
			  },
			'button[action=openItems]':
			  {
				  click: this.showOpenItems
			 }
			}
		);

	}

});
Buildit.defineController('Buildit.controller.Note', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.Permission', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.Privilege', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.Role', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.User', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.UserRole', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

});
Buildit.defineController('Buildit.controller.WebHook', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

}); // Buildit.defineController('Buildit.controller.WebHook'
;

















Ext.define('Desk.model.Case', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'case_id',
      type       : 'string'
    },
    {
      name       : 'case_nbr',
      type       : 'string'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    // {
    //   name       : 'agent_id',
    //   type       : 'string'
    // },
    {
      name       : 'state',
      type       : 'string',
      defaultValue: 'new'
    },
    {
      name       : 'case_type',
      type       : 'string',
    },
    {
      name       : 'summary',
      type       : 'string'
    },
    {
      name       : 'tags',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'case_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Desk.service.Case.create,
      read       : Desk.service.Case.read,
      update     : Desk.service.Case.update,
      destroy    : Desk.service.Case.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Desk.model.Case'
;
Ext.define('Desk.store.Case', {
  extend       : 'Ext.data.Store',
  alias        : 'store.desk-Case',
  model        : 'Desk.model.Case',
  autoLoad     : false,
  storeId      : 'CaseStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Desk.store.Case'
;
Ext.define('Desk.view.app.HubContextMenu', {
  extend: 'Buildit.ux.ContextMenu',
  alias:  'widget.desk-app-HubContextMenu',


  initComponent: function() {
    var me = this;

    Ext.apply(this, {

      rightActions: [

        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.
         */
        {
          text:'Settings',
          cls: 'icon-settings',
          action: 'settings',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickExport,
              scope: me
            }
          }
        },

        // SEPARATOR
        '-',


        /**
         * DELETE
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.
         */
        {
          text:'Applications',
          cls: 'icon-applications',
          action: 'applications',
          confirm: true,
          multi: true,
          privileges: [],
          listeners: {
            click: {
              fn: this.clickSelectAll,
              scope: me
            }
          }
        }

      ],


      leftActions: [

        /**
         * NEW
         * Supports the deletion of the selected items in the explorer grid. If none
         * are selected then no records are processed.

        {
          text: 'New',
          cls: 'icon-new'
        }
        */
      ]

    });

    this.callParent();
  },

  clickDelete: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Delete.click(btn);
  },

  clickExport: function(btn, e, eOpts){
    Buildit.logic.explorer.action.Export.click(btn);
  },

  clickSelectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.SelectAll.click(btn);
  },

  clickDeselectAll: function(btn, e, eOpts){
    Buildit.logic.explorer.action.DeselectAll.click(btn);
  }

});

Ext.define('Desk.view.app.Hub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.desk-app-Hub',
  extend: 'Buildit.ux.Hub',
  bodyStyle: 'background: transparent',
  cls: 'desktop',

  initComponent: function() {
    var me = this;

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout: true,
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'desk-app-HubContextMenu'
      },
      sections: [

        // Section: Cases //

        {
          title: 'My Desk',
          columns: 6,
          rows: 4,
          tiles: [

            {
              title: 'Requests on my desk',
              colspan: 2,
              rowspan: 1,
              // cls: 'supply',
              target: {
                xtype: 'desk-cases-Explorer'
              }
            },

            // {
            //   title: 'All my requests',
            //   colspan: 2,
            //   rowspan: 1,
            //   // cls: 'supply',
            //   target: {
            //     xtype: 'desk-cases-Explorer'
            //   }
            // },

          ]
        }

        // {
        //   title: 'Start new',
        //   columns: 6,
        //   rows: 4,
        //   tiles: [

        //     {
        //       title: 'Start a new request - coming soon',
        //       colspan: 2,
        //       rowspan: 1,
        //       // cls: 'supply',
        //       target: {
        //         xtype: 'desk-cases-Form'
        //       }
        //     }
        //   ]
        // }

      ]
    });

    this.callParent();
  },

  // handleNewEvents : function(data){
  //    var me = this;
  //    Ext.Array.each(data, function(event){
  //      var newEvent = Ext.create('Buildit.model.Event', event);
  //      // me.store.add(newEvent);
  //        Buildit.infoMsg(event.message)
  //      // Buildit.infoMsg(newEvent.get('message'))
  //    });
  //  }


});
Ext.define('Desk.view.cases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-cases-Explorer',
  allowFind : 'true',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-cases-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-cases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel                            : Desk.i18n.model.Case.case_id,
  case_typeLabel                            : Desk.i18n.model.Case.case_type,
  case_nbrLabel                           : Desk.i18n.model.Case.case_nbr,
  stateLabel                              : Desk.i18n.model.Case.state,
  summaryLabel                            : Desk.i18n.model.Case.summary,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  is_destroyedLabel                       : Desk.i18n.model.Case.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Support Requests',
  subtitle : 'Work with support requests',
  // TITLES (End)

  initComponent : function () {

    var me = this;


    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Case')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.case_nbrLabel,
          dataIndex    : 'case_nbr',
          flex         : 1,
          emptyText    : 'auto-generated on save'
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.case_typeLabel,
          dataIndex    : 'case_type',
          flex         : 2,
          renderer      : Buildit.util.Format.lookupRenderer('CASE_TYPE'),
          lkp           : 'code_int'
        },
        {
          header       : me.summaryLabel,
          dataIndex    : 'summary',
          flex         : 2
        },

        // {
        //   header       : me.tagsLabel,
        //   dataIndex    : 'tags',
        //   flex         : 1
        // },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 3
        },
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
Ext.define('Desk.view.cases.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-cases-Form',
  record: undefined,
  // LABELS (Start) =======================================================================
  case_idLabel: Desk.i18n.model.Case.case_id,
  case_nbrLabel: Desk.i18n.model.Case.case_nbr,
  case_typeLabel: Desk.i18n.model.Case.case_type,
  user_idLabel: Desk.i18n.model.Case.user_id,
  agent_idLabel: Desk.i18n.model.Case.agent_id,
  stateLabel: Desk.i18n.model.Case.state,
  summaryLabel: Desk.i18n.model.Case.summary,
  tagsLabel: Desk.i18n.model.Case.tags,
  descriptionLabel: Desk.i18n.model.Case.description,
  is_destroyedLabel: Desk.i18n.model.Case.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    Ext.apply(me, {
      store: Ext.create('Desk.store.Case')
    });

    // var rec = new store.model;

    // Ext.apply(me, {
    //   record: rec
    // });

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'case_id',
      value: 'new'
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
              xtype: 'textfield',
              name: 'state',
              fieldLabel: me.stateLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'case_nbr',
              fieldLabel: me.case_nbrLabel,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'summary',
              fieldLabel: me.summaryLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: false
            }, {
              xtype: 'label',
              text: 'Give a concise but descriptive summary of your request',
              cls: 'instruction'
            }, {
              xtype: 'textarea',
              name: 'description',
              fieldLabel: me.descriptionLabel,
              maxLength: 500,
              minLength: 0,
              allowBlank: true,
              // rowspan: 5q
            }, {
              xtype: 'label',
              text: 'Add as much detail as you can to the request',
              cls: 'instruction'
            }, {
              name: 'case_type',
              fieldLabel: this.case_typeLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'CASE_TYPE'
            }, {
              xtype: 'label',
              text: "Select the type that best describes your request or select 'question' if you are unsure",
              cls: 'instruction'
            }
          ]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Support Request',
      subtitle: 'work with your request'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Desk.view.cases.Form'
;
Ext.define('Desk.view.cases.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-cases-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'case_id',
        value     : this.record.get('case_id')
      },

      associativeSearch : {
        with: {
          case_id : {
            equal_to : this.record.get('case_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'desk-cases-Form'
        }

       ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Support',
          module   : 'notes',
          cards    : [
            {
              title: 'Notes',
              xtype: 'buildit-notes-Explorer',
              defaultSearch: { with:
                {
                  notable_type: {equal_to: 'Desk::Case'},
                  notable_id:   {equal_to: me.record.get('case_id')}
                }
              },
              showBadge: true
            },
            {
              title: 'Attachments',
              xtype: 'buildit-attachments-Explorer',
              defaultSearch: { with:
                {
                  attachable_type: {equal_to: 'Desk::Case'},
                  attachable_id:   {equal_to: me.record.get('case_id')}
                }
              },
              showBadge: true
            },
            {
              title:      'Audit',
              xtype:      'buildit-audits-Explorer',
              model:      'Desk::Case',
              model_id:   me.record.get('case_id')
            }
          ]
        }

      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Case',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});
Buildit.defineController('Desk.controller.Case', {
  extend: 'Ext.app.Controller',
  views: [],

  handleAction: function() {
  },

  init: function() {
    this.control(
      {
        'button[criteria=undefined]':
        {
          click: this.handleAction
        }
      }
    );

  }

}); // Buildit.defineController('Desk.controller.Case'
;






Buildit.desktopApplication({
	name:'Desk',

	autoCreateViewport:false,

	launch:function () {

		// LAUNCH INITIAL COMPONENT
		Ext.widget('buildit-Viewport', {
			items:[
      {
        xtype: 'buildit-Canvas',
        flex: 1,
        id: 'canvas',
        title: 'buildit.io',
        subtitle: 'Enterprise Application',
        items: [
          {
            xtype      : 'buildit-SecurityCheckpoint',
            id         : 'login',
            listeners  : {
              loginsuccess : function() {

                var socket = Ext.create('Buildit.ux.Socket',{
                  host     : 'localhost',
                  port     : 3001,
                  channels : ['channel1', 'channel2']
                });

                Buildit.lib.SocketManager.add('STANDARD', socket);
              }
            }
          }
        ]
      }
      ]
		});

		Ext.FocusManager.enable();
	}

});
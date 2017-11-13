import{Component,OnInit,ViewChild, ContentChild,AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../services/user.service";
import {Observable} from 'rxjs/Observable';
import {ModalModule} from "ngx-modal";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * User List Component
 *
 */
declare var jQuery:any;
declare var $:any;
@Component({
 templateUrl: 'templates/user/list.component.html'
})

export class UserListComponent implements OnInit {
	
	user:any;
	@ViewChild('firstModal')
	firstModal: ModalModule;
	//@ContentChild("firstModal") firstModal: ModalModule;	
	//@ViewChild('firstModal') modal: any;
	public _popupTitle: string;
	public _popupBody: string;
	public _popupBtn:number;
	public useridval:number;
	constructor(private router:Router,private _userService: UserService)
    {
    }
    ngOnInit(): void {
		this.getUserList();
		
	}
    getUserList()
    {
		var self = this;
        var serviceUrl = "api/users/";
        var dataTable = jQuery("#example").DataTable({
			"destroy": true,
			"serverSide": true,
			"searching":true,
			"responsive": true,
			language: {
		        searchPlaceholder: "firstname"
		    },
			"order": [[0, 'desc']],
			"ajax": {
				url : serviceUrl,
				type: 'get'
			},
			"columns": [
					{"data": "firstName", "name": "firstName","width": "15%"},
					{"data": "lastName", "name": "lastName","width": "15%"},
					{"data": "email", "name": "email","width": "33%"},
 					{"data": "contactNo", "name": "contactNo","width": "15%"},
					{data:null,"className": "text-center", render: function ( data, type, row ) {
							var statusStr = "";
							if(data.status == "1")
							{
								statusStr = `<button data-id="`+data.userId+`" class='btn btn-sm btn-danger user-status-update' >Enable</button>`
							}
							else
							{
								statusStr = `<button data-id="`+data.userId+`" class='btn btn-sm btn-primary user-status-update' >Disable</button>`
							}
							return statusStr;
						}
					},
					{"data": "action","className": "text-center", "name": "action", "orderable": false, "searchable": false, "width": "10%"}
			],
			fnRowCallback: function( nRow, aData, iDisplayIndex )
			{
				//console.log(nRow);
				var str = '<a title="Edit" id="'+aData.userId+'" class="btn btn-default btn-sm user-edit"><i class="fa fa-edit"></i></a>';
				str += '&nbsp;<a data-id="'+aData.userId+'" title="Delete" class="btn btn-default btn-sm user-delete" ><i class="fa fa-trash-o"></i></a>';
				jQuery('td:eq(5)',nRow).html(str);
				return nRow;
			},
			fnDrawCallback: function( oSettings )
			{
				jQuery('a.user-edit').on( 'click', function (e) {
					var userId = this.id;
					self.userEdit(userId);
					e.preventDefault();
				});
				jQuery('.user-status-update').on( 'click', function (e) {
					var userStatusIdVal = $(this).data("id");
					self.onConfirmStatusPopup(userStatusIdVal);
					e.preventDefault();
				});
				jQuery('a.user-delete').on( 'click', function (e) {
					var userDeleteIdVal = $(this).data("id");
					self.onConfirmDelPopup(userDeleteIdVal);
					e.preventDefault();
				});
			}
		});
	}
	/*
	* This function is used to 
	* navigat user to edit form
	*/
	userEdit(userid)
	{
		this.router.navigate(['/users/edit/', userid]);
	}
	onConfirmStatusPopup(userId)
	{
		this.user = {};
		this.user.id = userId;
		this._popupTitle = 'User status';
    	this._popupBody = 'Are you sure want to change this user status?';
    	this._popupBtn = 3;
		this.firstModal.open();
	}
	/*
	* This function is used for update the user status
	*/
	userStatusUpdate()
	{
		var reqUrl = "api/users/changestatus";
		this.firstModal.close();
		this._userService.userStatusUpdate(this.user,reqUrl).then(res=>{
			this.ngOnInit();
			this.router.navigate(['/users']);
    	});

	}
	onConfirmDelPopup(userId)
	{
		this.user = {};
		this.user.id = userId;
		this._popupTitle = 'User Delete?';
    	this._popupBody = 'Are you sure want to delete this user?';
    	this._popupBtn = 2;
		this.firstModal.open();
	}
	userDelete()
	{
		var reqUrl = "api/users/"+this.user.id;
		this.firstModal.close();
		//this.user._method = 'delete';
		this._userService.userDelete(reqUrl).then(res => {
			this.ngOnInit();
			this.router.navigate(['/users']);
		});
	}
}
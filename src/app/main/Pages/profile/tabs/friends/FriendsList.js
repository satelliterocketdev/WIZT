import React, {Component} from 'react';
import {Avatar, Icon, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography,} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import ReactTable from "react-table";
import * as Actions from './store/actions';

class ContactsList extends Component {

    state = {
        selectedContactsMenu: null
    };

    getFilteredArray = (entities, searchText) => {
        const arr = Object.keys(entities).map((id) => entities[id]);
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    };

    openSelectedContactMenu = (event) => {
        this.setState({selectedContactsMenu: event.currentTarget});
    };

    closeSelectedContactsMenu = () => {
        this.setState({selectedContactsMenu: null});
    };

    render()
    {
        const { contacts, searchText, selectedContactIds, openEditContactDialog, confirmDialog, removeContacts, setContactsUnstarred, setContactsStarred} = this.props;
        const data = this.getFilteredArray(contacts, searchText);
        const {selectedContactsMenu} = this.state;
        if ( !data && data.length === 0 )
        {
            return (
                <div className="flex items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no contacts!
                    </Typography>
                </div>
            );
        }

        return (
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className="-striped -highlight border-0"
                    getTrProps={(state, rowInfo, column) => {
                        return {
                            className: "cursor-pointer",
                            onClick  : (e, handleOriginal) => {
                                if ( rowInfo )
                                {
                                    openEditContactDialog(rowInfo.original);
                                }
                            }
                        }
                    }}
                    data={data}
                    columns={[
                        {
                            Header    : "No",
                            accessor  : "",
                            Cell      : row => (
                               row.index+1
                            ),
                            width    : 64,
                            filterable: false,
                            className : "justify-center"
                        },
                        {
                            Header   : () => (
                                selectedContactIds.length > 0 && (
                                    <React.Fragment>
                                        <IconButton
                                            aria-owns={selectedContactsMenu ? 'selectedContactsMenu' : null}
                                            aria-haspopup="true"
                                            onClick={this.openSelectedContactMenu}
                                        >
                                            <Icon>more_horiz</Icon>
                                        </IconButton>
                                        <Menu
                                            id="selectedContactsMenu"
                                            anchorEl={selectedContactsMenu}
                                            open={Boolean(selectedContactsMenu)}
                                            onClose={this.closeSelectedContactsMenu}
                                        >
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() => {
                                                        removeContacts(selectedContactIds);
                                                        this.closeSelectedContactsMenu();
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Icon>delete</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText inset primary="Remove"/>
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => {
                                                        setContactsStarred(selectedContactIds);
                                                        this.closeSelectedContactsMenu();
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Icon>star</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText inset primary="Starred"/>
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => {
                                                        setContactsUnstarred(selectedContactIds);
                                                        this.closeSelectedContactsMenu();
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Icon>star_border</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText inset primary="Unstarred"/>
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </React.Fragment>
                                )
                            ),
                            accessor : "picture",
                            Cell     : row => (
                                <Avatar  alt={row.original.name} src={row.value} />
                            ),
                            className: "justify-center",
                            width    : 64,
                            sortable : false
                        },
                        {
                            Header    : "Name",
                            accessor  : "name",
                            filterable: false,
                        },
                        {
                            Header    : "User name",
                            accessor  : "username",
                            filterable: false,
                        },
                        {
                            Header    : "Email",
                            accessor  : "email",
                            filterable: false
                        },
                        {
                            Header    : "Email verified",
                            accessor  : "email_verified",
                            Cell      : row => (
                                <div>{row.value === true? "Yes" : "No"}</div>
                            ),
                            filterable: false
                        },
                        {
                            Header    : "Phone Number",
                            accessor  : "phone_number",
                            filterable: false
                        },
                        {
                            Header    : "Phone Number verified",
                            accessor  : "Phone_number_verified",
                            Cell      : row => (
                                <div>{row.value === true? "Yes" : "No"}</div>
                            ),
                            filterable: false
                        },
                        {
                            Header    : "Label in use",
                            accessor  : "label_in_use",
                            filterable: false
                        },
                        {
                            Header    : "Photo in use",
                            accessor  : "photo_in_use",
                            filterable: false
                        },
                        {
                            Header: "",
                            width : 64,
                            className : "justify-center",
                            Cell  : row => (
                                <div className="flex items-center">
                                    <IconButton
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            confirmDialog(row.original.id);
                                        }}
                                    >
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </div>
                            )
                        }
                    ]}
                    defaultPageSize={10}
                    noDataText="No contacts found"
                />
            </FuseAnimate>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getContacts             : Actions.getContacts,
        getUserData             : Actions.getUserData,
        toggleInSelectedContacts: Actions.toggleInSelectedContacts,
        selectAllContacts       : Actions.selectAllContacts,
        deSelectAllContacts     : Actions.deSelectAllContacts,
        openEditContactDialog   : Actions.openEditContactDialog,
        removeContacts          : Actions.removeContacts,
        toggleStarredContact    : Actions.toggleStarredContact,
        toggleStarredContacts   : Actions.toggleStarredContacts,
        setContactsStarred      : Actions.setContactsStarred,
        setContactsUnstarred    : Actions.setContactsUnstarred,
        confirmDialog           : Actions.confirmDialog,
    }, dispatch);
}

function mapStateToProps({friendsApp})
{
    return {
        contacts          : friendsApp.contacts.entities,
        selectedContactIds: friendsApp.contacts.selectedContactIds,
        searchText        : friendsApp.contacts.searchText,
        user              : friendsApp.user
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList));

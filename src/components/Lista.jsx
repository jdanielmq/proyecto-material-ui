import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudQueue from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";



const Lista = () => {
    return (
        <List component="nav" aria-label="cicle">
            <ListItem button>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Nombre de usuario" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <CloudQueue />
                </ListItemIcon>
                <ListItemText primary="CloudQueue" />
            </ListItem>     
            <ListItem button>
                <ListItemIcon>
                    <DeckIcon />
                </ListItemIcon>
                <ListItemText primary="DeckIcon" />
            </ListItem>  
            <Divider/>   
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="InboxIcon" />
            </ListItem>    
            <ListItem button>
                <ListItemIcon>
                    <AddShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="AddShoppingCartIcon" />
            </ListItem>   
            <Divider/>   
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="DraftsIcon" />
            </ListItem>    
        </List>

    )
}

export default Lista

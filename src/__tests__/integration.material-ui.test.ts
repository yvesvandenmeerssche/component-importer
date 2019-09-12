import { analyzeTypeScript } from "../typescript"
import fs from "fs"
import { flatMap } from "../utils"

describe("integration-test", () => {
    test("material-ui", async () => {
        const components = await analyzeTypeScript([
            `integration-test-data/@material-ui/core/node_modules/@material-ui/core/index.d.ts`,
        ])

        const componentNames = components.map(comp => comp.name)

        expect(componentNames).toEqual([
            "AppBar",
            "Avatar",
            "Backdrop",
            "Badge",
            "BottomNavigation",
            "BottomNavigationAction",
            "Box",
            "Breadcrumbs",
            "Button",
            "ButtonBase",
            "ButtonGroup",
            "Card",
            "CardActionArea",
            "CardActions",
            "CardContent",
            "CardHeader",
            "CardMedia",
            "Checkbox",
            "Chip",
            "CircularProgress",
            "ClickAwayListener",
            "Collapse",
            "Container",
            "CssBaseline",
            "Dialog",
            "DialogActions",
            "DialogContent",
            "DialogContentText",
            "DialogTitle",
            "Divider",
            "Drawer",
            "ExpansionPanel",
            "ExpansionPanelActions",
            "ExpansionPanelDetails",
            "ExpansionPanelSummary",
            "Fab",
            "Fade",
            "FilledInput",
            "FormControl",
            "FormControlLabel",
            "FormGroup",
            "FormHelperText",
            "FormLabel",
            "Grid",
            "GridList",
            "GridListTile",
            "GridListTileBar",
            "Grow",
            "Hidden",
            "Icon",
            "IconButton",
            "Input",
            "InputAdornment",
            "InputBase",
            "InputLabel",
            "LinearProgress",
            "Link",
            "List",
            "ListItem",
            "ListItemAvatar",
            "ListItemIcon",
            "ListItemSecondaryAction",
            "ListItemText",
            "ListSubheader",
            "Menu",
            "MenuItem",
            "MenuList",
            "MobileStepper",
            "Modal",
            "NativeSelect",
            "NoSsr",
            "OutlinedInput",
            "Paper",
            "Popover",
            "Popper",
            "Portal",
            "Radio",
            "RadioGroup",
            "RootRef",
            "Select",
            "Slide",
            "Slider",
            "Snackbar",
            "SnackbarContent",
            "Step",
            "StepButton",
            "StepConnector",
            "StepContent",
            "StepIcon",
            "StepLabel",
            "Stepper",
            "SvgIcon",
            "SwipeableDrawer",
            "Switch",
            "Tab",
            "Table",
            "TableBody",
            "TableCell",
            "TableFooter",
            "TableHead",
            "TablePagination",
            "TableRow",
            "TableSortLabel",
            "TextareaAutosize",
            "Tabs",
            "TextField",
            "Toolbar",
            "Tooltip",
            "Typography",
            "Zoom",
        ])
    })
})

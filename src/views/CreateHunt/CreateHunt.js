import React from "react";
// @material-ui/core components
import {makeStyles, useTheme} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Box from "@material-ui/core/Box";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ImageUpload from "../UserProfile/ImageUpload";



const galleryImageList = [
  "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
  "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
  "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
];

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tasks = [
  'Cycle to work',
  'Take public transportation',
  'Bring tupperware',
  'Buy regional food',
];

function getStyles(task, taskName, theme) {
  return {
    fontWeight:
      taskName.indexOf(task) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles(styles);

export default function CreateHunt() {
  const [state, setState] = React.useState({
    category: "",
    pointType: "",
    badgeSelect: "",
    inviteColleagues: "",
    verificationMethodSelect: "",
    basedOn1: "",
    basedOn2: "",
    basedOn3: "",
    basedOn4: "",
  });

  const [taskNames, setTaskNames] = React.useState([]);

  const handleTasksChange = (event) => {
    setTaskNames(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const [openAddYourOwnTask, setOpenAddYourOwnTask] = React.useState(false);

  const handleClickOpenAddYourOwnTask = () => {
  setOpenAddYourOwnTask(true);
  };

  const handleCloseAddYourOwnTask = () => {
  setOpenAddYourOwnTask(false);
  };

  const [openCreateYourOwnBadge, setOpenCreateYourOwnBadge] = React.useState(false);

  const handleClickOpenCreateYourOwnBadge = () => {
  setOpenCreateYourOwnBadge(true);
  };

  const handleCloseCreateYourOwnBadge = () => {
  setOpenCreateYourOwnBadge(false);
  };

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Create a SOCI Hunt</h4>
              <p className={classes.cardCategoryWhite}>Welcome to the creation kit for closed SOCIS Hunts!</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ margin: "10px 0 -10px 0", fontSize: "1.5rem" }}>Level 1</InputLabel>
                  <CustomInput
                    labelText="Add a description"
                    id="hunt-description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style={{ margin: "10px 0 10px 0" }}>
                  <InputLabel>Choose category</InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: 'category',
                      id: 'category-native-helper',
                    }}
                    style={{ minWidth: "150px" }}
                  >
                    <option value="None" value="" />
                    <option value="environment">Environment</option>
                    <option value="education">Education</option>
                    <option value="family">Family</option>
                    <option value="careGiving">Care Giving</option>
                  </NativeSelect>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style={{ margin: "10px 0 10px 0" }}>
                  <InputLabel>Choose tasks</InputLabel>
                  <Select
                    labelId="tasksSelect-label"
                    id="tasksSelect"
                    multiple
                    value={taskNames}
                    onChange={handleTasksChange}
                    input={<Input id="tasksSelect" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                    style={{ minWidth: "150px" }}
                  >
                    {tasks.map((task) => (
                      <MenuItem key={task} value={task} style={getStyles(task, taskNames, theme)}>
                        {task}
                      </MenuItem>
                    ))}
                  </Select>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Box>
                    <Button onClick={handleClickOpenAddYourOwnTask} type="submit" fullWidth  align={'center'} variant="contained" color="primary" className={classes.submit} style={{ marginBottom: "20px", backgroundColor: "#999", boxShadow: "none" }}>
                      Add your own task
                    </Button>
                    <Dialog
                      open={openAddYourOwnTask}
                      onClose={handleCloseAddYourOwnTask}
                      aria-labelledby="alert-add-your-own-task-title"
                      aria-describedby="alert-add-your-own-task-description"
                    >
                      <DialogTitle id="alert-add-your-own-task-title">{"Add your own task"}</DialogTitle>
                      <DialogContent>
                        <GridItem xs={12} sm={12} md={12} style={{ marginTop: "-35px" }}>
                          <CustomInput
                            labelText="Name your task"
                            id="ownTask"
                            formControlProps={{
                              fullWidth: true
                            }}
                            
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} style={{ marginTop: "10px" }}>
                          <InputLabel>Choose verification method</InputLabel>
                          <NativeSelect
                            value={state.name}
                            onChange={handleChange}
                            inputProps={{
                              name: 'verificationMethodSelect',
                              id: 'verificationMethodSelect-native-helper',
                            }}
                          >
                            <option value="None" value="" />
                            <option value="pictureUpload">Picture upload</option>
                            <option value="gps">GPS</option>
                            <option value="confirmationByPerson">Confirmation by person</option>
                            <option value="trust">Trust</option>
                          </NativeSelect>
                        </GridItem>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseAddYourOwnTask} color="primary" autoFocus>
                          Add task
                        </Button>
                      </DialogActions>
                    </Dialog>       
                  </Box>
                </GridItem>
                <GridContainer xs={12} sm={12} md={12} style={{ padding: "0 0 20px 20px" }}>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel>Your task</InputLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel>Points based on</InputLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel>Estimate</InputLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel>Points</InputLabel>
                  </GridItem>
                </GridContainer>
                <GridContainer xs={12} sm={12} md={12} style={{ padding: "0 20px 20px 20px" }}>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-read-only-input"
                      label=""
                      defaultValue="Cycle to work"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel style={{ color: "#AAAAAA" }}>Based on</InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: 'basedOn1',
                        id: 'basedOn1-native-helper',
                      }}
                    >
                      <option value="duration">Duration</option>
                      <option value="effort">Effort</option>
                    </NativeSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Estimate"
                      id="estimate1"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                 <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Points"
                      id="points1"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer xs={12} sm={12} md={12} style={{ padding: "0 20px 20px 20px" }}>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-read-only-input"
                      label=""
                      defaultValue="Buy regional food"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel style={{ color: "#AAAAAA" }}>Based on</InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: 'basedOn2',
                        id: 'basedOn2-native-helper',
                      }}
                    >
                      <option value="effort">Effort</option>
                      <option value="duration">Duration</option>
                    </NativeSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Estimate"
                      id="estimate2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                 <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Points"
                      id="points2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer xs={12} sm={12} md={12} style={{ padding: "0 20px 20px 20px" }}>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-read-only-input"
                      label=""
                      defaultValue="Bring tupperware"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel style={{ color: "#AAAAAA" }}>Based on</InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: 'basedOn3',
                        id: 'basedOn3-native-helper',
                      }}
                    >
                      <option value="effort">Effort</option>
                      <option value="duration">Duration</option>
                    </NativeSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Estimate"
                      id="estimate3"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                 <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Points"
                      id="points3"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer xs={12} sm={12} md={12} style={{ padding: "0 20px 20px 20px" }}>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-read-only-input"
                      label=""
                      defaultValue="Take public transportation"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel style={{ color: "#AAAAAA" }}>Based on</InputLabel>
                    <NativeSelect
                      value={state.name}
                      onChange={handleChange}
                      inputProps={{
                        name: 'basedOn4',
                        id: 'basedOn4-native-helper',
                      }}
                    >
                      <option value="duration">Duration</option>
                      <option value="effort">Effort</option>
                    </NativeSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Estimate"
                      id="estimate4"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                 <GridItem xs={12} sm={12} md={3} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Points"
                      id="points4"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridItem xs={12} sm={12} md={12} style={{ padding: "0 20px" }}>
                  <Button color="info">Add another level</Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style={{ margin: "10px 0 10px 0" }}>
                  <InputLabel>What badge would you like to offer?</InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: 'badgeSelect',
                      id: 'badgeSelect-native-helper',
                    }}
                    style={{ minWidth: "150px" }}
                  >
                    <option value="None" value="" />
                    <option value="robinHood">Robin Hood</option>
                    <option value="localHero">Local Hero</option>
                    <option value="globalHero">Global Hero</option>
                    <option value="covid19">Covid-19</option>
                    <option value="greenThinker">Green Thinker</option>
                  </NativeSelect>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Box>
                    <Button onClick={handleClickOpenCreateYourOwnBadge} type="submit" fullWidth  align={'center'} variant="contained" color="primary" className={classes.submit} style={{ marginBottom: "20px", backgroundColor: "#999", boxShadow: "none" }}>
                      Create your own badge
                    </Button>
                    <Dialog
                      open={openCreateYourOwnBadge}
                      onClose={handleCloseCreateYourOwnBadge}
                      aria-labelledby="alert-dialog-title-create-your-own-badge"
                      aria-describedby="alert-dialog-description-create-your-own-badge"
                    >
                      <DialogTitle id="alert-dialog-title-create-your-own-badge">{"Create your SOCIS Hunt achievement badge"}</DialogTitle>
                      <DialogContent>
                        <GridItem xs={12} sm={12} md={12} style={{ marginTop: "-35px" }}>
                          <CustomInput
                            labelText="Name your badge"
                            id="ownBadge"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={10} sm={10} md={4} style={{ marginTop: "10px" }}>
                          <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
                        </GridItem>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseCreateYourOwnBadge} color="primary" autoFocus>
                          Add task
                        </Button>
                      </DialogActions>
                    </Dialog>       
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel>Set a timeframe for your hunt</InputLabel>
                </GridItem>
                <GridContainer style={{ padding: "0 20px" }}>
                  <GridItem xs={12} sm={12} md={4} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="Start"
                      id="startHuntTime"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4} style={{ marginTop: "-27px" }}>
                    <CustomInput
                      labelText="End"
                      id="endHuntTime"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridItem xs={12} sm={12} md={12} style={{ margin: "10px 0 10px 0" }}>
                  <InputLabel>Invite colleagues</InputLabel>
                  <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                      name: 'inviteColleagues',
                      id: 'inviteColleagues-native-helper',
                    }}
                  >
                    <option value="None" value="" />
                    <option value="manually">Manually</option>
                    <option value="viaDomainName">Via domain name</option>
                    <option value="shareableLink">Shareable Link</option>
                  </NativeSelect>
                </GridItem>
              </GridContainer>           
            </CardBody>
            <CardFooter>
              <Button color="info">Create Challenge</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

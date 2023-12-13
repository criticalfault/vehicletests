import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function App() {
const [sensor, setSensor] = useState(0);
const [off_road_handling, setOff_road_handling] = useState(0);
const [ECM, setECM] = useState(0);
const [ECCM, setECCM] = useState(0);
const [VCR, setVCR] = useState(null);
const [AutoNav, setAutoNav] = useState(0);


  return (
    <div className="App">
      <Container>
        <h1>Vehicle Test Helper</h1>
        <hr></hr>
        
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Vehicle Stats</Accordion.Header>
            <Accordion.Body>
              <Row>
              <Col xs={12}>
                <Form.Select aria-label="Vehicle Type" className="mb-3">
                  <option>Vehicle Type</option>
                  <option value="0">Car/Pickup</option>
                  <option value="3">Sports Car</option>
                  <option value="5">Motorcycle</option>
                  <option value="-3">Limousine/Van</option>
                  <option value="-5">Heavy Truck</option>
                  <option value="-3">Tracked Vehicle</option>
                  <option value="-7">Tractor Trailer</option>
                  <option value="5">Racing Boat</option>
                  <option value="-10">Yacht</option>
                  <option value="0">Small Airplane</option>
                  <option value="-5">Large Airplane</option>
                  <option value="20">Fighter Jet</option>
                  <option value="10">Low-Altitude-Vehicle/Thunderbird</option>
                  <option value="5">Helicopter</option>
                  <option value="2">Hovercraft</option>
                  <option value="-10">Lighter-than-Air/Zeppelin</option>
                  <option value="10">Ultralight Aircraft</option>
                  <option value="-10">Train/Monorail</option>
                </Form.Select>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="Sensor">Sensor</InputGroup.Text>
                  <Form.Control
                    placeholder="Sensor"
                    aria-label="Sensor"
                    aria-describedby="Sensor"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="AutoNav">AutoNav</InputGroup.Text>
                  <Form.Control
                    placeholder="AutoNav"
                    aria-label="AutoNav"
                    aria-describedby="AutoNav"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="on_road_handling">On Road Handling</InputGroup.Text>
                  <Form.Control
                    placeholder="On Road Handling"
                    aria-label="On Road Handling"
                    aria-describedby="On Road Handling"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="off_road_handling">Off Road Handling</InputGroup.Text>
                  <Form.Control
                    placeholder="Off Road Handling"
                    aria-label="Off Road Handling"
                    aria-describedby="Off Road Handling"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="ECM">ECM</InputGroup.Text>
                  <Form.Control
                    placeholder="ECM"
                    aria-label="ECM"
                    aria-describedby="ECM"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="ECCM">ECCM</InputGroup.Text>
                  <Form.Control
                    placeholder="ECCM"
                    aria-label="ECCM"
                    aria-describedby="ECCM"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="Speed">Speed</InputGroup.Text>
                  <Form.Control
                    placeholder="Speed"
                    aria-label="Speed"
                    aria-describedby="Speed"
                  />
                </InputGroup>
              </Col>
              <Col xs={6}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="MaxSpeed">Max Speed</InputGroup.Text>
                  <Form.Control
                    placeholder="Max Speed"
                    aria-label="Max Speed"
                    aria-describedby="Max Speed"
                  />
                </InputGroup>
              </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Conditions / Rigger Stats</Accordion.Header>
            <Accordion.Body>
            <Row>
              <Col xs={6}>
                <h3>Conditions</h3>
                <div className="mb-3">
                  <Form.Check label="Unfamiliar vehicle"             value="1" name="unfamiliar_vehicle" type="checkbox" style={{"textAlign":"left"}}/>
                  <Form.Check label="Non-stressful situation"        value="-1" name="non_stressful_situation" type="checkbox" style={{"textAlign":"left"}}/>
                  <Form.Check label="Stressful situation"            value="1" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Large vehicle of type"          value="2" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Very large vehicle of type"     value="3" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Weather bad"                    value="3" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Weather terrible"               value="4" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Action performed during combat" value="2" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Using datajack but no VCR"      value="-1" name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Check label="Rigger in control"              value={VCR} name="" type="checkbox" style={{"textAlign":"left"}} />
                  <Form.Select aria-label="Terrian Select">
                    <option>Terrian Select</option>
                    <option value="-1">Open</option>
                    <option value="1">Restricted</option>
                    <option value="3">Tight</option>
                  </Form.Select>
                </div>
              </Col>
              <Col xs={6}>
                <h3>Rigger Stats</h3>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="Reaction">Reaction</InputGroup.Text>
                  <Form.Control
                    placeholder="Reaction"
                    aria-label="Reaction"
                    aria-describedby="Reaction"
                  />
                </InputGroup>
                <Form.Select aria-label="VCR Rating">
                    <option>VCR Rating</option>
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br></br><br></br>
      <Row>
        <Col>
          <Tabs defaultActiveKey="accel_break" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="drive_test" title="Driving Test">
              <p>Confer SR3 134.<br></br><br></br>The Driving Test is a complex action and is necessary whenever a character attempts something that isn't just part of
               basic vehicle operation. See Skill Ratings and Meanings for examples of a character's general experience with a vehicle. To drive a car or accomplish
                a standard landing or take-off maneuver, no test is necessary as long as the character has some ranks in the appropriate skill. Exceptional deeds like
                high-speed maneuvers, stunts, vehicle operations under bad circumstances or combat (see below) require a Driving Test.<br></br><br></br>
                To make a Driving Test, the player character rolls the most appropriate vehicle skill. The Target Number is the vehicle's Handling Rate. Rigger may add
                dice from their Control Pool. In a non-combat situation, the Autonav Rating can be added as well.</p>
            </Tab>
            <Tab eventKey="accel_break" title="Accelerating / Braking">
              <p>Confer SR3 141<br></br><br></br>
                The driver makes a Driving Test using his vehicle skill against the vehicle's Handling Rating and applies modifiers from the Acceleration/Braking Target Modifier 
                Table below. If successful, the vehicle increases/decreases speed equal to the vehicle's Acceleration Rating multiplied by the number of successes. No vehicle can 
                accelerate more than half its Speed Rating in one round. The Speed Rating is measured in meters / turn. A deceleration of more than the vehicle's Acceleration Rating
                x 4 causes a Crash Test.</p>
            </Tab>
            <Tab eventKey="positioning" title="Positioning">
              <p>Confer SR3 142<br></br><br></br>The driver makes a Positioning Test using his vehicle skill against the vehicle's Handling Rating and applies modifiers from the 
              Positioning Target Modifier Table below. Positioning enables a driver to place the vehicle in a better tactical position for subsequent actions. A successful 
              positioning attempt gives a vehicle a higher Maneuver Score for the next Combat Round. This puts the vehicle in a tactical advantage and gives its passengers 
              more opportunities to act. Record the number of successes generated on the Positioning Test and add this value to the driver's Maneuver Score at the start of 
              the next Combat Round.</p>
              <p>In addition, a positioning attempt may bring a vehicle to a stop at a particular point in order to provide an advantageous position for characters to enter, 
              exit, mount or dismount from the vehicle.</p>
            </Tab>
            <Tab eventKey="ramming" title="Ramming" >
              <p>Confer SR3 143<br></br><br></br>The driver makes a Ramming Test using his vehicle skill against the vehicle's Handling Rating and applies modifiers from the 
              Ramming Target Modifier Table. Both the ramming vehicle and the target make Damage Resistance Tests for collision damage (SR3 145). Every vehicle that actually 
              takes damage from the ramming, must make a Crash Test.</p>
            </Tab>
            <Tab eventKey="hiding" title="Hiding" >
              <p>Confer SR3 144<br></br><br></br>The driver makes a Hiding Test using his vehicle skill against the vehicle's Handling Rating and applies modifiers from the Hiding 
              Target Modifier Table below. If the test succeeds, the vehicle breaks contact with the pursuing vehicle and also receives an Escape Bonus equal to the number 
              of successes generated in the test. The Escape Bonus applies to the Maneuver Score of subsequent Combat Turns, as long as the vehicle is not relocated. 
              In addition, the Escape Bonus applies to the target number of any Relocating Test of the pursuing vehicle.
              </p>
            </Tab>
            <Tab eventKey="relocating" title="Relocating" >
              <p>Confer SR3 144<br></br><br></br>To make a Relocating Test, the player makes an active Sensor Test against the hiding vehicle's Signature Rating and/or a Perception Test
              (passive Sensor Test), whichever test seems to be more appropriate. Modifiers from the Relocating Target Modifier Table below apply. Any time a vehicle successfully
              hides or breaks contact, the pursuing vehicle's character can attempt to relocate the hiding vehicle. If the Relocation Test is successful, the pursuing vehicle's 
              driver and passengers may take action against the target vehicle on their next available actions.<br></br>NPC drivers attempt to relocate a hiding vehicle for about 
              5 combat turns before giving up.</p>
            </Tab>
            <Tab eventKey="crash" title="Crash" >
              <p>Confer SR3 147<br></br><br></br>
              A Crash Test is necessary when the driver or pilot has lost control of a vehicle due to specific circumstances. A Crash Test is always a 
              critical situation. Unlike standard Damage Resistance Tests, the Crash Test's consequences are always severe. Most often the vehicle comes to a complete stop and 
              can't be used anymore until it got repaired. A Crash Tests are required in the following situations:
              <ul>
                <li>Vehicle takes damage during a Ramming Action.</li>
                <li>Vehicle takes Serious Damage in a single attack.</li>
                <li>Vehicle Condition Monitor reaches 'destroyed'.</li>
                <li>Vehicle decelerates more than its Acceleration Rating x 4.</li>
                <li>Whenever a special rule (or GM) specifically demands a Crash Test.</li>
              </ul>
              The Crash Test is a Driving Test against the vehicle's Handling Rating, modified by the table below. The driver or pilot may use Autonav and Control Pool dice for 
              a Crash Test. The maximum number of Control Pool dice equals the rigger's appropriate Driving Skill (if enough Combat Pool remains for the present Combat Turn).
              <br></br><br></br>
              Crash Test failure means that the vehicle crashes. It comes to a complete stop and the controlling player must make another Damage Resistance test to resist vehicle
              impact damage (SR3 145). This damage resistance test is rolled for the vehicle but passengers may have to roll subsequent Damage Resistance Tests as well if the 
              first test does not completely stage down the impact damage.</p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;


import React, { Component } from 'react';
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';

import axios from 'axios'

import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import '../../assets/css/search.css'
import '../../assets/css/major.css'

class MajorSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wordS: "พิมพ์/เลือก ภาควิชาที่เรียนอยู่",
        }
    }
   
    handleChange = (e) => {
        this.setState({wordS : e.label})
        var Url = "https://kunit-backend.herokuapp.com/unitOf/" + e.value
            axios.get(Url)
                .then(res => {
                    this.props.major(res.data["data"])
                })
    }
    render() {
        const options = [
            { value: 'A04', label: 'A04 Soil Science Faculty of Agriculture' },
            { value: 'A08', label: 'A08 Home Economics Faculty of Agriculture' },
            { value: 'A11', label: 'A11 Agricultural Extension and Communication Faculty of Agriculture' },
            { value: 'A13', label: 'A13 Agricultural Chemistry Faculty of Agriculture' },
            { value: 'A15', label: 'A15 Agricultural Science Faculty of Agriculture' },
            { value: 'A17', label: 'A17 Tropical Agriculture Faculty of Agriculture' },
            { value: 'A18', label: 'A18 Food and Nutrition Faculty of Agriculture' },
            { value: 'A19', label: 'A19 Pest Management Faculty of Agriculture' },
            { value: 'A20', label: 'A20 Industrial Animal Science Faculty of Agriculture' },
            { value: 'B00', label: 'B00 Not Affiliated with the Department Faculty of Fisheries' },
            { value: 'B01', label: 'B01 Fishery Management Faculty of Fisheries' },
            { value: 'B02', label: 'B02 Fishery Biology Faculty of Fisheries' },
            { value: 'B03', label: 'B03 Aquaculture Faculty of Fisheries' },
            { value: 'B04', label: 'B04 Fishery Products Faculty of Fisheries' },
            { value: 'B05', label: 'B05 Marine Science Faculty of Fisheries' },
            { value: 'C00', label: 'C00 Not Affiliated with the Department Faculty of Forestry' },
            { value: 'C02', label: 'C02 Forest Biology Faculty of Forestry' },
            { value: 'C04', label: 'C04 Silvery Faculty of Forestry' },
            { value: 'C05', label: 'C05 Forest Engineering Faculty of Forestry' },
            { value: 'C07', label: 'C07 Community Forestry Faculty of Forestry' },
            { value: 'C08', label: 'C08 Watershed Management and Environment Faculty of Forestry' },
            { value: 'C09', label: 'C09 Recreation and Tourism Park Faculty of Forestry' },
            { value: 'C10', label: 'C10 Wildlife Management and Pasture Faculty of Forestry' },
            { value: 'C11', label: 'C11 Community Forestry - Sociology and Anthropology Faculty of Forestry' },
            { value: 'C12', label: 'C12 Forest Management Faculty of Forestry' },
            { value: 'C31', label: 'C31 Wood Science and Technology Faculty of Forestry' },
            { value: 'C32', label: 'C32 Pulp and Paper Technology Faculty of Forestry' },
            { value: 'C33', label: 'C33 Wood and Paper Products Technology Faculty of Forestry' },
            { value: 'D01', label: 'D01 Mathematics Faculty of Science' },
            { value: 'D02', label: 'D02 Chemistry Faculty of Science' },
            { value: 'D03', label: 'D03 Biology Faculty of Science' },
            { value: 'D04', label: 'D04 Statistics Faculty of Science' },
            { value: 'D06', label: 'D06 Applied Radiation and Isotopes Faculty of Science' },
            { value: 'D07', label: 'D07 Physics Faculty of Science' },
            { value: 'D09', label: 'D09 Microbiology Faculty of Science' },
            { value: 'D10', label: 'D10 Genetics Faculty of Science' },
            { value: 'D11', label: 'D11 Botany Faculty of Science' },
            { value: 'D12', label: 'D12 Zoology Faculty of Science' },
            { value: 'D13', label: 'D13 Biochemistry Faculty of Science' },
            { value: 'D14', label: 'D14 Computer Science Faculty of Science' },
            { value: 'D16', label: 'D16 Earth Science Faculty of Science' },
            { value: 'D17', label: 'D17 Industrial Chemistry Faculty of Science' },
            { value: 'D18', label: 'D18 Radiation Biosciences Faculty of Science' },
            { value: 'D19', label: 'D19 Nuclear Science Faculty of Science' },
            { value: 'D20', label: 'D20 Life Science and Technology Faculty of Science' },
            { value: 'D32', label: 'D32 Prepare the Medicine Faculty of Science' },
            { value: 'E03', label: 'E03 Mechanical Engineering Faculty of Engineering' },
            { value: 'E05', label: 'E05 Electrical Engineering Faculty of Engineering' },
            { value: 'E06', label: 'E06 Civil engineering Faculty of Engineering' },
            { value: 'E08', label: 'E08 Industrial Engineering Faculty of Engineering' },
            { value: 'E09', label: 'E09 Computer Engineering Faculty of Engineering' },
            { value: 'E10', label: 'E10 Chemical Engineering Faculty of Engineering' },
            { value: 'E11', label: 'E11 Electrical Engineering Faculty of Engineering' },
            { value: 'E13', label: 'E13 Aerospace Engineering Faculty of Engineering' },
            { value: 'E14', label: 'E14 Environmental Engineering Faculty of Engineering' },
            { value: 'E16', label: 'E16 Materials Engineering Faculty of Engineering' },
            { value: 'E17', label: 'E17 Software Knowledge Engineering Faculty of Engineering' },
            { value: 'E18', label: 'E18 Geological Surveying and Engineering Faculty of Engineering' },
            { value: 'E21', label: 'E21 Civil Engineering - Water Resources Faculty of Engineering' },
            { value: 'E22', label: 'E22 Aviation Technology Management Faculty of Engineering' },
            { value: 'E23', label: 'E23 Aerospace Engineering - Business Administration Faculty of Engineering' },
            { value: 'E26', label: 'E26 Electrical Engineering (International Program) Faculty of Engineering' },
            { value: 'E27', label: 'E27 Industrial Engineering (International Program) Faculty of Engineering' },
            { value: 'E28', label: 'E28 Environmental Engineering (International Program) Faculty of Engineering' },
            { value: 'E35', label: 'E35 Not Affiliated with the Department Faculty of Engineering' },
            { value: 'F11', label: 'F11 Gymnastics Faculty of Education' },
            { value: 'F12', label: 'F12 Health Education Faculty of Education' },
            { value: 'F14', label: 'F14 Home Economics Faculty of Education' },
            { value: 'F16', label: 'F16 Teaching Mathematics Faculty of Education' },
            { value: 'F17', label: 'F17 Teaching Science Faculty of Education' },
            { value: 'F18', label: 'F18 Business and Computer Education Faculty of Education' },
            { value: 'G01', label: 'G01 Economics Faculty of Economics' },
            { value: 'G02', label: 'G02 Agricultural Economics Faculty of Economics' },
            { value: 'G03', label: 'G03 Cooperatives Economics Faculty of Economics' },
            { value: 'G04', label: 'G04 Agricultural and Resource Economics Faculty of Economics' },
            { value: 'G11', label: 'G11 Entrepreneurial Economics Faculty of Economics' },
            { value: 'G12', label: 'G12 Enterpreneurial Economics (International Program) Faculty of Economics' },
            { value: 'G21', label: 'G21 Agribusiness Faculty of Economics' },
            { value: 'H01', label: 'H01 Sociology and Anthropology Faculty of Social Sciences ' },
            { value: 'H02', label: 'H02 Psychology Faculty of Social Sciences ' },
            { value: 'H03', label: 'H03 Political Science Faculty of Social Sciences ' },
            { value: 'H04', label: 'H04 Geography Faculty of Social Sciences ' },
            { value: 'H06', label: 'H06 Laws Faculty of Social Sciences ' },
            { value: 'H07', label: 'H07 History Faculty of Social Sciences ' },
            { value: 'H08', label: 'H08 Southeast Asian Studies Faculty of Social Sciences ' },
            { value: 'H09', label: 'H09 Public Administration Faculty of Social Sciences ' },
            { value: 'I00', label: 'I00 Not Affiliated with the Department Faculty of Veterinary Medicine' },
            { value: 'K01', label: 'K01 Packing Technology Faculty of Agro-Industry' },
            { value: 'K02', label: 'K02 Biotechnology Faculty of Agro-Industry' },
            { value: 'K03', label: 'K03 Agro-Industrial Product Development Faculty of Agro-Industry' },
            { value: 'K04', label: 'K04 Food Science and Technology Faculty of Agro-Industry' },
            { value: 'K05', label: 'K05 Textile Science and Technology Faculty of Agro-Industry' },
            { value: 'K07', label: 'K07 Innovation and Technology of Agro-Industry Faculty of Agro-Industry' },
            { value: 'K41', label: 'K41 Food Engineering Faculty of Agro-Industry' },
            { value: 'L02', label: 'L02 Philosophy and Religion Faculty of Humanities' },
            { value: 'L32', label: 'L32 English Faculty of Humanities' },
            { value: 'L33', label: 'L33 French Faculty of Humanities' },
            { value: 'L34', label: 'L34 German Faculty of Humanities' },
            { value: 'L35', label: 'L35 Japanese Faculty of Humanities' },
            { value: 'L36', label: 'L36 Chinese Faculty of Humanities' },
            { value: 'L50', label: 'L50 Literature Faculty of Humanities' },
            { value: 'L71', label: 'L71 Mass Communication Faculty of Humanities' },
            { value: 'L72', label: 'L72 Thai Music Faculty of Humanities' },
            { value: 'L73', label: 'L73 Western Music Faculty of Humanities' },
            { value: 'L81', label: 'L81 Thai Faculty of Humanities' },
            { value: 'L85', label: 'L85 Communicative Thai Language for Foreigners Faculty of Humanities' },
            { value: 'L86', label: 'L86 Integrated Tourism Management Faculty of Humanities' },
            { value: 'L87', label: 'L87 Tourism Faculty of Humanities' },
            { value: 'L88', label: 'L88 Eastern Languages Faculty of Humanities' },
            { value: 'L89', label: 'L89 Tourism Innovation Faculty of Humanities' },
            { value: 'R01', label: 'R01 Architecture Faculty of Architecture' },
            { value: 'R02', label: 'R02 Landscape Architecture Faculty of Architecture' },
            { value: 'R03', label: 'R03 Architecture Faculty of Architecture' },
            { value: 'N01', label: 'N01 Finance Faculty of Business Administration' },
            { value: 'N02', label: 'N02 Management Faculty of Business Administration' },
            { value: 'N03', label: 'N03 Operations Management Faculty of Business Administration' },
            { value: 'N04', label: 'N04 Marketing Faculty of Business Administration' },
            { value: 'N05', label: 'N05 Accounting Faculty of Business Administration' },
            { value: 'P01', label: 'P01 Veterinary Technician Faculty of Veterinary Technology' },
            { value: 'P02', label: 'P02 Animal Nursing Faculty of Veterinary Technology' },
            { value: 'T01', label: 'T01 Environmental Science Faculty of Environment' },
            { value: 'T02', label: 'T02 Environmental Science and Technology Faculty of Environment', clearableValue: false },
        ];
        const filterOptions = createFilterOptions({ options });
        let { selectedOption } = this.state
        const value = selectedOption && selectedOption.value;
        return (
            <div >
                <br/>
                <h3 style={{fontSize: 18}}>1. เลือกภาควิชาที่ศึกษาอยู่</h3>
                
                <div className="MajorSearch">
                    <Select
                        autoFocus
                        name="major"
                        autosize={false}
                        value={value}
                        placeholder={this.state.wordS}
                        onChange={this.handleChange}
                        options={options}
                        filterOptions={filterOptions}
                        style={{fontSize: 15, color: '#000'}}
                    />
                </div>
            </div>
        );
    }
}

export default MajorSearch;

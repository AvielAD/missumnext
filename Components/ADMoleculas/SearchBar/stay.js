import { withFormik, Field } from 'formik';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup } from 'reactstrap';

const Stay = ({ handleSubmit }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
            <div className="">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret className="bg-white text-dark border-0">
                        Tipo de Estancia
                    </DropdownToggle>
                <DropdownMenu className="mt-4">
                    <FormGroup check>
                        <DropdownItem>Estancia Corta <Field type="checkbox" name="corta"/></DropdownItem>
                        <DropdownItem>Estancia Larga <Field type="checkbox" name="larga"/></DropdownItem>
                    </FormGroup>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>
    )
}

export default withFormik({
    handleSubmit(values) {
        console.log(values)
    }
})(Stay);
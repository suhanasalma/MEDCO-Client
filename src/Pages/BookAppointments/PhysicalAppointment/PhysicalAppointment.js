import React from 'react';
import './PhysicalAppointment.css'

const PhysicalAppointment = () => {
    return (
        <div>
            <div className="step text-xs">
                        <div className="step__item" id="divStep1">
                            <p className="step__item__text">Appointment Details</p>
                            <p className="step__item__number">1</p>
                        </div>
                        <div className="step__item active" id="divStep2">
                            <p className="step__item__text">Patient's information</p>
                            <p className="step__item__number">2</p>
                        </div>
                        <div className="step__item" id="divStep3">
                            <p className="step__item__text">Additional Services</p>
                            <p className="step__item__number">3</p>
                        </div>
                    </div>            
        </div>
    );
};

export default PhysicalAppointment;
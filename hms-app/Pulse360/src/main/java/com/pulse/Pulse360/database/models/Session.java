package com.pulse.Pulse360.database.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Data
@Table(name = "SESSIONS")
@NoArgsConstructor
@AllArgsConstructor
public class Session {
    @Id
    @GeneratedValue(generator = "custom-id-generator")
    @GenericGenerator(name = "custom-id-generator", strategy = "com.pulse.Pulse360.database.generators.SessionIdGenerator")
    @Column(name = "sessionId", nullable = false)
    long sessionId;

    @Column(name="userId")
    long userId;

    @Column(name="createdAt")
    long createdAtMillis;

    @Column(name="updatedAt")
    long updatedAtMillis;

     @Column(name="expiresAt")
    long expiresAtMillis;
}

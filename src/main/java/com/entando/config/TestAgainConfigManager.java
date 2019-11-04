
package com.entando.config;

import org.entando.config.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestAgainConfigManager {

    private final ConfigService<TestAgainConfig> configService;

    @Autowired
    public TestAgainConfigManager(final ConfigService<TestAgainConfig> configService) {
        this.configService = configService;
    }

    public TestAgainConfig getTestAgainConfig() {
        return Optional.ofNullable(configService.getConfig())
            .orElseGet(TestAgainConfig::getDefault);
    }

    public void update(TestAgainConfig testAgainConfig) {
        configService.updateConfig(testAgainConfig);
    }

}


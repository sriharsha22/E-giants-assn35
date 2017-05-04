package com.assn35;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by harsha on 5/3/17.
 */
@RestController
public class Controller {

    @RequestMapping(value="/echo")
    public String echo(@RequestParam(value="request", defaultValue="Hello!") String request) {
        return request;
    }
}
